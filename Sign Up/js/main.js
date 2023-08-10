var singnUpName = document.getElementById('signupName');
var singnUpEmail = document.getElementById('signupEmail');
var singnUpPassword = document.getElementById('signupPassword');

var signUpArray = [] 



if(localStorage.getItem('user')!= null){
    signUpArray=JSON.parse(localStorage.getItem('user'))
}
else{
    signUpArray = [] ;
}



function isEmpty () {

    
    var signUp = {
        name: singnUpName.value,
        email: singnUpEmail.value,
        password: singnUpPassword.value
    }


    if(singnUpName.value =='' || singnUpEmail.value =='' ||singnUpPassword.value ==''){
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
    }
 else{
    if (isExiist() == true) {
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">email already exists</span>'
    
    }
    else{
        if(signUpValidation()==false){

    }

else{

        signUpArray.push(signUp);
        localStorage.setItem('user', JSON.stringify(signUpArray));
        clear()
        document.getElementById('message').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
        }

}
}
}

function isExiist(){
    for(var i=0 ; i<signUpArray.length;i++){
        if(signUpArray[i].email.toLowerCase()==singnUpEmail.value.toLowerCase()){
            return true;       
        }
    }

}

function clear(){
    singnUpName.value=''
    singnUpEmail.value='';
    singnUpPassword.value='';
    document.getElementById('signUpnameValid').innerHTML = '<span></span>'
    document.getElementById('signEmailValid').innerHTML = '<span></span>'
    document.getElementById('signpassValid').innerHTML = '<span></span>'

}

function nameValidation(){
    var regex =/^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/ ;
    if(regex.test(singnUpName.value)==true && singnUpName.value!=''){
        singnUpName.classList.add("is-valid");
        singnUpName.classList.remove("is-invalid");
        return true;
    }
    else{
        singnUpName.classList.add("is-invalid");
        singnUpName.classList.remove("is-valid");
        document.getElementById('signUpnameValid').innerHTML = '<span class="text-danger m-3">include at least 3 letters starting with capital</span>'
        return false;

    }
}


function emailValidation(){
    var regex =/@[a-z]{1,10}(\.com)$/ ;
    if(regex.test(singnUpEmail.value)==true && singnUpEmail.value!=''){
        singnUpEmail.classList.add("is-valid");
        singnUpEmail.classList.remove("is-invalid");
        return true;
    }
    else{
        singnUpEmail.classList.add("is-invalid");
        singnUpEmail.classList.remove("is-valid");
        document.getElementById('signEmailValid').innerHTML = '<span class="text-danger m-3">name@example.com</span>'
        return false;

    }
}

function passwordValidation(){
    var regex =/^.{5,15}$/ ;
    if(regex.test(singnUpPassword.value)==true && singnUpPassword.value!=''){
        singnUpPassword.classList.add("is-valid");
        singnUpPassword.classList.remove("is-invalid");
        return true;
    }
    else{
        singnUpPassword.classList.add("is-invalid");
        singnUpPassword.classList.remove("is-valid");
        document.getElementById('signpassValid').innerHTML = '<span class="text-danger m-3">Enter from 5 to 15 characters</span>'
        return false;

    }
}


function signUpValidation(){
    nameValidation();
    emailValidation();
    passwordValidation();

    if( nameValidation()==true &&
    emailValidation()==true &&
    passwordValidation()==true ){
        return true;

    }
    else{
        return false;
    }
}


