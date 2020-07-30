console.log('Start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('Now we have the data');
        callback({ userEmail: email });
    }, 2000);
}

const user = loginUser('ike@goomail.com', 123456, (user) => {
    console.log(user);
});

console.log('Finish');