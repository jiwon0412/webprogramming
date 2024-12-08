let user = {
    name: 'Sung',
    gender: 'male'
    };
    
let copyObject = function(target) {
    let result = {};
    for (let prop in target) {
    result[prop] = target[prop];
    }
    return result;
    }

let user2 = copyObject(user);
user2.name = 'Sung-Dong';

if (user !== user2) {
console.log('유저 정보가 변경되었음!');
}
console.log(user.name, user2.name);
console.log(user === user2);