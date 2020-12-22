// Event Emittler

const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged() {
        this.emit('User logged', data);
    }
}

const users = new Users();

emitter.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Rafael Marques' });