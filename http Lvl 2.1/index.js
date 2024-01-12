const fs = require("fs");
const http = require("http");

function readAnyFile(path) {
    return new Promise((resolve, reject) => {

        fs.readFile(path, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        })
    })
}

const server = http.createServer(function serverHandler(request, response) {
    console.log("New Request:", request.method, request.url);

    if (request.url === "/" || request.url === "/home") {
        readAnyFile("./pages/home.html").then((text) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(text);
            response.end();
        });
    } else if (request.url === "/contact") {
        readAnyFile("./pages/contact.html").then((text) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(text);
            response.end();
        });
    } else if (request.url === "/about") {
        readAnyFile("./pages/about.html").then((text) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(text);
            response.end();
        });
    } else if (request.url === "/assets/style.css") {
        readAnyFile("./assets/style.css").then((text) => {
            response.writeHead(200, { "Content-Type": "text/css" });
            response.write(text);
            response.end();
        });
    } else {
        readAnyFile("./pages/faq.html").then((text) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(text);
            response.end();
        });
    }
});

const Port = 7070;
server.listen(Port, () => console.log("Server läuft auf Port: " + Port))






/* const fs = require("fs");
const http = require("http");

function readAnyFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (error, data) => {
            if (error) reject(error);
            else resolve(data);
        });
    });
}

function includeCSS(response) {
    return readAnyFile("./assets/style.css")
        .then((cssText) => {
            response.write(`<style>${cssText}</style>`);
        })
        .catch((error) => {
            console.error(error);
        });
}

const server = http.createServer(function serverHandler(request, response) {
    console.log("New Request:", request.method, request.url);

    if (request.url === "/" || request.url === "/home") {
        readAnyFile("./pages/home.html")
            .then((htmlText) => {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(htmlText);
                return includeCSS(response);
            })
            .then(() => {
                response.end();
            })
            .catch((error) => {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Interner Serverfehler");
                console.error(error);
            });
    } else if (request.url === "/contact") {
        readAnyFile("./pages/contact.html")
            .then((htmlText) => {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(htmlText);
                return includeCSS(response);
            })
            .then(() => {
                response.end();
            })
            .catch((error) => {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Interner Serverfehler");
                console.error(error);
            });
    } else if (request.url === "/about") {
        readAnyFile("./pages/about.html")
            .then((htmlText) => {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(htmlText);
                return includeCSS(response);
            })
            .then(() => {
                response.end();
            })
            .catch((error) => {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Interner Serverfehler");
                console.error(error);
            });
    } else {
        readAnyFile("./pages/faq.html")
            .then((htmlText) => {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(htmlText);
                return includeCSS(response);
            })
            .then(() => {
                response.end();
            })
            .catch((error) => {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Interner Serverfehler");
                console.error(error);
            });
    }
});

const Port = 7070;
server.listen(Port, () => console.log("Server läuft auf Port: " + Port)); */