import { Hotel } from "../../src/hotel/hotel";

test("Wrong arrivals/departures inputs should throw Error", () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6];
    const hotel = new Hotel(arrivals, departures);

    expect(() => hotel.canBook(1)).toThrow("Input is invalid");
});

test("Wrong arrivals inputs should throw Error", () => {
    const arrivals = [-1, 3, 5];
    const departures = [2, 6, 10];
    const hotel = new Hotel(arrivals, departures);

    expect(() => hotel.canBook(1)).toThrow("Arrivals is invalid");
});

test("Wrong departures inputs should throw Error", () => {
    const arrivals = [1, 3, 5];
    const departures = [-2, 6, 10];
    const hotel = new Hotel(arrivals, departures);

    expect(() => hotel.canBook(1)).toThrow("Departures is invalid");
});

test("Rooms are enough for booking should return true", () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const hotel = new Hotel(arrivals, departures);

    expect(hotel.canBook(2)).toBe(true);
});

test("Rooms are not enough for booking should return false", () => {
    const arrivals = [1, 3, 5];
    const departures = [2, 6, 10];
    const hotel = new Hotel(arrivals, departures);

    expect(hotel.canBook(1)).toBe(false);
});
