var server = require ('net').createServer(function(socket){
    
    console.log('new connection');

    socket.setEncoding('utf8');

    socket.write('merhaba cikmak icin quit komutunu kullanin');

    socket.on('data',function(data){
        console.log('got: ',data.toString())
        if (data.trim().toLowerCase()==='quit'){
            socket.write('bays..');
            return socket.end();
        }else if(data.trim().toLowerCase()==='name'){
            socket.write('Fatih')
        }
       
    })

    socket.on('end',function(){
        console.log('Cliend connection ended');
    })

}).listen(4001);

