import { Blessing } from "../types/blessing";

export const compareByAmount = (a: Blessing, b: Blessing) => {
    if (a.paymentAmount > b.paymentAmount) return -1;
    if (a.paymentAmount < b.paymentAmount) return 1;
    return 0;
};

export const compareByDate = (a: Blessing, b: Blessing) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
};