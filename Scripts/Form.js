

function validateEmail() 
    {
        var re = /\S+@\S+\.\S+/;
        var emailToVerify = document.getElementById('email').value
        if (!(re.test(emailToVerify))){
            alert("Enter Valid Email")
            return re.test(emailToVerify);
        } else
        {
            return re.test(emailToVerify);

        }
    }
    


function validateName(nameField){
    var nameToVerify = document.getElementById('f_name').value

    if (nameToVerify.value == ''){
        alert("Enter Valid Name")
        return false
    }
    else{
        return true
    }
}

function validateMessage(nameField){
    var nameToVerify = document.getElementById('message').value

    if (nameToVerify.value == ''){
        alert("Enter A Message")
        return false
    }
    else{
        return true
    }
}

function submitForm(){
    var first_name =  document.getElementById('f_name').value
    var last_name = document.getElementById('l_name').value
    var email = document.getElementById('email').value

    if (validateEmail() && validateMessage() && validateName()){
        closeGetQuote()
        alert('Message Sent')
        // window.open()
        //PLEASE IMPLEMENT
    }
}