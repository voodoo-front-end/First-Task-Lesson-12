"use strict"
const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели', "");
const persomalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const a = prompt("Один из последних просмотреных фильмов ?", ""),
b = prompt("На сколько Вы его оцените ?", ""),
c = prompt("Один из последних просмотреных фильмов ?", ""),
d = prompt("На сколько Вы его оцените ?", "");
persomalMovieDB.movies[a] = b;
persomalMovieDB.movies[c] = d;
console.log(persomalMovieDB);