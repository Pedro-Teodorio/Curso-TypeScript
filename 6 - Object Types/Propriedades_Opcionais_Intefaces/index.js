"use strict";
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email} `);
    if (user.role)
        console.log(`A função do usuário é: ${user.role} `);
}
const userMario = { email: "mariohelolucas@gmail.com" };
const userPedro = {
    email: "pedrohelolucas@gmail.com",
    role: "Administrator",
};
showUserDetails(userMario);
showUserDetails(userPedro);
