#pragma once
#include <string>

class Server {
public:
  Server(int port);
  void start();

private:
  int port;
  void handleClient(int client_socket);
  std::string handleRequest(const std::string& request);
};
