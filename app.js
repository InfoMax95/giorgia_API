require('dotenv').config();

const express = require('express');
const appError = require("./middleware/error");
const home = require("./routes/home");
const contatti = require("./routes/contatti");
const blog = require("./routes/blog");
const user = require("./routes/user");
const _404 = require("./routes/_404");

const app = express();
app.set("view engine", "ejs"); // to use ejs template in view

// definisco con app.use le middleware
app.use(express.static("public")); // use public folder 
app.use('/user', user);
app.use(home);
app.use(blog);
app.use(contatti);
app.use(_404);
app.use(appError);
// app.disable('x-powered-by'); // to disable a specific key on header of the request

const port = 3000;
app.listen(port, () => {
    console.log(`the server is listening at port ${port}`);
}); 