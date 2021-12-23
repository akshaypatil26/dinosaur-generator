const express = require("express"); // import express
const app = express(); // create express app
const port = 3000; // set port

app.use(express.static("public")); // to serve static files

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); // to start the server
