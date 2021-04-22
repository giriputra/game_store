const getRupiah = money => {
    if (typeof money === 'number') {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'idr' }).format(money);
    }
    return money
}

module.exports = getRupiah