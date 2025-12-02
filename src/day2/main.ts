import { readFile, printResult } from "../../helpers";

const input = readFile("input.txt")[0]
    .split(",")
    .map((range) => range.split("-").map((n) => parseInt(n)));

const part1 = () => {
    let invalid = [];
    for (const [start, end] of input) {
        for (let id = start; id <= end; id++) {
            let id_str = id.toString();
            let len = id_str.length;

            if (len % 2 === 1) continue; // odd can never have a digit repeated twice

            let middle = len / 2;
            let first_half = id_str.substring(0, middle);

            if (first_half.repeat(2) === id_str) invalid.push(id);
        }
    }

    return invalid.reduce((a, b) => a + b, 0);
};

const part2 = () => {
    let invalid = [];
    for (const [start, end] of input) {
        for (let id = start; id <= end; id++) {
            let id_str = id.toString();
            let len = id_str.length;

            for (let cur_len = 1; cur_len <= len / 2; cur_len++) {
                if (len % cur_len !== 0) continue; // if length of id is not divisible by cur_len

                let repeat_times = len / cur_len;
                let repeat_block = id_str.substring(0, cur_len);

                if (repeat_block.repeat(repeat_times) === id_str) {
                    invalid.push(id);
                    break;
                }
            }
        }
    }

    return invalid.reduce((a, b) => a + b, 0);
};

printResult(part1, part2);
