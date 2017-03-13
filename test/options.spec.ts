import {expect} from 'chai';
import {DatabaseOptions, FrameOptions} from '../src/index';

describe('DatabaseOptions', () => {
    it('can be created with defaults', () => {
        let options = DatabaseOptions.withDefaults();
        expect(options.columnLabel).equal("profileID");
    });

    it('can be created with a column label', () => {
        let options = DatabaseOptions.withColumnLabel("the_col");
        expect(options.columnLabel).equal("the_col");
    });
});

describe('FrameOptions', () => {
    it('can be created with defaults', () => {
        let options = FrameOptions.withDefaults();
        expect(options.rowLabel).equal("id");
    });

    it('can be created with a row label', () => {
        let options = FrameOptions.withRowLabel("the_row");
        expect(options.rowLabel).equal("the_row");
    });
});