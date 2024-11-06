export function getDataHoraISO() {
    const dataAtual = new Date();
    return dataAtual.toISOString();
}

export function getTimesTamp(){
    const timesTamp = Date.now();
    return timesTamp.toString();
}
