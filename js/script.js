function validar() {
    const ret_validar_nombre = validarNombre();
    const ret_validar_password = validarPassword();
    const ret_validar_telefono = validarTelefono();
    const ret_validar_direccion = validarDireccion();
    const ret_validar_url = validarUrl();
    const ret_ingresar = ingresar();
    const ret_validar_select = validarSelect()
;
    return ret_validar_nombre && ret_validar_password && ret_validar_telefono && ret_validar_direccion && ret_validar_url && ret_ingresar && ret_validar_select;

}

var lista_aficiones = []


document.getElementById('ingresar').addEventListener('click', function (e) {
    e.preventDefault();
    let inputAficion = document.getElementById('aficiones');
    const divMensaje = document.getElementById('err-list')
    const divImg = document.getElementById('imagen')
    
    let aficion = inputAficion.value;
    if (aficion == '') {
        divMensaje.innerText = 'No debe ingresar campos vacíos'
        divMensaje.className = 'text-danger small'
    }else if (lista_aficiones.includes(aficion)) {
        divMensaje.innerText = 'Ya agregó éste interés / afición'
        divMensaje.className = 'text-danger small'
        return false
    } else {
        divMensaje.innerText = ''
        divImg.style = 'display: none;'
        lista_aficiones.push(aficion)
        crearLista()
        inputAficion.value = ''
    }

});

function crearLista() {
    const ul = document.getElementById('lista')
    const card = document.getElementById('card')
    card.style = 'display: block'
    ul.innerText=''

    for (let i=0; i < lista_aficiones.length; i++) {
        const li = document.createElement('li')
        const btn = document.createElement('button')
        btn.innerText = 'Borrar'
        btn.className = 'borrar btn btn-sm btn-danger my-1 mx-3'
        li.className = "list-group-item"
        li.innerText = lista_aficiones[i]

        li.appendChild(btn)
        ul.appendChild(li)

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            lista_aficiones.splice(i, 1)
            crearLista();
        })
    }
    console.log(lista_aficiones)
}



function ingresar() {
    const divErrList = document.getElementById('err-list')

    if (lista_aficiones== '') {
        return true;
    } else if (lista_aficiones.length < 2) {
        divErrList.innerText = 'Debe ingresar al menos 2 aficiones'
        divErrList.className = 'text-danger small'
        return false
    } else {
        divErrList.innerText = 'OK'
        divErrList.className = 'text-success small'
        return true
    }
}

function validarNombre() {
    let inputNombre = document.getElementById('nombre');
    const divErrNombre = document.getElementById('err-nombre');

    let nombre = inputNombre.value;

    const regex = /^[a-zA-Z0-9_]*$/
    const valid = regex.test(nombre);
    console.log(valid)

    const regex2 = /^[a-zA-Z]/
    const valid2 = regex2.test(nombre)

    if (nombre == '') {
        divErrNombre.innerText = 'El nombre de usuario es obligatorio'
        divErrNombre.className = 'text-danger small'
        return false
    } else if (!valid) {
        divErrNombre.innerText = 'No puede utilizar caracteres especiales'
        divErrNombre.className = 'text-danger small'
        return false
    } else if (!valid2) {
        divErrNombre.innerText = 'El primer caracter debe ser una letra'
        divErrNombre.className = 'text-danger small'
        return false
    } else if (nombre.length <5 || nombre.length > 10) {
        divErrNombre.innerText = 'El nombre debe contener al menos 3 caracteres y como máximo 6'
        divErrNombre.className = 'text-danger small'
        return false
    } else {
        divErrNombre.innerHTML = 'OK';
        divErrNombre.className = 'text-success small'
        return true;
    }
}

