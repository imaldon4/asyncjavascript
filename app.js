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

// loginUser('ed', 'bumba')
//     .then(user => getUserVideos(user.email))
//     .then(videos => videoDetails(videos[0]))
//     .then(detail => console.log(detail));


// // Synchronous style (wouldn't it be nice??)


// console.log('Finish');

const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log('getting stuff from youtube');
        resolve({ videos: [1, 2, 3, 4, 5] });
    }, 5000);
})

const fb = new Promise(resolve => {
    setTimeout(() => {
        console.log('stuff from facebook');
        resolve({ user: 'Name' });
    }, 2000);
})

Promise.all([yt, fb])
    .then(result => {
        console.log(result);
    })