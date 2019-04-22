// for any number of words... 📕
const findMinLengthOfThreeWords = (...args) => Math.min(...args.map(el => el.length));