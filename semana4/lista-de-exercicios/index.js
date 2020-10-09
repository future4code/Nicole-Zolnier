// -------- ex de interpretação de código --------

// ----- 1
/*
a função converte o dinheiro de dolar pra real

ela espera receber o valor em dolar (esse é o parametro)
dai ela manda um prompt pro usuario e pede pra ele informar o valor da cotação do dolar, ele transforma o que ele digitou em numero e guarda na variavel cotacao
dai ele faz um return com o R$ e a multiplicação do valor em dolar com a cotacao

pra essa função funcionar, ela foi jogada em outra const (meuDinheiro) e tá recebendo o valor 100
dai dá um console.log nessa const de meuDinheiro

entãoooo
se o usuario digitar 5.54 como cotação do dolar naquele prompt, o que vai aparecer no console é.....
R$ 554
*/

// ----- 2
/*
a função te mostra quanto o seu dinheiro vai render de acordo com cada tipo de investimento

ela espera receber um tipoDeInvestimento e um valor (esses são os parametros)
dai ela dentro da função tem essa variavel chamada valorAposInvestimento com um letque tá sem nada, só tá lá existindo

dai tem um switch case pra analisar o tipoDeInvestimento 
cada case é um possivel tipoDeInvestimento e dentro dele tem (olha só) a variavel valorAposInvestimento, dessa vez sem o let, só chamando ela mesmo
dentro da variavel que está dentro do case, tem uma multiplicação usando valor (o parametro lá de cima) vezes a taxa daquele tipo de investimento
logo abaixo desse calculo tem um break para parar o case e ir pro outro (pq se nao só um deles roda)
tem 4 cases de investimento com suas respectivas taxas dentro da multiplicação dentro da variavel (dentro do case)
e o default, que é caso o tipo de investimento nao se adeque as opçoes, é um alert! dizendo que o tipo informado tá incorreto

e entao, depois desse switch tem um return da variavel valorAposInvestimento porque depois qe roda o switch, ela vai ficar com um novo valor

fora da função, tem duas variaveis chamando a função com os parametros desejados e um console.log das duas variaveis

entãoooooo
pra primeira variavel de fora que se chama novoMontante e que chama a função com "Açoes" para o parametro tipoDeInvestimento e 150 para o parametro valor,
vai aparecer 165 no console pq a função fez a conversao usando o switch

já para segunda que se chama segundoMontante e tem o parametro de tipoDeInvestimento como "Tesouro Direto" e o parametro valor como 200, 
vai aparecer um alert de TIPO DE INVESTIMENTO INFORMADO INCORRETO porque o tipo nao se adequa aos do switch e nada no console (usuario vacilao)

*/

