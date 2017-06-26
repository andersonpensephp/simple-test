import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const dom = new JSDOM('<html><body><p>Hello world</p></body></html>', {});
global.window = dom.window;
global.$ = require('jquery');
