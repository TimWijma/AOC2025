import { readFile, printResult } from "../../helpers";

const input = readFile("input.txt");

const emptyLineIndex = input.findIndex((line) => line.trim() === "");

const ranges = [];
const ingredients = [];
for (let i = 0; i < emptyLineIndex; i++) {
    let line = input[i];
    ranges.push(line.split("-").map((n) => parseInt(n)));
}
for (let i = emptyLineIndex + 1; i < input.length; i++) {
    ingredients.push(parseInt(input[i]));
}

const part1 = () => {
    let fresh = 0;
    for (const ingredient of ingredients) {
        for (const [start, end] of ranges) {
            if (ingredient >= start && end >= ingredient) {
                fresh++;
                break;
            }
        }
    }

    return fresh
};

const part2 = () => { };

printResult(part1, part2);
