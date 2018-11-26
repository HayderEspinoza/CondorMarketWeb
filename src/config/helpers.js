import { REGEX } from "./constants";

export const moneyFormat = (numero = '0', centavos = 0, simbolo = '') => {
    let price = numero.replace(REGEX.string_number, '');
    let total = price.length;
    if (total && centavos !== 0)
        price = price.slice(0, total - centavos) + '.' + price.slice(total - centavos);
    else if (total === 0)
        price = '0';
    return simbolo + " " + parseFloat(price).toFixed(centavos).replace(/./g, function (c, i, a) { return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c; });
}