const initialState = {
    showCalendar: false,
    requireCalendar: true,
    updated: 0,
  };
  
  function PositionsReducer(state = initialState, action) {
    state = { ...state, updated: initialState === state };
    switch(action.type) {
      case 'TOGGLE_SHOW':
        return { ...state, showCalendar: !state.showCalendar};
      case 'TOGGLE_REQUIRE':
        return { ...state, requireCalendar: !state.requireCalendar};
      default:
        return state;
    }
  }
  
  export default PositionsReducer;
  