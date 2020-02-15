export const initialState = [
    {
      item: 'This is your first task',
      completed: false,
      id: 1
    },
    {
      item: 'Click on me and hit remove',
      completed: false,
      id: 2
    }
  ]


export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload, 
        completed: false,
        id: Date.now()
      };
      return [ ...state, newTodo ];

    case 'TOGGLE_TODO':
      return state.map(item => {
        if (item.id === action.payload){
          return { ...item, completed: !item.completed} 
        } else {
          return item;
        }
      })
    case 'CLEAR_COMPLETED':
      // console.log('clicking clear completed works');
      return state.filter(item => item.completed === false);
      default:
        return state;
  }
}