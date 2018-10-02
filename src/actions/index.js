import types from "./types";

export function tick() {
    return {
        type: types.UPDATE_TIME
    }
}

export function increaseDate(days = 1) {
    const increaseInMilliseconds = 1000 * 60 * 60 * 24 * days; //milli in sec x sec in min x min in hr x hr in day

    return {
        type: types.INCREASE_DATE,
        payload: increaseInMilliseconds
    }
}

export function login(username) {
    return {
        type: types.LOGIN,
        username: username
    }
}