function validarPassword() {
    let inputPassword = document.getElementById('contraseña');
    let inputPassword2 = document.getElementById('contraseña2');
    let inputNombre = document.getElementById('nombre');
    const divErrPass = document.getElementById('err-pass');
    const divErrPass2 = document.getElementById('err-pass2');

    let pass = inputPassword.value;
    let pass2 = inputPassword2.value;
    let username = inputNombre.value;

    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/
    let valid = regex.test(pass)

    console.log('la contraseña:', valid)

    if (pass == '') {
        divErrPass.innerText = 'La contraseña es obligatoria'
        divErrPass.className = 'text-danger small';
        return false
    }else if (!valid) {
        divErrPass.innerText = 'La contraseña debe contener al menos 1 dígito y 1 letra'
        divErrPass.className = 'text-danger small';
        return false
    } else if (pass.length < 3 || pass.length > 6) {
        divErrPass.innerText = 'La contraseña debe contener como mínimo 3 y como máximo 6 caracteres'
        divErrPass.className = 'text-danger small'
        return false
    } else if (pass2 == '') {
        divErrPass.innerText = ''
        divErrPass2.innerText = 'Debe confirmar la contraseña';
        divErrPass2.className = 'text-danger small'
        return false
    } else if (pass != pass2){
        divErrPass2.innerText = 'Las contraseñas no coinciden';
        divErrPass2.className = 'text-danger small'
        return false
    }else if (pass === username) {
        divErrPass.innerText = 'La contraseña no puede ser igual al nombre de usuario'
        divErrPass.className = 'text-danger small'
        return false
    } else {
        divErrPass.innerHTML = '';
        divErrPass2.innerText = 'OK';
        divErrPass2.className = 'text-success small';
        return true
    }
}

function validarTelefono() {
    const inputFono = document.getElementById('telefono')
    const divErrFono = document.getElementById('err-fono')
    let strFono = inputFono.value;
    let fono = Number(strFono)

    const regex = /(^[0-9]{2})?[ -]?9[0-9]{8}$/
    let valid = regex.test(fono)

    if (strFono == '') {
        divErrFono.innerText = 'El teléfono es obligatorio',
        divErrFono.className = 'text-danger small';
        return false;
    } else if (isNaN(strFono)) {
        divErrFono.innerText = 'El teléfono debe ser numérico';
        divErrFono.className = 'text-danger small';
        return false;
    } else if (!valid) {
        divErrFono.innerText = 'El número no corresponde a un teléfono válido';
        divErrFono.className = 'text-danger small';
        return false;
    } else {
        divErrFono.innerText = 'OK';
        divErrFono.className = 'text-success small'
        return true;
    }
}

function validarDireccion() {
    const inputDireccion = document.getElementById('direccion');
    const divErrDir = document.getElementById('err-dir')
    let direccion = inputDireccion.value;

    if (direccion == '') {
        divErrDir.innerText = 'El campo de Dirección es obligatorio'
        divErrDir.className = 'text-danger small';
        return false;
    } else {
        divErrDir.innerText = 'OK';
        divErrDir.className = 'text-success small';
        return true;
    }
}

function validarUrl() {
    const inputUrl = document.getElementById('web')
    divErrUrl = document.getElementById("err-web")

    let url = inputUrl.value;

    // const regex = /^(https?:\/\/)?([\da-z\.]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;
    const valid = regex.test(url);

    // Este es solo para leer en consola la opcion elegida en select, para comprobar
    const select = document.getElementById('miSelect')
    const valor = select.value;
    const texto = select.options[select.selectedIndex].text;
    console.log("Valor comuna:", valor);
    console.log("Comuna:", texto);

    if (url == '') {
        return true;
    }else if (valid) {
        divErrUrl.innerHTML = 'OK';
        divErrUrl.className = 'text-success small';
        return true;
    } else {
        divErrUrl.innerHTML = 'La URL ingresada no corresponde a una web válida'
        divErrUrl.className = 'text-danger small';
        return false;
    }

}

function mostrarPassword() {
    const password = document.getElementById('contraseña')
    const mostrar = document.getElementById('mostrar')

    if (password.type == 'password') {
        password.type = 'text'
        mostrar.innerHTML = 'Ocultar contraseña'
    } else {
        password.type = 'password'
        mostrar.innerHTML = 'Mostrar contraseña'
    }
}

function mostrarPassword2() {
    const password2 = document.getElementById('contraseña2')
    const mostrar2 = document.getElementById('mostrar2')

    if (password2.type == 'password') {
        password2.type = 'text'
        mostrar2.innerHTML = 'Ocultar contraseña'
    } else {
        password2.type = 'password'
        mostrar2.innerHTML = 'Mostrar contraseña'
    }
}

function validarSelect() {
    const select = document.getElementById('miSelect')
    let seleccion = select.value

    if (seleccion == 'Seleccione una comuna') {

        seleccion = null
        console.log('comuna:', seleccion)
        return true
    } else {
        console.log('comuna:', seleccion)
        return true
    }
}
