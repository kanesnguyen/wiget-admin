const initialState = {
    showCalendar: false,
    requireCalendar: true,
  };
  
  function PositionsReducer(state = initialState, action) {
    switch(action.type) {
      case 'TOGGLE_SHOW':
        return { ...state, showCalendar: !state.showCalendar };
      case 'TOGGLE_REQUIRE':
        return { ...state, requireCalendar: !state.requireCalendar };
      default:
        return state;
    }
  }
  
  export default PositionsReducer;
  