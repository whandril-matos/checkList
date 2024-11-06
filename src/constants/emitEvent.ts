import eventEmitter from '../constants/events';

function emitirEvento(nameEvent: any, caps: any) {
    eventEmitter.emit(nameEvent, caps);
    console.log("evento EMitido")
}

export default emitirEvento;
