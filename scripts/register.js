function User(email,password,firstname,lastname,age,gender,phone,payment,color){
    this.email=email;
    this.password=password;
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.gender=gender;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

function validation(user){
    let valid = true

    if (user.email==""){
        valid = false;
        $("#txtEmail").addClass("alert-error");
    }
    return valid;
}

let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFname = $("#txtFirstName");
let inputLname = $("#txtLastName");
let inputAge = $("#txtAge");
let inputGender = $("#txtGender");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");

function register(){
    let newUser=new User(inputEmail.val(),inputPassword.val(),inputFname.val(),inputLname.val(),inputAge.val(),inputGender.val(),inputPhone.val(),inputPayment.val(),inputColor.val());
    if(validation(newUser)==true){
        saveUser(newUser);
        $("input").val("");
    }
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init;