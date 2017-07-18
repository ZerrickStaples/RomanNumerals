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

    it("Return V When 5 Is Input", () => {
        expect(RomanNumeral(5)).to.equal('V');
    })

    it("Return X When 10 Is Input", () => {
        expect(RomanNumeral(10)).to.equal('X');
    })
})