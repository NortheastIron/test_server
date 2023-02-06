 const EventEmitter = require('events');
//
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
    log (msg) {
        console.log(msg);
        this.emit('some_event', {id: 1, text: 'TEXT TEST'});
    }
}

const log = (msg) => {
    console.log(msg);
    emitter.emit('some_event', {id: 1, text: 'TEXT TEST'});
};

module.exports = Logger;
