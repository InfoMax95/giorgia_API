class ErrorHandler extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.handle();
    }

    handle() {
        switch(this.code) {
            case 400: this.badRequest(); break;
            case 404: this.notFound(); break;
            case 500: this.serverError(); break;
            default: this.message = `${this.message || "Errore interno. Riprova!"}`;
        }
    }

    badRequest() {
        this.message = `${this.message || "Richiesta non corretta"}`;
    }

    notFound() {
        this.message = `${this.message || "Risorsa non trovata"}`;
    }

    serverError() {
        // inserimento in database dell'errore o invio email
        this.message = `${this.message || "Errore interno. Riprova!"}`;
    }
}

module.exports = ErrorHandler;