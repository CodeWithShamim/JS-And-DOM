function myFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array strings!';
    }
    let allFriend = friends[0];
    for (const friend of friends) {
        if (friend.length > allFriend.length) {
            allFriend = friend;
        }
    }

    return allFriend;
}

const friends = ['sajib', 'salam', 'sabbir', 'sakibbbbbb', 'sonjoy'];
// const result = myFriends(1233);
// console.log(result);


// check friend using indexOf & includes---------------------
// for (const friend of friends) {
//     if (friend.indexOf('sabbir') != -1) {
//         console.log(`yeah item is here`)
//         break;
//     }
// }
for (const friend of friends) {
    if (friend.includes('sabbir')) {
        console.log(`yeah item is here`)
        break;
    }
}