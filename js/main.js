var signinEmail= document.getElementById('signinEmail');
var signinPassword= document.getElementById('signinPassword');

var LoginArray = [];
LoginArray = JSON.parse(localStorage.getItem('user'));

function login(){
    if(signinEmail.value=='' || signinPassword.value==''){
        document.getElementById('message').innerHTML=`<span class="text-danger m-3">All inputs is required</span>`;
    }
    else{
        if(chick()==true){

        }
        else{
            document.getElementById('message').innerHTML=`<span class="text-danger m-3">incorrect email or password</span>`;

        }
    }
}

function chick(){
 
    for(var i=0; i<LoginArray.length;i++){
        if(signinEmail.value==LoginArray[i].email && signinPassword.value==LoginArray[i].password){
            var userName =LoginArray[i].name;
            localStorage.setItem('userName',userName );
            location.href='./Home/index.html';
            return true
        }

    }
}
