import { INCREASE, DECREASE } from "./costants";

// actions
export const increase = (payload) => {
    type: INCREASE, payload;
};

export const decrease = (payload) => {
    type: DECREASE, payload;
};
