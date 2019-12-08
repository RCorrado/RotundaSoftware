import { getSiblings, controlInput, cleanResult, parse } from './functions.js';

$(document).ready(() => {
    $('input').keyup((e) => {
        let inputs = getSiblings(e.currentTarget.id); //traemos los inputs hermanos
        controlInput(e.currentTarget, inputs); //controlamos que los inputs tengan contenido
    });
    $('#proccess').on('click', () => {
        cleanResult(); //limpiamos el resultado para recargarlo
        let urlFormat = $('#urlFormat').val();
        let urlContent = $('#urlContent').val();
        let obj = {};
        parse(urlFormat, urlContent, obj);
    });
});