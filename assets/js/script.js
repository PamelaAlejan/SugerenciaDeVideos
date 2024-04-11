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

    setInicio(tiempo) {
        const iframe = document.getElementById(this._id);

        iframe.setAttribute('src', `${this._url}&amp;start=${tiempo}`);

    }
}

let musica = new Reproductor("https://www.youtube.com/embed/6WeMiC-CJHA?si=JVqUCPHk9Ub4FqZn", "musica");
let pelicula = new Reproductor('https://www.youtube.com/embed/FjzxI6uf8H8?si=P9BvegwKYLTTppJy', "peliculas");
let serie = new Reproductor("https://www.youtube.com/embed/C8XJ_xWF2ZE?si=ABzT-_kAwoUf7LFj", "series");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
serie.setInicio(60);
