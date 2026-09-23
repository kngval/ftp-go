
#include <string>
struct HttpResponse {
  int statusCode;
  std::string statusText;
  std::string responseBody;
  bool closeConnection = false;
};
