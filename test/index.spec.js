import { expect } from 'chai';
import Mocha from 'mocha';
import { ArabicNumbers } from '../src/index';

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
    it("Return LC when 90 is input", () => {
        expect(RomanNumeral(90)).to.equal('LC');
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

    it("Return CCCXXXIV when 334 is input", () => {
        expect(RomanNumeral(334)).to.equal('CCCXXXIV');
    })
})