const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
// navbar api data start

app.get("/navbar", function (req, res) {
  let navbarData = {
    logo: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/navbar%2FBWFC.png?alt=media&token=5f7c4509-1cc4-4dd0-9917-7ba4d14450c8",
    navItems: [
      {
        item: "Product",
        dropDown: true,
        dropDownItem: [
          {
            dropItem: "React JS",
          },
          {
            dropItem: "Node JS",
          },
          {
            dropItem: "React Native",
          },
        ],
      },
      {
        item: "Template",
        dropDown: true,
        dropDownItem: [
          {
            dropItem: "React JS",
          },
          {
            dropItem: "Node JS",
          },
          {
            dropItem: "React Native",
          },
        ],
      },
      {
        item: "Blog",
        dropDown: false,
      },
      {
        item: "Pricing",
        dropDown: false,
      },
    ],
    buttonOne: {
      text: "Sign In",
      link: "#",
      visibility: true,
    },
    buttonTwo: {
      text: "Start Free",
      link: "#",
      visibility: true,
    },
    buttonThree: {
      text: "Sign Up",
      link: "#",
      visibility: false,
    },
  };

  res.send(navbarData);
});

// navbar api data end

// banner api data start
app.get("/banner", function (req, res) {
  let bannerData = {
    bannerbgshape:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannershape.png?alt=media&token=1d77f81a-71ce-46cc-96ad-d27704cd8a5d",
    bannerrightimg:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/banner%2Fbannerrightimg.png?alt=media&token=0eac3ad9-3100-40b9-b6aa-c06c8b3e4399",
    bannerheading: "Managing business payments has never been easier",
    bannerparagraph:
      "End-to-end payments and financial management in a single solution. Meet the right platform to help realize.",
    bannerButton: {
      text: "Get Started",
      link: "#",
    },
    video: {
      link: "https://www.youtube.com/watch?v=8pDqJVdNa44&t=230s",
      text: "See How It Works",
    },
  };

  res.send(bannerData);
});

// banner api data end

// sponsor api data start
app.get("/sponsor", function (req, res) {
  let sponsorData = {
    title: "Over 32k+ software  businesses growing with AR Shakir",
    logos: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/sponsor%2Fsponsorimg1.png?alt=media&token=64dffdf0-6316-4370-bc55-00286ca7ff51",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/sponsor%2Fsponsorimg1.png?alt=media&token=64dffdf0-6316-4370-bc55-00286ca7ff51",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/sponsor%2Fsponsorimg3.png?alt=media&token=8f751975-58cc-4f76-9ac0-9346e4be4bb5",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/sponsor%2Fsponsorimg4.png?alt=media&token=22336708-f2f8-4a46-9b79-33c02217fb08",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/sponsor%2Fsponsorimg5.png?alt=media&token=647c0a9e-190a-4484-bccc-d4ef36c7b068",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/sponsor%2Fsponsorimg6.png?alt=media&token=ca9686e3-de6c-4ebc-8d5a-6de64639db23",
      },
    ],
  };

  res.send(sponsorData);
});
// sponsor api data end

// feature api data start
app.get("/feature", function (req, res) {
  let featureData = {
    featureShape:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/feature%2Ffeatureshape.png?alt=media&token=3c8479f9-bfac-4f59-b544-ec0ed019b403",
    featureImage:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/feature%2Ffeatureimg.png?alt=media&token=88bc6041-5673-45b0-b4d4-2ecc15d915ec",
    subTitle: "Our Feature",
    title: "Receive payments quickly from anywhere",
    paragraph:
      "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    button: {
      text: "Get Started",
      link: "#",
    },
  };

  res.json(featureData);
});
// feature api data end

// payment api data start
app.get("/payment", function (req, res) {
  let paymentData = {
    subTitle: "Our Feature",
    title: "Receive payments quickly from anywhere",
    paragraph:
      "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. ",
    paymentShape:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/payment%2Fpaymentshape.png?alt=media&token=174634f2-fd25-44db-9d8d-489a46f4b718",
  };

  res.json(paymentData);
});
// payment api data end

// account api data start
app.get("/account", function (req, res) {
  let accountData = {
    subTitle: "Our Feature",
    title: "All payments are linked to your Financy account",
    paragraph:
      "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    button: {
      text: "Get Started",
      link: "#",
    },
    accountImage:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/account%2FaccountImage.png?alt=media&token=ef32acaf-72d7-4aa4-8a32-ff65d5a6705e",
  };

  res.json(accountData);
});
// account api data end

