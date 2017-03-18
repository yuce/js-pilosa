import {expect} from 'chai';
import {Validator} from '../src/index';

describe('Validator', () => {
    it('should validate database names', () => {
        const validDatabaseNames = [
            "a", "ab", "ab1", "1", "_", "-", "b-c", "d_e",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let name of validDatabaseNames) {
            expect(Validator.validateDatabaseName(name)).true;
            expect(() => Validator.ensureValidDatabaseName(name)).not.throws();
        }

        const invalidDatabaseNames = [
            "", "'", "^", "/", "\\", "A", "*", "a:b", "valid?no", "yüce",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let name of invalidDatabaseNames) {
            expect(Validator.validateDatabaseName(name)).false;
            expect(() => Validator.ensureValidDatabaseName(name)).throws();
        }
    });

    it ('should validate frame names', () => {
        const validFrameNames = [
            "a", "ab", "ab1", "b-c", "d_e", "d.e", "1",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let name of validFrameNames) {
            expect(Validator.validateFrameName(name)).true;
            expect(() => Validator.ensureValidFrameName(name)).not.throws();
        }

        const invalidFrameNames = [
            "", "'", "^", "/", "\\", "A", "*", "a:b", "valid?no", "yüce", "_", "-", ".data",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let name of invalidFrameNames) {
            expect(Validator.validateFrameName(name)).false;
            expect(() => Validator.ensureValidFrameName(name)).throws();
        }

    });

    it ('should validate labels', () => {
        const validLabels = [
            "a", "ab", "ab1", "d_e", "A", "Bc", "B1", "aB",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ];
        for (let label of validLabels) {
            expect(Validator.validateLabel(label)).true;
            expect(() => Validator.ensureValidLabel(label)).not.throws();
        }

        const invalidLabels = [
            "", "1", "_", "-", "b-c", "'", "^", "/", "\\", "*", "a:b", "valid?no", "yüce",
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1"
        ];
        for (let label of invalidLabels) {
            expect(Validator.validateLabel(label)).false;
            expect(() => Validator.ensureValidLabel(label)).throws();
        }
    });
});
