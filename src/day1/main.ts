import { readFile, printResult } from "../../helpers";

const input = readFile("input.txt");

const mod = (a: number, b: number) => ((a % b) + b) % b;

const part1 = () => {
    let current = 50;
    let zeros = 0;

    for (const rotation of input) {
        let direction = rotation[0];
        let amount = parseInt(rotation.substring(1));
        if (direction === "L") amount *= -1;

        current = mod(current + amount, 100);
        if (current === 0) zeros++;
    }

    return zeros;
};

const part2 = () => {
    let current = 50;
    let zeros = 0;

    for (const rotation of input) {
        let direction = rotation[0];
        let amount = parseInt(rotation.substring(1));

        if (direction === "L") {
            if (current !== 0 && current < mod(amount, 100)) {
                zeros++;
            }
        } else {
            if (current + mod(amount, 100) > 100) {
                zeros++;
            }
        }

        zeros += Math.trunc(amount / 100);
        if (direction === "L") {
            current = mod(current + amount, 100);
        } else {
            current = mod(current - amount, 100);
        }
        if (current === 0) zeros++;
    }

    return zeros;
};

printResult(part1, part2);
