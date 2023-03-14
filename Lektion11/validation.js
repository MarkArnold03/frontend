const togglePassword = () => {
    const password = document.getElementById('password')
    const icon = document.getElementById('toggle-password-icon')

    if(password.type === "password") {
        password.type = "text"
        icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'

    } else {
        password.type = "password"
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}

const handleSubmit = (e) => {
    e.preventDefault()

    for(let element of e.target) {
            switch(element.type) {
                case 'email':
                    validateEmail(e.target.value)
                    break;
                case 'text':
                    validateName(e.target.value)
                    break;
                case 'password':
                    validatePassword(e.target.value)
                    break;

            }
        }


}


const validateName = (value) => {
    //e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

    const regEx = /^[A-Ö]([a-öA-Ö\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){2,30}$/
    if (!regEx.test(e.value)) {
        console.log("firstname not valid")
        return false
    }
        
    console.log("firstname valid")
    return true
}

const validateEmail = (value) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!regEx.test(e.value)) {
        console.log("email not valid")
        return false
    }

    console.log("email valid")
    return true
}
const validatePassword = (value) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!regEx.test(e.value)) {
        console.log("password not valid")
        return false
    }
        
    console.log("password valid")
    return true
}


const validate = (e) => {
    switch(e.target.type){
        case 'email':
            validateEmail(e.target.value)
            break;
        case 'text':
            validateName(e.target.value)
            break;
        case 'password':
            validatePassword(e.target.value)
            break;
    }
}