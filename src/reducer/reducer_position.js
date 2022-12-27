const initialState = {
  showCalendar: false,
  requireCalendar: true,
  updated: false,
};
let handleState = {}
const handleUpdate = (handleState) => {
  return initialState.showCalendar !== handleState.showCalendar  || initialState.requireCalendar !== handleState.requireCalendar
}
function PositionsReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      handleState = { ...state, showCalendar: !state.showCalendar}
      return {...handleState, updated: handleUpdate(handleState)};
    case 'TOGGLE_REQUIRE':
      handleState = { ...state, requireCalendar: !state.requireCalendar}
      return {...handleState, updated: handleUpdate(handleState)};
    default:
      return state;
  }
}

export default PositionsReducer;
