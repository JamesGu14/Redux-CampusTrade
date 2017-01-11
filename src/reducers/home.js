export default function home(state = { collapse: false }, action) {
  const _collapse = state.collapse
  switch (action.type) {
    case 'collapse':
      return { collapse: !_collapse }
    default: 
      return state
  }
}
