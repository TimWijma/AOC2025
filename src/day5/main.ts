import { readFile, printResult } from "../../helpers";

const input = readFile("input.txt");

const emptyLineIndex = input.findIndex((line) => line.trim() === "");

const ranges = input
    .slice(0, emptyLineIndex)
    .map((l) => l.split("-").map(Number));
const ingredients = input.splice(emptyLineIndex + 1).map(Number);

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

    return fresh;
};

const part2 = () => {
    let s_ranges = [...ranges];
    s_ranges.sort((a, b) => a[0] - b[0]);

    const merged = [s_ranges[0]];

    for (let i = 1; i < s_ranges.length; i++) {
        const [start, end] = s_ranges[i];
        const prev = merged[merged.length - 1];

        if (start <= prev[1]) {
            prev[1] = Math.max(prev[1], end);
        } else {
            merged.push([start, end]);
        }
    }

    return merged.reduce((sum, [start, end]) => sum + (end - start) + 1, 0);
};

printResult(part1, part2);
