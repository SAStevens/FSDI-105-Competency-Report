function login(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    let valid = false;

    let users = readUsers();
    console.log(users);
    console.log(email,password);

    for(let i=0; i<users.length; i++){
        let user=users[i];
        if(email===user.email && password ===user.password){
            window.location="users.html";
            valid = true;
        }

    }

    if(valid==false){
        alert("Invalid credentials");
    }
}

function init(){
    $("#btnLogin").click(login);

}

window.onload=init;