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
    .then(user => getUserVideos(user.email))
    .then(videos => videoDetails(videos[0]))
    .then(detail => console.log(detail));


// // Synchronous style (wouldn't it be nice??)
async function displayUser() {
    try {
        const loggedUser = await loginUser('edmail', 1235);
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail);
    } catch (err) {
        console.log("We could not get the videos");
    }
}

// console.log('Finish');

