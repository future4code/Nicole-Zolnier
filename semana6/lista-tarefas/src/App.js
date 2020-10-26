import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const BotaoContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  margin-top: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefinha", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    if (localStorage.getItem("tarefinha")) {
      this.setState({tarefas: JSON.parse(localStorage.getItem("tarefinha"))})
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue : event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false 
    }

    this.state.inputValue = ""

    const listaTarefas = [... this.state.tarefas , novaTarefa]

    this.setState({tarefas: listaTarefas})
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const novaTarefa = {
          ... tarefa,
          completa: !tarefa.completa
        } 
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro : event.target.value})
  }

  deletarTarefa = (id) => {
    const tarefasTiradas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })

    this.setState({tarefas: tarefasTiradas})
  }

  deletarTudo = () => {
    this.setState({tarefas: []})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <BotaoContainer>
          <button onClick={this.deletarTudo}>Apagar todas as tarefas</button>
        </BotaoContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onAuxClick={() => this.deletarTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
