const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(
    (req, res) => {
      const q = url.parse(req.url, true).query;

      var data = "Username: " + q.username + "\nPassword: " + q.password;

      fs.writeFile("userpass", data, (err) => {
        if (err) return res.end("There was an error!!");
        return res.end("Username and password saved succesfully");
      });
    },
    (err) => {
      console.log(err);
    }
  )
  .listen(8080, () => {
    console.log("Server listening at 8080");
  });
