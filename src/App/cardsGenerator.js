const generateCards = (level) => {
    const numbers = Array(level[0] * level[1] / 2).fill().map((_, i) => i + 1);
    const doubledNumbers = Array(2).fill(numbers).flat();

    const cards = doubledNumbers.map((number, i) => ({
        id: i,
        number,
        checked: false,
        matched: false,
    }));

    return [...cards].sort(function () {
        return Math.random() - 0.5;
    });
};

export default generateCards;