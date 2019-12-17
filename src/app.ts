import { Hotel } from "./hotel/hotel";
const readline = require("readline");

let arrivalsInputed: Array<number>;
let departuresInputed: Array<number>;
let rooms: number;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputArrivals = (): void => {
    rl.question("Please enter arrivals as format [1,3,5]: ", (input: string) => {
        if (!input.startsWith("[") || !input.endsWith("]")) {
            inputArrivals();
        } else {
            let inputSubstr = input.substr(1, input.length - 2);
            arrivalsInputed = inputSubstr.split(",").map((i) => {
                return parseInt(i);
            });
            rl.write("\n");
        }
    });
};

const inputDepartures = (): void => {
    rl.question("Please enter departures as format [2,6,10]: ", (input: string) => {
        if (!input.startsWith("[") || !input.endsWith("]")) {
            inputDepartures();
        } else {
            let inputSubstr = input.substr(1, input.length - 2);
            departuresInputed = inputSubstr.split(",").map((i) => {
                return parseInt(i);
            });
            rl.write("\n");
        }
    });
};

const inputRooms = (): void => {
    rl.question("Please enter number of rooms (>= 1): ", (input: string) => {
        rooms = parseInt(input);
        if (rooms < 1) {
            inputRooms();
        }
        rl.write("\n");
    });
};

const quitOrContinue = (): void => {
    rl.question("Press 'q' to quit or 'c' to continue: ", (input: string) => {
        if (input === "q") {
            process.exit(0);
        } else if (input === "c") {
            arrivalsInputed = null;
            departuresInputed = null;
            rooms = 0;
            rl.write("\n");
        } else {
            quitOrContinue();
        }
    });
}

rl.on("line", function (input: string) {
    if (!arrivalsInputed) {
        inputArrivals();
    } else if (!departuresInputed) {
        inputDepartures();
    } else if (!rooms) {
        inputRooms();
    } else {
        const hotel = new Hotel(arrivalsInputed, departuresInputed);
        console.log(hotel.canBook(rooms));

        quitOrContinue();
    }
});

rl.write("\n");