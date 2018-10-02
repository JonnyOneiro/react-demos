import types from "../actions/types";

const DEFAULT_STATE = {
    currentTime: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    color: 'green'
};

function clockReducer(state = DEFAULT_STATE, action) {
    //console.log('action: ', action);

    switch(action.type) {
        case types.UPDATE_TIME:
            return {...state, currentTime: new Date().toLocaleTimeString(), color: randomColor()};
        case types.INCREASE_DATE:
            return {...state, date: new Date(new Date(state.date).getTime() + action.payload).toLocaleDateString()};
        default:
            return state;
    }
}


function randomColor() {
    return `rgb(${randomRGBNumber()},${randomRGBNumber()},${randomRGBNumber()})`;
}

function randomRGBNumber() {
    return Math.floor(Math.random() * (255 + 1));
}

export default clockReducer;