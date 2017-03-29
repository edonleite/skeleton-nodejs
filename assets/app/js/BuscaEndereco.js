function BuscaEndereco(cep)
{
    this.cep = cep;
    _URL = "http://viacep.com.br/ws/";
    _TYPE = "/json/";

    this.getURL = function()
    {
      return _URL + this.cep + _TYPE;
    }

    this.requestEndereco = function(tipoDoMetodo, tipoDeRetorno)
    {
      this.request = $.ajax({
        url: this.getURL(),
        method: tipoDoMetodo,
        dataType: tipoDeRetorno //@TODO verificar se o tipo for JSON então devemos alterar o metodo de URL pois se for XML tem que alterar a request para XML
        // data: { id : menuId }, @TODO: Falta implmentar a regra de verificação de POST pois se for um post deve-se montar o data
      });
    }

    this.endereco = function()
    {
      this.request.done(function( data ) {
        preencheDadosEnderecoCallBack(data);
      });
    }

    function preencheDadosEnderecoCallBack(data){
        if(!data.erro){
          // Exibe os dados
          $("#exibiEndereco").show();

          //Preenche o form
          $("#logradouro").val(data.logradouro);
          $("#bairro").val(data.bairro);
          $("#localidade").val(data.localidade);
        } else {
          console.error('OPS !');
        }
        //$("#dados").val();
    }

    this.busca = function()
    {
      this.requestEndereco("GET", "json");
      this.endereco();
    }
}
