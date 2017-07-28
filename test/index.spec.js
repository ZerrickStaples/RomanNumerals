import { expect } from 'chai';
import Mocha from 'mocha';
import { RomanNumeral } from '../src/index';

describe("Canary test", () => {
    it("should return true", () => {
        expect(true).to.equal(true);
    })
})

describe("RomanNumeral Kata", () => {
    it("Return I When 1 is input", () => {
        expect(RomanNumeral(1)).to.equal('I');
    })

    it("Return II When 2 is input", () => {
        expect(RomanNumeral(2)).to.equal('II');
    })

    it("Return III When 3 is input", () => {
        expect(RomanNumeral(3)).to.equal('III');
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

    it("Return L When 50 is input", () => {
        expect(RomanNumeral(50)).to.equal('L');
    })

    it("Return C when 100 is input", () => {
        expect(RomanNumeral(100)).to.equal('C');
    })

    it("repeat letters only 3 times"), () => {
        expect(RomanNumeral()).to.equal();
    }
})