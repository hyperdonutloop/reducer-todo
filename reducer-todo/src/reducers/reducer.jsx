export const initialState = [
    {
      item: 'Learn About Reducers',
      completed: false,
      id: 1
    },
    {
      item: 'Learn About Pizza',
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
    case 'TOGGLE_COMPLETED':
      return state.map(element => {
        if (element.id === action.payload){
          return { ...element, completed: !element.completed} 
        } else {
          return element;
        }
      })
    case 'CLEAR_COMPLETED':
      // console.log('clicking clear completed works');
      return state.filter(element => element.completed === false)
  }
}