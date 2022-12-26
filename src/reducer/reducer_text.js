const optionsDefault = {
    title: {
        value: 'Select a delivery date',
        name: "Title",
        action: "UPDATE_TITLE",
    },
    dateLabel: {
        value: 'Delivery Date',
        name: "Delivery date label",
        action: "UPDATE_DATELABEL",
    },
    dateTitle: {
        value: 'Delivery Title',
        name: "Delivery date title",
        action: "UPDATE_DATETITLE",
    },
    timeTitle: {
        value: 'Delivery Time',
        name: "Delivery time title",
        action: "UPDATE_TIMETITLE",
    },
    messageText: {
        value: 'Kanes Nguyen',
        name: "Required message text",
        action: "UPDATE_MESSAGETEXT",
    },
};
function TextReducer(state = optionsDefault, action) {
    switch (action.type) {
        case 'UPDATE_TITLE':
            return { ...state, layout: { ...state.title, value: action.payload } };
            
        case 'UPDATE_DATELABEL':
            return { ...state, dateLabel: { ...state.dateLabel, value: action.payload } };
            
        case 'UPDATE_DATETITLE':
            return { ...state, dateTitle: { ...state.dateTitle, value: action.payload } };
            
        case 'UPDATE_TIMETITLE':
            return { ...state, timeTitle: { ...state.timeTitle, value: action.payload } };
            
        case 'UPDATE_MESSAGETEXT':
            return { ...state, messageText: { ...state.messageText, value: action.payload } };

        default:
            return state;
    }
}

export default TextReducer;
