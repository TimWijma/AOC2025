import { readFile, printResult } from "../../helpers";

const input = readFile("input.txt");

const get_max = (line: string) => {
    return Math.max(...line.split("").map((n) => parseInt(n)));
};

const part1 = () => {
    let sum = 0;

    for (const line of input) {
        const max_digit = get_max(line.substring(0, line.length - 1));
        const max_index = line.indexOf(max_digit.toString());

        const max_substr = line.substring(max_index + 1);
        const snd_max = get_max(max_substr);

        sum += parseInt(`${max_digit}${snd_max}`);
    }

    return sum;
};

const part2 = () => {
    let sum = 0;

    for (const line of input) {
        let digits: number[] = [];

        let max_index = 0
        let max_digit = 0

        for (let i = 0; i < 12; i++) {
            const search_end = line.length - (12 - i - 1);
            max_digit = get_max(line.substring(max_index, search_end));
            max_index = line.indexOf(max_digit.toString(), max_index) + 1

            digits.push(max_digit)
        }

        sum += parseInt(digits.map((d) => d.toString()).join(""))
    }

    return sum;
};

printResult(part1, part2);
