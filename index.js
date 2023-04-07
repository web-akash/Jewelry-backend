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

//   ===============bannar part start=======

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
//   ===============bannar part end=======

//   ===============BannerService part start=======
app.get("/bannerService", function (req, res) {
  let bannerService = {
    one: "Two years warranty",
    two: "Two years warranty",
    three: "Two years warranty",
  };
  res.json(bannerService);
});
//   ===============BannerService part end=======

//   ===============Advertisment part start=======
app.get("/advertisment", function (req, res) {
  let advertisment = {
    thertyDes: "https://i.ibb.co/nCf32Kw/Ad-1.png",
    seventyDes: "https://i.ibb.co/7XwqRmF/Ad-2.png",
    fiftyDes: "https://i.ibb.co/rfCS7Gf/Ad-3.png",
  };
  res.json(advertisment);
});
//   ===============Advertisment part end=======

//   ===============NewArrivals part start=======
app.get("/newArrivals", function (req, res) {
  let newArrivals = {
    titel: "New Arrivals",
    myproduct: [
      {
        itemImg: "https://i.ibb.co/4p9fHNT/Image-1.png",
        productTitel: "Dimon necles",
        price: "$44.00",
        Jwelery: "Jwelery",
      },
      {
        itemImg: "https://i.ibb.co/sP1MQ1L/31-grande-1.png",
        productTitel: "Gold necles",
        price: "$60.00",
        Jwelery: "Jwelery",
      },
      {
        itemImg: "https://i.ibb.co/tzrq1SJ/product1.png",
        productTitel: "Selver necles",
        price: "$20.00",
        Jwelery: "Jwelery",
      },
      {
        itemImg: "https://i.ibb.co/4p9fHNT/Image-1.png",
        productTitel: "Valo necles",
        price: "$5.00",
        Jwelery: "Jwelery",
      },
      {
        itemImg: "https://i.ibb.co/tzrq1SJ/product1.png",
        productTitel: "Selver necles",
        price: "$20.00",
        Jwelery: "Jwelery",
      },
    ],
  };
  res.json(newArrivals);
});

app.get("/ourBestsellers", function (req, res) {
  let ourBestsellers = {
    titel: "Our Bestsellers",
    myproduct: [
      {
        itemImg: "https://i.ibb.co/4p9fHNT/Image-1.png",
        productTitel: "Dimon necles",
        price: "$44.00",
        Jwelery: "Jwelery",
        batch: "flase",
      },
      {
        itemImg: "https://i.ibb.co/sP1MQ1L/31-grande-1.png",
        productTitel: "Gold necles",
        price: "$60.00",
        Jwelery: "Jwelery",
        batch: "flase",
      },
      {
        itemImg: "https://i.ibb.co/tzrq1SJ/product1.png",
        productTitel: "Selver necles",
        price: "$20.00",
        Jwelery: "Jwelery",
        batch: "true",
      },
      {
        itemImg: "https://i.ibb.co/4p9fHNT/Image-1.png",
        productTitel: "Valo necles",
        price: "$5.00",
        Jwelery: "Jwelery",
        batch: "flase",
      },
      {
        itemImg: "https://i.ibb.co/tzrq1SJ/product1.png",
        productTitel: "Selver necles",
        price: "$20.00",
        Jwelery: "Jwelery",
        batch: "flase",
      },
    ],
  };
  res.json(ourBestsellers);
});
//   ===============NewArrivals part end=======

//   ===============Middeladd part start=======
app.get("/middeladd", function (req, res) {
  let middeladd = {
    item: "https://i.ibb.co/G29tpdW/middeladd.png",
  };
  res.json(middeladd);
});
//   ===============Middeladd part end=======

app.listen(3000);
