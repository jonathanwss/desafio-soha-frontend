export const validadorSenha = (senha: string) => {
  if (senha.length < 4 || senha.length > 15) {
    return 'Senha invalida!';
  }
  return '';
};

export const validadorEmail = (email: string) => {
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  if (!emailRegex.test(email)) {
    return 'Email invalido!';
  }
  return '';
};
