// chech authentication
function userAuth(req, res, next) {
    const isLogged = true;
    if (!isLogged) return res.status(401).send("non sei autenticato");
    req.user = { nome: 'Sara', tipo: 'standard' };
    next();
}
// chech authorization
function userPerms(req, res, next) {
    const isAuthorized = req.user.tipo === "Premium" ? true : false;
    if (!isAuthorized) return res.status(403).send("non sei autorizzato");
    next();
}

module.exports = {
    userAuth,
    userPerms
}