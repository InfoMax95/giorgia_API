const express = require('express');
const app = express();

const appError = require("./middleware/error");
const home = require("./routes/home");
const contatti = require("./routes/contatti");
const blog = require("./routes/blog");
const user = require("./routes/user");
const _404 = require("./routes/_404");

app.use(appError);
app.use(express.static("public"));
app.use('/user', user);
app.use(home);
app.use(blog);
app.use(contatti);
app.use(_404);
// app.disable('x-powered-by');

app.listen(3000);