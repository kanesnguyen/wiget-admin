const optionsDefault = {
    title: {
        value: 'Select a delivery date',
        name: "Title",
        action: "UPDATE_TITLE",
        type: 'delivery'
    },
    dateLabel: {
        value: 'Delivery Date',
        name: "Delivery date label",
        action: "UPDATE_DATE_LABEL",
        type: 'delivery'
    },
    dateTitle: {
        value: 'Delivery Title',
        name: "Delivery date title",
        action: "UPDATE_DATE_TITLE",
        type: 'delivery'
    },
    timeTitle: {
        value: 'Delivery Time',
        name: "Delivery time title",
        action: "UPDATE_TIME_TITLE",
        type: 'delivery'
    },
    messageText: {
        value: 'Kanes Nguyen',
        name: "Required message text",
        action: "UPDATE_MESSAGE_TEXT",
        type: 'delivery'
    },
    storePickupLabel: {
        value: 'Store Pickup',
        name: "Store pickup label",
        action: "UPDATE_STORE_PICKUP_LABEL",
        type: 'storepickup'
    },
    messageTextPickup: {
        value: 'Choose the storage to pickup your product(s)',
        name: "Message text to require buyers to choose a pickup location",
        action: "UPDATE_MESSAGE_TEXT_PICKUP",
        type: 'storepickup'
    },
    storePickupDateTitle: {
        value: 'Delivery Date',
        name: "Store pickup date title",
        action: "UPDATE_STORE_PICKUP_DATE",
        type: 'storepickup'
    },
    storePickupTimeTitle: {
        value: 'Pickup location',
        name: "Store pickup time title",
        action: "UPDATE_STORE_PICKUP_TIME",
        type: 'storepickup'
    },
    requiredMessageText: {
        value: 'Please select pickup date before checkout',
        name: "Required Message Text",
        action: "UPDATE_STORE_PICKUP_MESSAGE",
        type: 'storepickup'
    },
    updated: false,
};
let handleState = {}
const handleUpdate = (handleState) => {
    return  optionsDefault.title !== handleState.title  || 
            optionsDefault.dateLabel !== handleState.dateLabel ||
            optionsDefault.dateTitle !== handleState.dateTitle ||
            optionsDefault.timeTitle !== handleState.timeTitle ||
            optionsDefault.messageText !== handleState.messageText ||
            optionsDefault.messageTextPickup !== handleState.messageTextPickup ||
            optionsDefault.storePickupDateTitle !== handleState.storePickupDateTitle ||
            optionsDefault.storePickupTimeTitle !== handleState.messageTextPickup ||
            optionsDefault.requiredMessageText !== handleState.requiredMessageText
}
function TextReducer(state = optionsDefault, action) {
    switch (action.type) {
        case 'UPDATE_TITLE':
            handleState = { ...state, title: { ...state.title, value: action.payload }}
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_DATE_LABEL':
            handleState = { ...state, dateLabel: { ...state.dateLabel, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_DATE_TITLE':
            handleState = { ...state, dateTitle: { ...state.dateTitle, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_TIME_TITLE':
            handleState = { ...state, timeTitle: { ...state.timeTitle, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_MESSAGE_TEXT':
            handleState = { ...state, messageText: { ...state.messageText, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_STORE_PICKUP_LABEL':
            handleState = { ...state, messageTextPickup: { ...state.messageTextPickup, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_STORE_PICKUP_DATE':
            handleState = { ...state, storePickupDateTitle: { ...state.storePickupDateTitle, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_STORE_PICKUP_TIME':
            handleState = { ...state, storePickupTimeTitle: { ...state.storePickupTimeTitle, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_STORE_PICKUP_MESSAGE':
            handleState = { ...state, requiredMessageText: { ...state.requiredMessageText, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        default:
            return state;
    }
}

export default TextReducer;
