//array

let catalogo = [
    {
        title: 'Il Padrino',
        year: '1972',
        genre: 'Drammatico',
        rating: '9.2',
        type: 'movie',
        seasons: ''
    },
    {
        title: 'La Casa di Carta',
        year: '2017',
        genre: 'Crime',
        rating: '8.3',
        type: 'tv',
        seasons: '5'
    },
    {
        title: 'La Dolce Vita',
        year: '1960',
        genre: 'Commedia',
        rating: '8.0',
        type: 'movie',
        seasons: ''
    },
    {
        title: 'La Grande Bellezza',
        year: '2013',
        genre: 'Drammatico',
        rating: '7.8',
        type: 'movie',
        seasons: ''
    },
    {
        title: 'Gomorra',
        year: '2008',
        genre: 'Crime',
        rating: '8.7',
        type: 'tv',
        seasons: '5'
    },
    {
        title: 'Romanzo Criminale',
        year: '2005',
        genre: 'Crime',
        rating: '8.6',
        type: 'tv',
        seasons: '2'
    },
    {
        title: 'La Vita è Bella',
        year: '1997',
        genre: 'Commedia',
        rating: '8.6',
        type: 'movie',
        seasons: ''
    },
    {
        title: 'Suburra',
        year: '2015',
        genre: 'Crime',
        rating: '7.6',
        type: 'tv',
        seasons: '3'
    },
    {
        title: 'Cinema Paradiso',
        year: '1988',
        genre: 'Drammatico',
        rating: '8.5',
        type: 'movie',
        seasons: ''
    },
    {
        title: 'Non è un Paese per Vecchi',
        year: '2007',
        genre: 'Thriller',
        rating: '8.1',
        type: 'movie',
        seasons: ''
    }
];


//classi

class Movie {
    constructor(title, year, genre, rating) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = 'movie';
    }

    toString() {
        return `${this.title} è un film di genere ${this.genre}. È stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

class TvSeries extends Movie {
    constructor(title, year, genre, rating, seasons) {
        super(title, year, genre, rating);
        this.type = 'tv';
        this.seasons = seasons;
    }

    toString() {
        return `${this.title} è una serie TV di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
    }
}

let nuovoCatalogo = catalogo.map(item => {
    if (item.type === 'movie') {
        return new Movie(item.title, item.year, item.genre, item.rating);
    } else if (item.type === 'tv') {
        return new TvSeries(item.title, item.year, item.genre, item.rating, item.seasons);
    }
});

//funzioni

function mediaRating(lista, genere) {

    let somma = 0;
    let filmFiltrati = 0;

    catalogo.forEach(item => {
        if (item.genre == genere) {
            filmFiltrati++;
            somma = somma + Number(item.rating);
            //console.log(somma)
        }
    });

    console.log("La media dei voti dei film nel genere " + genere + " è: " + somma / filmFiltrati);
}

function listaGeneri() {
    let generi = [];
    catalogo.forEach(item => {
        if (item.type == "movie") {
            if (!generi.includes(item.genre)) {
                generi.push(item.genre);
            }
        }
    });
    console.log(generi);
}



//console log

for (let item of nuovoCatalogo) {
    console.log(item.toString());
}



mediaRating(catalogo, "Drammatico");

listaGeneri();

