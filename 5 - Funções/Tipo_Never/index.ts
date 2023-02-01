function showErroMessage(message: string): never {
  throw Error(message);
}
showErroMessage("Erro de amar de mais <3");
