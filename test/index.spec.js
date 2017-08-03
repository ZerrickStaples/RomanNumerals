import { expect } from 'chai';
import Mocha from 'mocha';
import { RomanNumeral } from '../src/index';
// import { ArabicNumbers } from '../src/index';

describe("Canary test", () => {
    it("should return true", () => {
        expect(true).to.equal(true);
    })
})

describe("RomanNumeral Kata", () => {
    it("Return I When 1 is input", () => {
        expect(RomanNumeral(1)).to.equal('I');
    })

    it("Return IV when 4 is input", () => {
        expect(RomanNumeral(4)).to.equal('IV');
    })

    it("Return V when 5 is input", () => {
        expect(RomanNumeral(5)).to.equal('V');
    })

    it("Return X when 10 is input", () => {
        expect(RomanNumeral(10)).to.equal('X');
    })

    it("Return XL when 40 is input", () => {
        expect(RomanNumeral(40)).to.equal('XL');
    })

    it("Return L When 50 is input", () => {
        expect(RomanNumeral(50)).to.equal('L');
    })

    it("Return C when 100 is input", () => {
        expect(RomanNumeral(100)).to.equal('C');
    })

    it("Return D when 500 is input", () => {
        expect(RomanNumeral(500)).to.equal('D');
    })
    it("Return M when 1000 is input", () => {
        expect(RomanNumeral(1000)).to.equal('M');
    })

    it("Return 1000 when M is input", () => {
        expect(RomanNumeral('M')).to.equal(1000);
    })
})

/* 
describe("ArabicNumber Kata"), () => {
    it("Return 1000 when M is input", () => {
        expect(ArabicNumbers('M')).to.equal(1000);
    })
}
*/