import React from 'react'

const Form = ({ addTodo, update, formState }) => {
    let error = formState.error ? 'todoApp__form__input todoApp__form__input--error' : 'todoApp__form__input'
    return <form className='todoApp__form' onSubmit={e => { e.preventDefault(); addTodo() }} >
        <input className={error} placeholder='Enter your Todo...' value={formState.input} type="text" onChange={e => update(e.target.value)} />
        <button className='todoApp__form__button'></button>
    </form >
}

export default Form