$(document).ready(function(){
  var cep = null;

  $("#buscarEnderecoBTN").click(function(){
    var cep = $("#CEP").val();

    if(cep != "") {
      var buscaEndereco = new BuscaEndereco(cep);

      buscaEndereco.busca();
    }
  });

  $( "#banner" ).load( "http://localhost:3000/banner" );
});
