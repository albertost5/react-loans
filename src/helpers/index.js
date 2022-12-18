
const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
}

export {
    formatMoney
}