const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        },
      }
    ]
  };

});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

// Mailchimp API Key
// e9d41efe7fbe31fad9398211ea809fe4-us21

// list id
// 73bf87d946