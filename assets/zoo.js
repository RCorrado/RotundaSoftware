import { addItem, chargeList, checkInput, refreshList, cleanInputs } from './functions.js';
import { Animal } from './classes.js';

$(document).ready(() => {
    let animals = [];
    let lion = new Animal('Lion', "I'm lion", "roar");
    addItem(animals, lion);
    let tiger = new Animal('Tiger', 'Lions suck', 'grrr');
    addItem(animals, tiger);

    chargeList(animals);

    $('#add').click(() => {
        let inp = checkInput();
        if (inp) {
            let name = $('#animal').val();
            let speech = $('#speech').val();
            let sound = $('#sound').val();
            addItem(animals, new Animal(name, speech, sound));
            refreshList(animals);
            cleanInputs();
        }
    });

    $(document).on('click', 'button', function () {
        for (let an of animals) {
            let html = $(this).html();
            html = html.split(" ");
            if (html[0] == an.name) {
                an.speak();
            }
        }
    });
});