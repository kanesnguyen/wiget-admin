const optionsDefault = {
    title: {
        value: 'Select a delivery date',
        name: "Title",
        action: "UPDATE_TITLE",
        type: 'delivery',
        errorMessage:"This field cannot be left blank",
    },
    dateLabel: {
        value: 'Delivery Date',
        name: "Delivery date label",
        action: "UPDATE_DATE_LABEL",
        type: 'delivery',
        errorMessage:"This field cannot be left blank",
    },
    dateTitle: {
        value: 'Delivery Title',
        name: "Delivery date title",
        action: "UPDATE_DATE_TITLE",
        type: 'delivery',
        errorMessage:"This field cannot be left blank",
    },
    timeTitle: {
        value: 'Delivery Time',
        name: "Delivery time title",
        action: "UPDATE_TIME_TITLE",
        type: 'delivery',
        errorMessage:"This field cannot be left blank",
    },
    messageText: {
        value: 'Kanes Nguyen',
        name: "Required message text",
        action: "UPDATE_MESSAGE_TEXT",
        type: 'delivery',
        errorMessage:"This field cannot be left blank",
    },
    storePickupLabel: {
        value: 'Store Pickup',
        name: "Store pickup label",
        action: "UPDATE_STORE_PICKUP_LABEL",
        type: 'storepickup',
        errorMessage:"This field cannot be left blank",
    },
    messageTextPickup: {
        value: 'Choose the storage to pickup your product(s)',
        name: "Message text to require buyers to choose a pickup location",
        action: "UPDATE_MESSAGE_TEXT_PICKUP",
        type: 'storepickup',
        errorMessage:"This field cannot be left blank",
    },
    storePickupDateTitle: {
        value: 'Delivery Date',
        name: "Store pickup date title",
        action: "UPDATE_STORE_PICKUP_DATE",
        type: 'storepickup',
        errorMessage:"This field cannot be left blank",
    },
    storePickupTimeTitle: {
        value: 'Pickup location',
        name: "Store pickup time title",
        action: "UPDATE_STORE_PICKUP_TIME",
        type: 'storepickup',
        errorMessage:"This field cannot be left blank",
    },
    requiredMessageText: {
        value: 'Please select pickup date before checkout',
        name: "Required Message Text",
        action: "UPDATE_STORE_PICKUP_MESSAGE",
        type: 'storepickup',
        errorMessage:"This field cannot be left blank",
    },
    updated: false,
};
let handleState = {}
const handleUpdate = (handleState) => {
    return  optionsDefault.title.value !== handleState.title.value  || 
            optionsDefault.dateLabel.value !== handleState.dateLabel.value ||
            optionsDefault.dateTitle.value !== handleState.dateTitle.value ||
            optionsDefault.timeTitle.value !== handleState.timeTitle.value ||
            optionsDefault.messageText.value !== handleState.messageText.value ||
            optionsDefault.messageTextPickup.value !== handleState.messageTextPickup.value ||
            optionsDefault.storePickupDateTitle.value !== handleState.storePickupDateTitle.value ||
            optionsDefault.storePickupTimeTitle.value !== handleState.storePickupTimeTitle.value ||
            optionsDefault.requiredMessageText.value !== handleState.requiredMessageText.value
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
            handleState = { ...state, storePickupLabel: { ...state.storePickupLabel, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'UPDATE_MESSAGE_TEXT_PICKUP':
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
