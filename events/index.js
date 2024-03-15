const { EventEmitter } = require('events');
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   

  const myEventEmitter = new EventEmitter();
   
  const ulangtahun = ({ name }) => {
    birthdayEventListener(name);
}

  myEventEmitter.on('happy-birthday', ulangtahun);
   
  myEventEmitter.emit('happy-birthday', { name: 'Dimas' });