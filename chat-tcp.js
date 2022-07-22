var net= require('net');
var server=net.createServer();

var socket=[];

server.on('error', function(){
    console.log('Server error:'+err.message);
});
server.on('close',function(){
    console.log('connection closed');
    var index= sockets.indexOf(socket);
    sockets.splice(index,1);
    console.log('socket count', sockets.length);
});

server.on('connetction',function(socket){
    console.log('yeni bir connection acildi');

    sockets.push(socket);
    console.log('socket count: '+sockets.length);
    socket.on('data',function(data){
        console.log('Gelen data: '+data);
        sockets.forEach(function(otherSocket){
            if(otherSocket!==socket)
            otherSocket.write(data);
        })


    })
})