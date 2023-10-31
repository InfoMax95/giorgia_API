const responseTime = require('response-time');
const express = require('express');
const app = express();

// built-in middleware
app.use(express.json()); // --> per passare json nel body
// app.use(express.text()); // --> per passare testo semplice nel body
app.use(express.static("public")); // --> per esporre file statici
app.use(responseTime()); // add response time all'header

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send();
// });

app.listen(3000);