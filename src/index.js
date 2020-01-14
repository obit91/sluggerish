function sluggerify(...args) {
    return args.join('-').split(' ').join('-');
}

module.exports = {
    sluggerify
}
