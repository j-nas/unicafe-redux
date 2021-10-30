const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'GOOD':
      return {...state, good: state.good + 1}
    case 'OK':
      console.log('ok')
      return {...state, ok: state.ok + 1}
    case 'BAD':
      console.log('bad')
      return {...state, bad: state.bad + 1}
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer