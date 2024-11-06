// escutarEvento.js
import eventEmitter from "./events";

// Função que escuta e exibe os dados do evento
function escutarEvento(nomeDoEvento: any) {
    eventEmitter.on(nomeDoEvento, (data) => {
        console.log("escutado")
        return data
        // Chama a função de callback com os dados do evento
    });
}

export default escutarEvento;

