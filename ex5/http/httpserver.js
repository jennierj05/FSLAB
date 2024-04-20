const http = require('http');

const server = http.createServer((req, res) => {
    let name = req.url;
    // Remove the leading '/' character from the URL
    name = name.substring(1);

    // Calculate word count and character count
    const wordCount = name.trim().split(/\s+/).length;
    const charCount = name.length;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hello ${name}</h1><p>Word count: ${wordCount}</p><p>Character count: ${charCount}</p>`);
});

server.listen(8031, "localhost", () => {
    console.log('Server is running at http://localhost:8031/');
});
