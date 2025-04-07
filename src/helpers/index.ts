export const numberToEuro = (price: number) => {
    return new Intl.NumberFormat('en-NL', {
        style: 'currency',
        currency: 'EUR',
    }).format(price).replace(/^(\D+)/, '$1 ').replace(/\s+/, ' ');
}



