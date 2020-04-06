const express = require('express');
const app = new express();
const  http = require('http').Server(app);
const io = require('socket.io')(http);
const Log = require('log'); const log = new Log('debug');


let port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.redirect('index.html');
});

io.on('connection',(socket)=>{
    socket.on('stream',(image)=>{
            //imagen por segundo
            socket.broadcast.emit('stream',image)
    });
});

http.listen(port,()=>{
       console.log('Servidor escuchando %s ',port);
});