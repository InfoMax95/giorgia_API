const express = require('express');
const app = express();
const { userAuth, userPerms } = require('./middleware/user-auth');
const homeRouter = require("./routes/home");

app.use('/user', userAuth, userPerms);

app.disable('x-powered-by');

app.get('/', (req, res) => {
    console.log("nuova richiesta get");
    res.send("<h1>Benvenuto</h1>");
});

app.post('/', (req, res) => {
    console.log("nuova richiesta post");
    res.send("<h1>Benvenuto POST</h1>");
});

app.put('/', (req, res) => {
    console.log("nuova richiesta put");
    res.send("<h1>Benvenuto PUT</h1>");
});

app.patch('/', (req, res) => {
    console.log("nuova richiesta patch");
    res.send("<h1>Benvenuto PATCH</h1>");
});

app.delete('/', (req, res) => {
    console.log("nuova richiesta delete");
    res.send("<h1>Benvenuto DELETE</h1>");
});


// se vogliamo definire una rotta con qualsiasi tipo di chiamata rest
app.all('/', (req, res) => {
    console.log(`nuova richiesta di tipo ${req.method} alla rotta root`);
    res.status(200).send(`richiesta catturata`);
});
// definiamo una rotta di base a cui giungono tutte le chiamate con endpoint /api/
app.all('/api/*', (req, res) => {
    const isLogged = false;
    if (!isLogged) res.status(401).send("non sei loggato");
});
// possiamo anche passare una regex o un'array di endpoint ad una richiesta
app.get(['/blog', '/admin[0-6]{2,}'], (req, res) => {
    res.status(200).send("<h1>Benvenuto</h1>");
});

// definiamo risorse con middleware per authemtication e authorization
app.get('/user/risorsa-premium', checkAuthentication, checkAuthorization, (req, res) => {
    res.send("Ecco la risorsa premium");
});

app.listen(3000);