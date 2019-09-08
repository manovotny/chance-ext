const Chance = require('chance');

const ext = require('./index');

describe('index.js', () => {
    const chance = new Chance();

    let word;

    beforeEach(() => {
        word = chance.word();

        spyOn(Chance.prototype, 'word').and.returnValue(word);

        chance.mixin({
            ext
        });
    });

    test('should return random extension', () => {
        const result = chance.ext();

        expect(result).toStrictEqual(`.${word}`);
    });
});
