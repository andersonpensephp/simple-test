
import chai from 'chai';
const expect = chai.expect;
import incrementer  from '../app';

describe('Suites', () => {
    it('TESTE', () => {
        $('body').append('<div class="teste"></div>');
        incrementer('.teste');
        expect($('body')).not.to.be.null;
        expect($('.teste').hasClass('abc')).eql(true);
        expect($('p').text()).eql('Hello world');
    });
});
