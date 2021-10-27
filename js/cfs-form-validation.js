/************validación formulario*************/

let messages = ["Dato ok", "El nombre no puede estar vacío", "El apellido no puede estar vacío", "Debes ser mayor de edad para usar esta página", "Usted no puede ser tan viejo, revise la edad indicada", "Revise el dato ingresado", "Ingrese una dirección email válida", "La compañía no puede estar vacía", "El teléfono no puede estar vacío", "Ingrese un teléfono válido"];


function ValidarFName() {
    if (fname.value === "") {
        alert(messages[1])
        event.preventDefault()
    } else {
        console.log(messages[0])
    }
};

function ValidarLName() {
    if (lname.value === "") {
        alert(messages[2])
        event.preventDefault()
    } else {
        console.log(messages[0])
    }
};


function ValidarAge() {
    if (age.validity.valid == true) {
        console.log(messages[0])
    } else {
        event.preventDefault()
        if (age.validity.rangeUnderflow == true) {
            alert(messages[3])
        } else {
            if (age.validity.rangeOverflow == true) { alert(messages[4]) } else {
                alert(messages[5])
            }
        }
    }

};



function ValidarEmail() {
    if (email.validity.valid == true) { console.log(messages[0]) } else {
        alert(messages[6])
        event.preventDefault()
    }

};

function ValidarCompany() {
    if (company.value === "") {
        alert(messages[7])
        event.preventDefault()
    } else {
        console.log(messages[0])
    }

};

function ValidarPhone() {
    if (phone.value === "" || phone1.value === "") {
        alert(messages[8])
        event.preventDefault()
    } else {
        if (phone.validity.valid = true && phone1.validity.valid) { console.log(messages[0]) } else {
            alert(messages[9])
            event.preventDefault()
        }
    }
};

function submit() {
    ValidarFName();
    ValidarLName();
    ValidarAge();
    ValidarEmail();
    ValidarCompany();
    ValidarPhone();
    console.log("validación realizada")
};

fname.addEventListener("change", ValidarFName);
lname.addEventListener("change", ValidarLName);
age.addEventListener("change", ValidarAge);
email.addEventListener("change", ValidarEmail);
company.addEventListener("change", ValidarCompany);
phone1.addEventListener("change", ValidarPhone);
fsubmit.addEventListener("click", submit);