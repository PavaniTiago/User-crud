import React, { Component } from 'react'
import { Main } from '../components/Main'
import axios from 'axios'
import { HiPencil } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'

const headerProps = {
  title: 'Usuários',
  subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: {name: '', email: ''},
  list: []
}

const input = document.getElementById('input1')
const input2 = document.getElementById('input2')


export default class Users extends Component {

  state = {...initialState}

  componentWillMount(){
    axios(baseUrl).then(res => {
      this.setState({ list: res.data })
    })
  }

  clear(){
    this.setState({user: initialState.user })
  }

  save(){
      const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
    .then(res => {
      const list = this.getUpdadtedList(res.data)
      this.setState({user: initialState.user, list })
    })
    this.clear()
    alert('Usuário Cadastrado com Sucesso.')
    location.reload(true)
  }

  getUpdadtedList(user, add = true){
    const list = this.state.list.filter(u = u.id !== user.id)
   if(user) list.unshift(user)
    return list
  }

  updateField(event){
    const user = {...this.state.user }
    user[event.target.name] = event.target.value
    this.setState({ user })
  }

  load(user){
    this.setState({ user })
  }

  remove(user){
    axios.delete(`${baseUrl}/${user.id}`).then(res => {
      const list = this.getUpdadtedList(user, false)
      this.setState({ list })
    })
    location.reload(true)
  }

  renderTable(){

    return (
      <table className='w-full table-auto'>
        <thead className='text-lg'>
          <tr className=''>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className=''>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows(){
    return this.state.list.map(user => {
      return (
        <tr className='bg-stone-200 text-lg' key={user.id}>
            <td>{user.id}</td>           
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className='p-1 text-2xl bg-yellow-400 rounded mr-2 hover:bg-yellow-300' onClick={() => this.load(user)}><HiPencil /></button>
              <button className='p-1 text-2xl bg-red-500 rounded hover:bg-red-400' onClick={() => this.remove(user)}><FaTrash /></button>
            </td>
        </tr>
      )
    })
  }

  renderForm(){
    return (
      <div className='flex flex-col h-[14em] w-[420px] xl:w-[540px] lg:w-[28em] sm:w-72 rounded mb-8'>
        <label className='text-2xl font-semibold mb-2'>Nome:</label>
        <input type="text" 
        className='py-2 rounded border-solid border-2 border-stone-300 pl-2' 
        placeholder="Digite seu nome..." 
        name='name'
        id='input1'
        value={this.state.user.name} 
        onChange={e => this.updateField(e)}
        />
        <label className='text-2xl font-semibold mb-2 mt-2'>Email:</label>
        <input type="text"  
        className='py-2 rounded border-solid border-2 border-stone-300 pl-2' 
        placeholder="Digite seu email..." 
        name='email'
        id='input2'
        value={this.state.user.email} 
        onChange={e => this.updateField(e)}
        />
          <div className='flex flex-row justify-end mt-4'>
            <button 
            className='w-20 h-10 bg-blue-500 hover:bg-sky-500 transition-colors rounded text-gray-100 text-md mr-2' onClick={e => this.save(e)}>Salvar</button>
            <button 
            className='w-20 h-10 bg-zinc-500 hover:bg-zinc-600 transition-colors rounded text-gray-100 text-md ' onClick={e => this.clear(e)}>Cancelar</button>
          </div>
      </div>
    )
  }

  render() {
    return (
        <Main {...headerProps}>
            {this.renderForm()}
            <div className='table-auto'>
              {this.state.list == 0 ?
                ''
                : this.renderTable()
              }
            </div>
        </Main>
    )
  }
}
