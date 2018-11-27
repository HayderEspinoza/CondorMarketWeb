import { REGEX } from "./constants";

export const moneyFormat = (number = '0', cents = 0, symbol = '') => {
    let price = `${number}`.replace(REGEX.string_number, '');
    let total = price.length;
    if (total && cents !== 0)
        price = price.slice(0, total - cents) + '.' + price.slice(total - cents);
    else if (total === 0)
        price = '0';
    return symbol + " " + parseFloat(price).toFixed(cents).replace(/./g, function (c, i, a) { return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c; });
}

export const getErrorsFormat = (errors) => {
    let tmp = {}
    for (var index in errors)
        tmp[index] = errors[index].msg
    return tmp
}