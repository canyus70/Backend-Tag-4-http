const fs = require("fs");
const http = require("http");

function readAnyFile(path) {
    return new Promise((resolve, reject) => {

        fs.readFile(path, (error, data) => {
            if (error) rejects(error);
            else resolve(data);
        })
    })
}

const server = http.createServer(function serverHandler(request, response) {
    console.log("New Request:", request.method, request.url);

    if (request.url === "/" || request.url === "/home") {
        readAnyFile("./pages/home.html").then((text) => {
            response.write(text);
            response.end();
        });
    } else if (request.url === "/contact") {
        readAnyFile("./pages/contact.html").then((text) => {
            response.write(text);
            response.end();
        });
    } else if (request.url === "/about") {
        readAnyFile("./pages/about.html").then((text) => {
            response.write(text);
            response.end();
        });
    } else {
        readAnyFile("./pages/faq.html").then((text) => {
            response.write(text);
            response.end();
        });
    }
});

const Port = 7070;
server.listen(Port, () => console.log("Server läuft auf Port: " + Port))
