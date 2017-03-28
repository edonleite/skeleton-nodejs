function validarIdade(idade)
{
    return (idade >= 18);
}

var idade = 17;

if(validarIdade(idade)) {
  console.log('Olá, bem vindo a nossa festa do Javascript!');
} else {
  console.error('Barrado no baile do Javascript');
}
