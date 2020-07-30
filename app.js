console.log('Start');

function loginUser(email, password){
    setTimeout(()=>{
        console.log('Now we have the data');
        return {userEmail: email}
    }, 2000);
}

const user = loginUser('ike@goomail.com', 123456);
console.log(user);

console.log('Finish');