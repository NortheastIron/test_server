
const Logger = require('./log');
const log = new Logger();
// const log = require('./log');

log.on('some_event', (args) => {
    const { id, text } = args;
    console.log('on!', text, id);
});

log.log('LOGGED');

//urok 5 6:31
