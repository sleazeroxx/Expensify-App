//firebase promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Sean',
        //     age: 32
        // });
        reject('Something went wrong!');
    }, 4500);
});

console.log('before');

//This runs when and if the promise resolves,
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error)
});

promise.then((data) => {
    console.log('1', data);
}, (error) => {
    console.log('error: catch replaced, ', error);
}); // does the same as above, a second function at the end acts as a catch().

console.log('after');


// REMOVE

// database.ref().remove().then(() => {
//     console.log('Remove succeeded');
// }).catch((e) => {
//     console.log('Remove failed', e);
// });

// database.ref('isSingle').set(null).then(() => {
//     console.log('Also works to remove by passing in null');
// }).catch((e) => {
//     console.log('But remove() is better to use', e);
// });

// UPDATE

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Updated successfully');
// }).catch((e) => {
//     console.log('Update failed', e);
// });

// SUBSCRIBE TO CHANGES

// const onValueChagne = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//   console.log(expenses);
// });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //     console.log(snapshot.val());
// // });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'Monthly',
//     amount: 1000,
//     createdAt: '25/1/2017'
// });


// PROMISE CHAINING

promise.then((data) => {
    console.log('1', data);

    return 'some data';
}).then((str) => {
    console.log('This runs if resolved, can take in returned data from above', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');





promise.then((data) => {
    console.log('1', data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 4500);
    });
}).then((str) => {
    console.log('This runs if resolved, can take in returned data from above', str);
}).catch((error) => {
    console.log('error: ', error);
});