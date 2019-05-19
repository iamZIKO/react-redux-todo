import React from 'react'
import Todo from './Todo'

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
const TodoList = ({ todoArr, remove, check, filterState }) =>
    <ul className='todoApp__list'>
        <TransitionGroup className="animated" appear>
            {todoArr.filter(el => {
                if (filterState.completed && el.completed) {
                    return true
                }
                if (filterState.stillTodo && !el.completed) {
                    return true
                }
                if (filterState.all) {
                    return true
                }
                return false;
            }
            ).map((el, i) => (
                <CSSTransition
                    key={el.id}
                    timeout={300}
                    classNames="item"
                >
                    <Todo check={check} i={i} remove={remove} todo={el} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    </ul>

export default TodoList

//// .map(el => <Todo key={el.id} todo={el} />)