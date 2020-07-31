console.log('Start');

function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the data:');
            resolve({ userEmail: email });
        }, 3000);
    })
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"]);
        }, 2000);

    })
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        }, 2000);
    })
}

// const user = loginUser("ike@goomail.com", 123456, user => {
//     console.log(user);
//     getUserVideos(user.userEmail, videos => {
//         console.log(videos);
//         videoDetails(videos[0], title => {
//             console.log(title);
//         })
//     })
// });

loginUser('ed', 'bumba')
    .then(user => console.log(user));

console.log('Finish');