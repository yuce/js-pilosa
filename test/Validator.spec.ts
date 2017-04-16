import {expect} from 'chai';
import {Validator} from '../src/validator';

describe('Validator', () => {
    it('should validate database names', () => {
        const validDatabaseNames = [
            "a", "ab", "ab1", "1", "_", "-", "b-c", "d_e",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let name of validDatabaseNames) {
            expect(Validator.validDatabaseName(name)).true;
            expect(() => Validator.validateDatabaseName(name)).not.throws();
        }

        const invalidDatabaseNames = [
            "", "'", "^", "/", "\\", "A", "*", "a:b", "valid?no", "yüce",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let name of invalidDatabaseNames) {
            expect(Validator.validDatabaseName(name)).false;
            expect(() => Validator.validateDatabaseName(name)).throws();
        }
    });

    it ('should validate frame names', () => {
        const validFrameNames = [
            "a", "ab", "ab1", "b-c", "d_e", "d.e", "1",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let name of validFrameNames) {
            expect(Validator.validFrameName(name)).true;
            expect(() => Validator.validateFrameName(name)).not.throws();
        }

        const invalidFrameNames = [
            "", "'", "^", "/", "\\", "A", "*", "a:b", "valid?no", "yüce", "_", "-", ".data",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let name of invalidFrameNames) {
            expect(Validator.validFrameName(name)).false;
            expect(() => Validator.validateFrameName(name)).throws();
        }

    });

    it ('should validate labels', () => {
        const validLabels = [
            "a", "ab", "ab1", "d_e", "A", "Bc", "B1", "aB",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let label of validLabels) {
            expect(Validator.validLabel(label)).true;
            expect(() => Validator.validateLabel(label)).not.throws();
        }

        const invalidLabels = [
            "", "1", "_", "-", "b-c", "'", "^", "/", "\\", "*", "a:b", "valid?no", "yüce",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let label of invalidLabels) {
            expect(Validator.validLabel(label)).false;
            expect(() => Validator.validateLabel(label)).throws();
        }
    });
});
