const http = require('http');
// Import the 'http' module, a built-in module in Node.js used to create HTTP servers

const port = 3000;
// Define the port number for the server to listen on (port 3000)

const server = http.createServer((req, res) => {
    // Create an HTTP server. The callback function will handle incoming requests (req) and send responses (res)
    
    console.log(req);
    // Log the incoming request object to the console (for debugging purposes)

    console.log(res);
    // Log the response object to the console (for debugging purposes)

    // Check if the request URL is the home ('/') route
    if(req.url === '/') {
        res.write('Home');
        // If the URL is '/', write 'Home' to the response body
    }
    else if(req.url === '/about') {
        res.write('About');
        // If the URL is '/about', write 'About' to the response body
    }
    else {
        res.write('Hello World');
        // If the URL is neither '/' nor '/about', write 'Hello World' to the response body
    }

    res.end();
    // End the response. No more data will be sent to the client after this
});

// Start the server and listen on the specified port (3000)
server.listen(port, () => {
    // Callback function triggered once the server starts listening
    console.log(`Server running on port ${port}`);
    // Log a message indicating that the server is running on the specified port
});
