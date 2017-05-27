import {expect} from 'chai';
import {Validator} from '../src/validator';

describe('Validator', () => {
    it('should validate index names', () => {
        const validIndexNames = [
            "a", "ab", "ab1", "b-c", "d_e",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let name of validIndexNames) {
            expect(Validator.validIndexName(name)).true;
            expect(() => Validator.validateIndexName(name)).not.throws();
        }

        const invalidIndexNames = [
            "", "'", "^", "/", "\\", "A", "*", "a:b", "valid?no", "yüce",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let name of invalidIndexNames) {
            expect(Validator.validIndexName(name)).false;
            expect(() => Validator.validateIndexName(name)).throws();
        }
    });

    it ('should validate frame names', () => {
        const validFrameNames = [
            "a", "ab", "ab1", "b-c", "d_e",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let name of validFrameNames) {
            expect(Validator.validFrameName(name)).true;
            expect(() => Validator.validateFrameName(name)).not.throws();
        }

        const invalidFrameNames = [
            "", "'", "^", "/", "\\", "A", "*", "a:b", "valid?no", "yüce", "_", "-", ".data", "d.e", "1",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let name of invalidFrameNames) {
            expect(Validator.validFrameName(name)).false;
            expect(() => Validator.validateFrameName(name)).throws();
        }

    });

    it ('should validate labels', () => {
        const validLabels = [
            "a", "ab", "ab1", "d_e", "A", "Bc", "B1", "aB", "b-c",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let label of validLabels) {
            expect(Validator.validLabel(label)).true;
            expect(() => Validator.validateLabel(label)).not.throws();
        }

        const invalidLabels = [
            "", "1", "_", "-", "'", "^", "/", "\\", "*", "a:b", "valid?no", "yüce",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let label of invalidLabels) {
            expect(Validator.validLabel(label)).false;
            expect(() => Validator.validateLabel(label)).throws();
        }
    });
});
