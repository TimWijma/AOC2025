import { readFile, printResult } from "../../helpers";

const input = readFile("input.txt").map((line) => line.split(""));

const get_neighbours = (cellX: number, cellY: number, grid: string[][]) => {
    let neighbours: string[] = [];

    for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
            let tempX = cellX + x;
            let tempY = cellY + y;

            if (tempX >= 0 && tempX < grid[0].length && tempY >= 0 && tempY < grid.length) {
                neighbours.push(grid[tempY][tempX]);
            }
        }
    }

    return neighbours;
};

const part1 = () => {
    let rolls = 0;

    for (let y = 0; y < input.length; y++) {
        let line = input[y];
        for (let x = 0; x < line.length; x++) {
            if (input[y][x] !== "@") continue;

            let neighbours = get_neighbours(x, y, input);

            // 5 because the roll itself also counts
            if (neighbours.filter((n) => n === "@").length < 5) {
                rolls++;
            }
        }
    }

    return rolls;
};

const part2 = () => {
    let rolls = 0;
    let rolls_removed = 1;
    let grid = input.map(row => [...row]);
    let grid_copy = grid.map(row => [...row]);

    while (rolls_removed > 0) {
        rolls_removed = 0;
        grid = grid_copy.map(row => [...row]);

        for (let y = 0; y < grid.length; y++) {
            let line = grid[y];
            for (let x = 0; x < line.length; x++) {
                if (grid[y][x] !== "@") continue;

                let neighbours = get_neighbours(x, y, grid);

                // 5 because the roll itself also counts
                if (neighbours.filter((n) => n === "@").length < 5) {
                    rolls++;
                    rolls_removed++;

                    grid_copy[y][x] = '.'
                }
            }
        }
    }

    return rolls;
};

printResult(part1, part2);
