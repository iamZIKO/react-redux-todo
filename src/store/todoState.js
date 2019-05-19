import uuidv1 from 'uuid/v1';

const todoState = [
    {
        id: uuidv1(),
        todo: 'Cooking',
        completed: false
    },
    {
        id: uuidv1(),
        todo: 'Drifting',
        completed: true
    },
    {
        id: uuidv1(),
        todo: 'Gaming',
        completed: false
    }
]
export default todoState