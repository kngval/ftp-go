#pragma once
#include "http/http_response.h"
#include <string>

class Server {
public:
  Server(int port);
  void start();

private:
  int port;
  void handleClient(int client_socket);
  HttpResponse handleRequest(const std::string& request);
};
