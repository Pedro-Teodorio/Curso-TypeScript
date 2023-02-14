interface User {
  email: string;
  role?: string;
}
function showUserDetails(user: User) {
  console.log(`O usuário tem o email ${user.email} `);
  if (user.role) console.log(`A função do usuário é: ${user.role} `);
}

const userMario: User = { email: "mariohelolucas@gmail.com" };
const userPedro: User = {
  email: "pedrohelolucas@gmail.com",
  role: "Administrator",
};
showUserDetails(userMario);
showUserDetails(userPedro);
