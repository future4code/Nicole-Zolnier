type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// a) tsc ex4.js

// b) sim, eu entraria na pasta src pelo terminal e faria tsc ex4.js
// ou daria pra fazer aquela configuração feita em aula, criando a pasta src e build 
// e mudando as coisas do tsconfig.json pra ficar tudo certinho e dai só mandar um tsc pra transpilar

// c) sim, eu descrevi o processo ali em cima

// d) esse arquivo padrão vem cheio de coisas, muitas delas comentadas.
// no arquivo da aula foi apagado um monte de coisa e descomentado a "sourceMap", "outDir", "rootDir"
// com isso a gente consegue setar os diretorios de inicio e fim da transpilação 