const port = 3000;
http = require("http");
httpStatus = require("http-status-codes"),
    router = require("./router"),
    contentTypes = require("./contentTypes"),
    utils = require("./utils");


router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.htm);
    utils.getFile("views/index.html", res);
});
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});


router.get("/shop.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("views/shop.html", res);
});

router.get("/about.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/about.html", res);
});

router.get("/menu.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/menu.html", res);
});
router.get("/error.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
});
router.get("/thanks.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});
router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});
router.get("/product1.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/product1.png", res);
});
router.get("/product2.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product2.png", res);
});

router.get("/product3.jpeg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product3.jpeg", res);
});


router.get("/backgroundImage.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/backgroundImage.png", res);
});

router.get("/backgroundImagePro.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/backgroundImagePro.png", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

router.get("/menu.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/menu.css", res);
});



router.get("/index.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/index.css", res);
});
router.get("/contact.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/contact.css", res);
});
router.get("/shop.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/shop.css", res);
});
router.get("/about.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/about.css", res);
});

router.get("/thanks.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/thanks.css", res);
});
router.get("/error.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/error.css", res);
});
router.get("/confetti_cuisine.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/confetti_cuisine.js", res);
});
http.createServer(router.handle).listen(port);
console.log(`The server is listening on
➥ port number: ${port}`);