#include "server.h"
#include <cstring>
#include <iostream>
#include <netinet/in.h>
#include <sys/socket.h>
Server::Server(int port) { this->port = port; }

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
  listen(server_fd, 5);

  std::cout << 

}
