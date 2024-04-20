const net = require('net');
const server=net.createServer(socket => {
    console.log('Client connected');
    socket.on('data', data => {
        const msg=data.toString().trim();
        if (msg.toLowerCase()==='end') {
            console.log('Client disconnected');
            socket.end();
            return;
        }
        console.log('Client:',msg);
        process.stdout.write('Server: ');
        process.stdin.once('data',input => {
            
            const res=input.toString().trim();
            if (res.toLowerCase()==='end') {
                console.log('Server disconnected');
                socket.end();
                return;
            }
            socket.write(res);
        });
    });

    socket.on('end', () => {
        console.log('Client disconnected');
        return;
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
