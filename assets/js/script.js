const IIFE = (() => {
    let privada = (url, id) => {

        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    }
    return {
        publica: (url, id) => {
            privada(url, id);
        }
    }


})();


class Multimedia {

    constructor(url) {
        this._url = url;
    }

    get url() {
        return this._url;
    }

    setInicio() {
        return "para cambiar algo en el URL del video"
    }


}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = id;

    }

    playMultimedia() {
        IIFE.publica(this._url, this._id);

    }

    setInicio() {
        this._id.setAttribute('src', `${this._url}?start=${tiempo}`);

    }
}