// client api data start
app.get("/client", function (req, res) {
  let clientData = {
    subTitle: "Testimonials",
    title: "Check what our clients are saying",
    slideToShow: 1,
    sliderItem: [
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/client%2FclientImg.png?alt=media&token=d91202fd-753e-4465-bcad-25b28635dc8b",
        symbol: '"',
        heading: "Save Time Managing Social Media For Your Business",
        paragraph:
          "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.<br/><br/>Believing neglected so so allowance existence departure in. In design active temper be uneasy. ",
        rating: 5,
        name: "Angela Taylor",
        designation: "CEO SAMSUNG",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/client%2FclientImg.png?alt=media&token=d91202fd-753e-4465-bcad-25b28635dc8b",
        symbol: '"',
        heading: "Save Time Managing Social Media For Your Business",
        paragraph:
          "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.<br/><br/>Believing neglected so so allowance existence departure in. In design active temper be uneasy. ",
        rating: 3,
        name: "Angela Taylor",
        designation: "CEO SAMSUNG",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/client%2FclientImg.png?alt=media&token=d91202fd-753e-4465-bcad-25b28635dc8b",
        symbol: '"',
        heading: "Save Time Managing Social Media For Your Business",
        paragraph:
          "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.<br/><br/>Believing neglected so so allowance existence departure in. In design active temper be uneasy. ",
        rating: 4.5,
        name: "Angela Taylor",
        designation: "CEO SAMSUNG",
      },
      {
        image:
          "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/client%2FclientImg.png?alt=media&token=d91202fd-753e-4465-bcad-25b28635dc8b",
        symbol: '"',
        heading: "Save Time Managing Social Media For Your Business",
        paragraph:
          "Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.<br/><br/>Believing neglected so so allowance existence departure in. In design active temper be uneasy. ",
        rating: 3.5,
        name: "Angela Taylor",
        designation: "CEO SAMSUNG",
      },
    ],
  };
  res.json(clientData);
});
// client api data end

// residence api data start
app.get("/residence", function (req, res) {
  let resData = {
    text: "And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.",
    button: {
      text: "Get Started",
      link: "#",
    },
  };
  res.json(resData);
});
// residence api data end

// finance api data start
app.get("/finance", function (req, res) {
  let financeData = {
    sunbTitle: "Our Feature",
    heading: "All payments are linked to your Financy account",
    paragraph:
      "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    button: {
      text: "Get Started",
      link: "#",
    },
    image:
      "https://firebasestorage.googleapis.com/v0/b/bwfc-e55b0.appspot.com/o/finance%2FfinanceImage.png?alt=media&token=59a14aa5-57eb-4a19-8d45-5a57f4fcdfb1",
  };

  res.json(financeData);
});
// finance api data end

// choose api data start
app.get("/choose", function (req, res) {
  let chooseData = {
    subTitle: "Why Financy",
    title: "Why Choose Us",
    items: [
      {
        circleColor: "#F7ECFD",
        title: "No Extra Fee1",
        details:
          "End-to-end payments and financial management in a single solution. Meet the right platform.",
        visibility: true,
      },
      {
        circleColor: "#D8F5F1",
        title: "No Extra Fee2",
        details:
          "End-to-end payments and financial management in a single solution. Meet the right platform.",
        visibility: true,
      },
      {
        circleColor: "#D9F1FD",
        title: "No Extra Fee3",
        details:
          "End-to-end payments and financial management in a single solution. Meet the right platform.",
        visibility: false,
      },
      {
        circleColor: "#FFE4E3",
        title: "No Extra Fee4",
        details:
          "End-to-end payments and financial management in a single solution. Meet the right platform.",
        visibility: true,
      },
      {
        circleColor: "#D9F1FD",
        title: "No Extra Fee5",
        details:
          "End-to-end payments and financial management in a single solution. Meet the right platform.",
        visibility: true,
      },
      {
        circleColor: "#D8F5F1",
        title: "No Extra Fee6",
        details:
          "End-to-end payments and financial management in a single solution. Meet the right platform.",
        visibility: false,
      },
    ],
  };
  res.json(chooseData);
});
// choose api data end

app.listen(3000);
