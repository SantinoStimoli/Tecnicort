const numberFormat = (price: number) => {
    return `$ ${new Intl.NumberFormat('de-DE').format(price)}`;
}

export default numberFormat