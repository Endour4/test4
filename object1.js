// Let create One User Object
const User = {
    name: "Emmanuel John",
    userName:"emmanuel_john",
    password:"password@123",
    login: function(userName, password){
        if (userName === this.userName && password === this.password){
            console.log('Login Successfully')
        } else {
            console.log('Authentication Failed!!!')    
        }
    }
}

// User.login('emman1','emman1');
User.login('emmanuel_john', 'password@123');

// class User {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//     login(email, password){
//         if (email===this.email && password===this.password){
//             console.log('Login Successfully')
//         } else {
//             console.log('Authentication Failed!!!')
//         }
//     }
//     removeUser(userId){
//         // Removing the Usr from your DB
//         console.log("User Removed Successfully")
//     }
// }