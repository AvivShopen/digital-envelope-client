export type Order = "ASC" | "DESC";

export const compare = <T>(a: T, b: T, compareBy: keyof T, order: Order) => {
    if (order === "DESC") {
        if (a[compareBy] > b[compareBy]) return -1;
        if (a[compareBy] < b[compareBy]) return 1;
        return 0;
    }
    else {
        if (a[compareBy] > b[compareBy]) return 1;
        if (a[compareBy] < b[compareBy]) return -1;
        else return 0;
    }
};