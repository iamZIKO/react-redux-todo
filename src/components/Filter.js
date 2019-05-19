/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../css/filter.scss'

const Filter = ({ filter, filterState }) =>
    <div className='todoApp__filter'>
        <button onClick={e => { e.preventDefault(); filter('all') }} className={filterState.all ? 'todoApp__filter__all --active' : 'todoApp__filter__all'} >All</button>
        <button onClick={e => { e.preventDefault(); filter('completed') }} className={filterState.completed ? 'todoApp__filter__completed --active' : 'todoApp__filter__completed'} >Completed</button>
        <button onClick={e => { e.preventDefault(); filter('todo') }} className={filterState.stillTodo ? 'todoApp__filter__todo --active' : 'todoApp__filter__todo'} >Todo</button>
    </div>

export default Filter