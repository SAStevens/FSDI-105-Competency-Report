function displayUsers(usersArray){
    let tr="";
    for(i=0; i < usersArray.length; i++){
        let user = usersArray[i];
        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.fname}</td>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.phone}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td>

        </tr>
        `;
        $("#users-table").append(tr);
    }
}

function init(){
    console.log("Listing users...");
    let users = readUsers(); 
    displayUsers(users);
}

window.onload=init;