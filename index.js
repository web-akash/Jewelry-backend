const express = require("express");

var cors = require("cors");
const app = express();

app.use(cors());

app.get("/navbar", function (req, res) {
  let navbar = {
    logo: "https://i.ibb.co/Nm5y4gM/logo.png",
    navItems: [
      {
        item: "Home",
      },
      {
        item: "Product",
      },
      {
        item: "Booking",
      },
      {
        item: "Contacts",
      },
      {
        item: "About",
      },
    ],
  };

  res.json(navbar);
});

app.listen(3000);
