import { readFileSync } from "fs";

export const readFile = (path: string): string[] => {
    return readFileSync(path, "utf-8").trimEnd().split("\n");
};

export const printResult = (
    part1: Function = () => {
        return "Not implemented";
    },
    part2: Function = () => {
        return "Not implemented";
    }
) => {
    console.time("Execution time");
    console.log("Part 1: ", part1());
    console.timeEnd("Execution time");
    console.time("Execution time");
    console.log("Part 2: ", part2());
    console.timeEnd("Execution time");
};

export const removeAtIndex = (a: number[], i: number) => {
    let firstHalf = a.slice(0, i);
    let secondHalf = a.slice(i + 1);

    return firstHalf.concat(secondHalf);
};