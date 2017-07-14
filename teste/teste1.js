
import chai from 'chai';
const expect = chai.expect;
import incrementer  from '../app';

describe('Suites test', () => {
    it('Teste de classes', () => {
        $('body').append('<div class="teste"></div>');
        const SP = SP || {};
        SP.insertClass = () => {
            $('.teste').addClass('SP');
        };
        incrementer('.teste');
        SP.insertClass();
        expect($('body')).not.to.be.null;
        expect($('.teste').hasClass('abc') && $('.teste').hasClass('SP')).eql(true);
        expect($('p').text()).eql('Hello world');
    });
});
