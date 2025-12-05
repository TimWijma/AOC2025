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

const part2 = () => {
    let s_ranges = [...ranges]
    s_ranges.sort((a, b) => a[0] - b[0])   

    const merged = [s_ranges[0]]

    for (let i = 1; i < s_ranges.length; i++) {
        const [start, end] = s_ranges[i]
        const prev = merged[merged.length - 1]

        if (start <= prev[1]) {
            prev[1] = Math.max(prev[1], end)
        } else {
            merged.push([start, end])
        }
    }

    let fresh = 0;
    for (let [start, end] of merged) {
        fresh += (end - start) + 1
    }

    return fresh
};

printResult(part1, part2);
