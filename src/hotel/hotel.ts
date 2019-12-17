export class Hotel {
    private _arrivals: Array<number>;
    private _departures: Array<number>;

    constructor(arrivals: Array<number>, departures: Array<number>) {
        this._arrivals = arrivals;
        this._departures = departures;
    }

    private validate(): void {
        if (this._arrivals.length !== this._departures.length) {
            throw new Error("Input is invalid");
        }

        for (let arr of this._arrivals) {
            if (arr < 1) {
                throw new Error("Arrivals is invalid");
            }
        }

        for (let dep of this._departures) {
            if (dep < 1) {
                throw new Error("Departures is invalid");
            }
        }
    }

    public canBook(rooms: number): boolean {
        this.validate();

        const reservation: any = {};
        let guests: number = 0;

        for (let arr of this._arrivals) {
            reservation[arr] = reservation[arr] ? reservation[arr] + 1 : 1;
        }

        for (let dep of this._departures) {
            reservation[dep] = reservation[dep] ? reservation[dep] - 1 : -1;
        }

        for (let key in reservation) {
            guests += reservation[key];

            if (guests > rooms) {
                return false;
            }
        }

        return true;
    }
}
