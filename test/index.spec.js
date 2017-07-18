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
})