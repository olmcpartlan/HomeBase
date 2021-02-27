all: server.o run
	clean server.o && run


server.o: server.cpp
	g++ server.cpp -o boost_server -pthread -lboost_filesystem -lboost_system -std=c++11

clean: 
	rm -rf ./boost_server ./parser

run: 
	./boost_server 0.0.0.0 8000 . 1

