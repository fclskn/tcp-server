//Include NODEJS net module
const Net = require('net');
//The port on which the server is listening 
const port = 3000;

//Use net.createServer() in your code. This is just for illustration purpose.
//Create a new TCP server
const server = new Net.server();
//The server listens to a socket for a client to make a connection request.
//Like a socket as an end point 
server.listen(port, function(){
    console.log(`Server listening for connection requests on socket localhost: ${port}`);
    })

//When a client request a connection with the server, the server creates a new
//socket dedicated to that client
    server.on('connection', function(socket){
        console.log('A new connection  has been established')
    })

    //Now that a TCP connection has been establisshed, the server can send data to
    //the xlient by writing to its socket 
    socket.write('Hello client.');

    //The server can also recieve data from the client by reading from its socket
    socket.on('data',function(){
        console.log('Closing connection with the client');
    });

    //When the client requestg to end the TCP connection with the server. the server
    //ends the connection
    socket.on('end',function(){
        console.log('Closing connection with the client.');
    });
    
    //Dont forget to catch error, for your own sake 
    socket.on('error', function(err){
        console.log(`Error: ${err}`)
    })
    
    




