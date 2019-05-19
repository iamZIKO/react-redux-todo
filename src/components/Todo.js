/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
const Todo = ({ todo, check, remove, i }) => {
    const checked = todo.completed ? 'todoApp__list__item todoApp__list__item--checked' : 'todoApp__list__item'
    return <li className={checked}>
        <span className='todoApp__list__item__text'>{todo.todo}</span>
        <a href="#" onClick={e => { e.preventDefault(); remove(todo.id) }} className='icon icon--remove'></a>
        <a href="#" onClick={e => { e.preventDefault(); check(todo.id) }} className='icon icon--circular icon--check'></a>
    </li>
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    check: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default Todo