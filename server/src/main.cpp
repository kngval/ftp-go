#include <iostream>
#include "server.h"
int main(){
  Server server(3000); 
  server.start();
  std::cout << "testing cmake\n"; 

  return 0;
}
