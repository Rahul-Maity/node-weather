const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');
const port = process.env.PORT|| 8000;
// public static path
// console.log(path.join(__dirname, "../public"));
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

// routing
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/weather", (req, res) => {
    res.render('weather');
});
app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg:'  OOPs! Page Not Found ',
    });
});
app.listen(port, () => {
    console.log(`Listning to the port no ${port}`);
});
//video pause at 1:30:14
//https://weatherwebproject-rahul-maity.onrender.com/