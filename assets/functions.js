export function getCompleteSpeech(sp, so) {
    sp = sp.replace(/ /g, ' ' + so + ' ');
    sp += ' ' + so;
    return sp;
}

export function chargeList(arr) {
    $('#zoo').empty();
    arr.forEach(an => {
        $('#zoo').append('<button>' + an.getName() + ' speak </button>');
    });
}

export function refreshList(arr) {
    $('#zoo').append('<button>' + arr[arr.length - 1].getName() + ' speak </button>');
}

export function checkInput() {
    let i = document.querySelectorAll("input[type=text]");
    let bool; 
    i.forEach(e => { 
        if (e.value == "") {
            e.style.borderColor = "red";
            bool = false;
        } else {
            e.style.borderColor = "initial";
            bool = true;
        }
    });
    return bool;
}

export function cleanInputs() {
    var inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach((e, i) => {
        inputs[i].value = "";
    });
}

export function parse(f, c, o) {
    //Esta funcion toma las urls cargadas, crea un array para cada una, elimina las partes intrascendentes
    //Y crea un JSON con la información obtenida
    let parsedUrlFormat = spliting(f, '/');
    let parsedUrlContent = spliting(c, '/');
    if (parsedUrlContent.length == parsedUrlFormat.length) {
        parsedUrlFormat.forEach((e, i) => {
            if (e.indexOf(':') != -1) {
                parsedUrlFormat[i] = e.substr(1);
            }
            if (parsedUrlContent[i].indexOf('?') != -1) {
                let arr = spliting(parsedUrlContent[i], '?');
                parsedUrlContent[i] = arr[0];
                arr = spliting(arr[1], '&');
                arr.forEach(e => {
                    let a = spliting(e, '=');
                    if (a.length == 2) {
                        addItem(parsedUrlFormat, a[0]);
                        addItem(parsedUrlContent, a[1]);
                    } else {
                        alert('Algo ha ocurrido mal, vuelva a intentarlo');
                    }
                });
            }
            if (parsedUrlFormat[i] == parsedUrlContent[i]) {
                parsedUrlFormat.slice(i, 1);
                parsedUrlContent.slice(i, 1);
            }
        });
        createJSON(parsedUrlFormat, parsedUrlContent, o);
    } else {
        alert("El formato y el contenido relacionados no coinciden");
    }
}

export function createJSON(f, c, o) {
    for (let i = 0; i < f.length; i++) {
        if (f[i] != "" && c[i] != "") {
            o[f[i]] = c[i];
        }
    }
    show(o);
}

export function show(obj) {
    //Cargamos el resultado en la página y en la consola para mejorar la depuración (si fuera necesaria)
    console.log(obj);
    let o = stringifyURL(obj);
    o.forEach((e, i) => {
        if (e == "{" || e == ",") {
            $('#json').append(e + '<br>');
        } else if (e == "}") {
            $('#json').append('<br>' + e);
        } else {
            $('#json').append('<span class="tabAdded">' + e + '</span>');
        }
    });
}

export function stringifyURL(json) {
    //Convierte un JSON en String para manipularla más fácilmente en el DOM
    let stringArray = JSON.stringify(json).split('"');
    stringArray.forEach((e, i) => {
        if (e == "" && e == null) {
            stringArray.slice(i, 1);
        }
    });
    return stringArray;
}

export function spliting(str, char) {
    return str.split(char);
}

export function addItem(arr, it) {
    arr.push(it);
}

export function cleanResult() {
    $('#json').empty();
}

export function getSiblings(el) {
    return $('#' + el).siblings('input[type=text]').attr('id');
}

export function controlInput(currentElem, siblings) {
    if (siblings != null) {
        let x = currentElem.value;
        let y = $('#' + siblings).val();
        if (x != "" && y != "") {
            $('#proccess').attr('disabled', false);
        } else {
            $('#proccess').attr('disabled', true);
        }
    }
}