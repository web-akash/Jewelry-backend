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

app.get("/bannar", function (req, res) {
  let bannar = {
    bannar: [
      {
        item: "https://i.ibb.co/b1XVXW7/Banner.png",
      },
      {
        item: "https://i.ibb.co/b1XVXW7/Banner.png",
      },
      {
        item: "https://i.ibb.co/b1XVXW7/Banner.png",
      },
    ],
  };
  res.json(bannar);
});

// app.get("/bannerService", function (req, res) {
//   let bannerService = {
//     one: "Two years warranty",
//     two: "Two years warranty",
//     three: "Two years warranty",
//   };
//   res.json(bannerService);
// });

// app.get("/advertisment", function (req, res) {
//   let advertisment = {
//     thertyDes: "https://i.ibb.co/nCf32Kw/Ad-1.png",
//     seventyDes: "https://i.ibb.co/7XwqRmF/Ad-2.png",
//     fiftyDes: "https://i.ibb.co/rfCS7Gf/Ad-3.png",
//   };
//   res.json(advertisment);
// });

// app.get("/newArrivals", function (req, res) {
//   let newArrivals = {
//     titel: "New Arrivals",
//     itemImg: "https://i.ibb.co/4p9fHNT/Image-1.png",
//     productTitel: "Dimon necles",
//     price: "$44.00",
//     Jwelery: "Jwelery",
//   };
//   res.json(newArrivals);
// });

// app.get("/middeladd", function (req, res) {
//   let middeladd = {
//     item: "https://i.ibb.co/G29tpdW/middeladd.png",
//   };
//   res.json(middeladd);
// });

app.listen(3000);
