console.log('Start');

function loginUser(email, password, callback) {
    setTimeout(() => {
        console.log('Now we have the data:');
        callback({ userEmail: email });
    }, 2000);
}

function getUserVideos(email, callback) {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3']);
    }, 1000);
}

const user = loginUser('ike@goomail.com', 123456, (user) => {
    console.log(user);
    getUserVideos(user.userEmail, (videos) => {
        console.log(videos);
    })
});

console.log('Finish');