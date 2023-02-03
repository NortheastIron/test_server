const EventEmitter = require('events');

const emitter = new EventEmitter();

const log = require('./log');

emitter.on('some_event', (args) => {
    const { id, text } = args;
    console.log('on!', text, id);
});

log('LOGGED');

//urok 5 6:31
