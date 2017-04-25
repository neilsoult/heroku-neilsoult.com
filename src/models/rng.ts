let mathRandom = () => {

    return Math.random();

};

let cryptoRandom = () => {

    let rand = window.crypto.getRandomValues(new Uint32Array(1));
    return parseFloat('0.' + rand[0]);

};

export const rng = (max: number, min: number = 0) => {

    let factor = (window.crypto && window.crypto.getRandomValues) ?
        cryptoRandom() : mathRandom();

    return Math.floor(factor * (max - min + 1)) + min;

};
