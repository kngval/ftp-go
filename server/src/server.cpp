#include "server.h"
#include <cstring>
#include <iostream>
#include <netinet/in.h>
#include <sys/socket.h>
#include <unistd.h>
#include <sstream>

//constructor
Server::Server(int port) { this->port = port; }

//Server::start method
void Server::start() {
  int server_fd = socket(AF_INET, SOCK_STREAM, 0);

  if (server_fd < 0) {
    std::cerr << "Error creating socket : " << std::strerror(errno)
              << std::endl;
    return;
  }

  sockaddr_in addr;
  addr.sin_family = AF_INET;
  addr.sin_port = htons(8080);
  addr.sin_addr.s_addr = INADDR_ANY;

  int bind_res = bind(server_fd, (struct sockaddr *)&addr, sizeof(addr));
  if (bind_res < 0) {
    std::cerr << "Error binding : " << std::strerror(errno) << std::endl;
    return;
  }

  int listen_res = listen(server_fd, 5);
  if(listen_res < 0) {
    std::cerr << "liste failed : " << std::strerror(errno) << std::endl;
    return;
  }


  

  std::cout << "Server running on http://localhost:" << port << '\n'; 

  while(true){
    socklen_t addrlen = sizeof(addr); 
    int client_socket = accept(server_fd,(struct sockaddr*) &addr,&addrlen);
    if(client_socket < 0) {
      std::cerr << "accept failed : " << std::strerror(errno) << std::endl;
      return;
    }
    handleClient(client_socket);
  };
  

}

void Server::handleClient(int client_socket){
  char buffer[3000] = {0};
  read(client_socket,buffer,3000);
  


  std::string request = buffer; //string variable

  std::cout << "Request : \n" << request << '\n';

  std::string body = handleRequest(request);

  std::stringstream response;
  response << "HTTP/1.1 200 OK\r\n";
  response << "Content-Type: text/plain\r\n";
  response << "Content-Length: " << body.length() << "\r\n";
  response << "\r\n";
  response << body;

  std::string res = response.str();

  send(client_socket,res.data(),res.length(),0);
  

};
