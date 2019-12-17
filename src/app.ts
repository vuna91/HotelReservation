import { Hotel } from "./Hotel/hotel";

let arrivals = [1, 3, 5];
let departures = [2, 6, 10];

let hotel = new Hotel(arrivals, departures);

console.log(hotel.canBook(1));