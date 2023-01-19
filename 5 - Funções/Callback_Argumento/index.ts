function greeting(name: string): string {
  return `Olá ${name}, Tudo bem ?`;
}
function pregreeting(fun: (name: string) => string, userName: string) {
  console.log(`Preparando a função`);
  const greeting = fun(userName);
  return greeting;
}

console.log(pregreeting(greeting,'Pedro Lucas Teodorio da Silva'))
