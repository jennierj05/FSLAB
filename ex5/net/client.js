const net = require('net');
const cli = net.createConnection({port:3000},()=>{
    console.log('Client is connected to server');
    process.stdin.on('data',input=>{
        const msg=input.toString().trim();
        if (msg.toLowerCase()==='end') {
            console.log('Now client is disconnected');
            cli.end();
            return;
        }
        cli.write(msg);
    });
});
cli.on('data', data=>{
    console.log('Server:',data.toString().trim());
});
cli.on('end',()=>{
    console.log('Client is disconnected from server');
    return;
});
