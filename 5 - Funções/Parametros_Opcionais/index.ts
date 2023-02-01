function mordernGreeting(name: string, greet?: string) {
  if (greet) return `Olá ${greet} ${name} tudo bem?`;
  return `Olá ${name} tudo bem?`;
}
console.log(mordernGreeting("Pedro", "Senhor"));
console.log("Heloiza");
