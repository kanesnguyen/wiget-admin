import moment from 'moment';
import data from '../data/language.json';
const optionsDefault = {
    layout: {
        value: 'default',
        options: [1, 2, 3, 4].map((_, i) => ({ value: (i + 1).toString(), label: `Layout ${i + 1}` })).concat({ value: 'default', label: "Default" }),
        name: "Layout",
        action: "CHOOSE_LAYOUT",
    },
    calendar: {
        value: 'calendar',
        options: [{ value: 'calendar', label: "Calendar" }, { value: 'datelist', label: "Date List" }],
        name: "Calendar layout",
        action: "CHOOSE_CALENDAR",
    },
    language: {
        value: 'en',
        options: data.map(e => ({value:e.code, label: e.name})),
        name: "Calendar language",
        action: "CHOOSE_LANGUAGE",
    },
    firstday: {
        value: '1',
        options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((e, i) => ({ value: i.toString(), label: e })),
        name: "First day of Calendar",
        action: "CHOOSE_FIRSTDAY",
    },
    dateFromat: {
        value: 'dd/mm/yyyy',
        options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY/MM/DD'].map(e => ({ value: e, label: moment(new Date()).format(e) })),
        name: "Date Format",
        action: "CHOOSE_DATEFORMAT",
    },
    themeColor: {
        value: {
            hue: 165,
            brightness: 1,
            saturation: 0.25,
        },
        name: "Theme color",
        action: "CHOOSE_THEMECOLOR",
    },
    titleColor: {
        value: {
            hue: 0,
            brightness: 0,
            saturation: 0,
        },
        name: "Title color",
        action: "CHOOSE_TITLECOLOR",
    },
    messageColor: {
        value: {
            hue: 0,
            brightness: 0,
            saturation: 0,
        },
        name: "Require message text color",
        action: "CHOOSE_MESSAGECOLOR",
    },
    updated: false,
};
let handleState = {}
const handleUpdate = (handleState) => {
    return  optionsDefault.layout !== handleState.layout  || 
            optionsDefault.calendar !== handleState.calendar ||
            optionsDefault.language !== handleState.language ||
            optionsDefault.firstday !== handleState.firstday ||
            optionsDefault.dateFromat !== handleState.dateFromat ||
            optionsDefault.themeColor !== handleState.themeColor ||
            optionsDefault.titleColor !== handleState.titleColor ||
            optionsDefault.messageColor !== handleState.messageColor
}
function AppearanceReducer(state = optionsDefault, action) {
    switch (action.type) {
        case 'CHOOSE_LAYOUT':
            handleState = { ...state, layout: { ...state.layout, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_CALENDAR':
            handleState = { ...state, calendar: { ...state.calendar, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_LANGUAGE':
            handleState = { ...state, language: { ...state.language, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_FIRSTDAY':
            handleState = { ...state, firstday: { ...state.firstday, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_DATEFORMAT':
            handleState = { ...state, dateFromat: { ...state.dateFromat, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_THEMECOLOR':
            handleState = { ...state, themeColor: { ...state.themeColor, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_TITLECOLOR':
            handleState = { ...state, titleColor: { ...state.titleColor, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        case 'CHOOSE_MESSAGECOLOR':
            handleState = { ...state, messageColor: { ...state.messageColor, value: action.payload }};
            return {...handleState, updated: handleUpdate(handleState)};

        default:
            return state;
    }
}

export default AppearanceReducer;
