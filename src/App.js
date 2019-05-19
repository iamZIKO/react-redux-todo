import React from 'react';
import './css/style.scss';
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.boundUpdateField = this.updateFiled.bind(this)
    this.boundedAddTodo = this.addTodo.bind(this)
    this.boundedRemove = this.removeTodo.bind(this)
    this.boundedCheck = this.checkTodo.bind(this)
    this.boundedFilter = this.filter.bind(this)
    // this.state = {
    //   todos: [
    //     {
    //       id: uuidv1(),
    //       todo: 'Cooking',
    //       completed: false
    //     },
    //     {
    //       id: uuidv1(),
    //       todo: 'Drifting',
    //       completed: true
    //     },
    //     {
    //       id: uuidv1(),
    //       todo: 'Gaming',
    //       completed: false
    //     }
    //   ],
    //   form: {
    //     input: "",
    //     error: false
    //   },
    //   filter: {
    //     all: true,
    //     completed: false,
    //     stillTodo: false
    //   }
    // }
  }

  // updateFiled(str) {
  //   this.setState({ form: { ...this.state.form, input: str } })
  // }

  // addTodo() {
  //   if (this.state.form.input) {
  //     this.setState({ todos: [...this.state.todos, { id: uuidv1(), todo: this.state.form.input, completed: false }] })
  //     // // todo: =>
  //     this.setState({ form: { input: "", error: false } })
  //   } else {
  //     // // todo: => 
  //     this.setState({ form: { input: '', error: true } })
  //   }
  // }

  // removeTodo(id) {
  //   const filteredArr = this.state.todos.filter(el => el.id !== id)
  //   this.setState({ todos: filteredArr })
  // }

  // checkTodo(id) {
  //   // eslint-disable-next-line array-callback-return
  //   const checkedElement = this.state.todos.filter(el => {
  //     if (el.id === id) {
  //       return el.completed = !el.completed
  //     }
  //   })
  //   const finalPhase = this.state.todos.filter(el => el.id !== checkedElement.id)
  //   this.setState({ todos: finalPhase })
  // }

  // filter(str) {
  //   const all = str === 'all' ? true : false
  //   const completed = str === 'completed' ? true : false
  //   const stillTodo = str === 'todo' ? true : false
  //   this.setState({
  //     filter: {
  //       all, completed, stillTodo
  //     }
  //   })
  // }

  render() {
    return <div className='todoApp'>
      <Form addTodo={this.boundedAddTodo} update={this.boundUpdateField} formState={this.state.form} />
      <TodoList todoArr={this.state.todos} remove={this.boundedRemove} check={this.boundedCheck} filterState={this.state.filter} />
      <Filter filter={this.boundedFilter} filterState={this.state.filter} />
    </div>
  }
}

const mapStateToProps = (state) => ({
  filter: state.filterState,
  form: state.formState,
  todos: state.todoState
})

const mapDispatchToProps = () => { }

export default connect(mapStateToProps, mapDispatchToProps)(App)