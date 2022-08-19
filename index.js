require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const bodyParser = require("body-parser");
const bparser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "./templates")));

app.listen(port, () => {
  console.log(`Server started in port ${port}`);
});

//----------------------------------------------------------------------------------//

app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "solo.linux | Raj Chaulagain",
    imgpath: "home",
    path: "home",
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

//----------------------------------------------------------------------------------//

app.post("/contact", bparser, (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let msg = req.body.msg;

  const mailer = require("nodemailer");
  let service = mailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.username,
      pass: process.env.pass,
    },
  });

  let options = {
    from: process.env.username,
    to: "chauraj345r@gmail.com",
    subject: name,
    html: `<p>Name : ${name}</p>
               <p>email : ${email}</p>
               <p>Date : ${new Date().toLocaleString("en-US", {
                 day: "numeric",
                 month: "long",
                 weekday: "long",
               })}</p>
               <p>Time : ${new Date().toLocaleString("en-US", {
                 hour: "numeric",
                 minute: "numeric",
                 second: "numeric",
                 hour12: true,
               })}</p>
               <p>Message : ${msg}</p>
               <p style="text-align: center;">Copyright &copy; solo.linux</p>`,
  };

  service.sendMail(options, (error) => {
    if (error) {
      console.log("NODEMAILER index \n" + error);
      res.send({ bool: "false" });
    } else {
      console.log(`message sent from ${name}`);
      res.send({ bool: "true" });
    }
  });
});
