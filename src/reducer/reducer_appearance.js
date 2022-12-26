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
        options: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((e, i) => ({ value: i, label: e })),
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
    updated: 0,
};
function AppearanceReducer(state = optionsDefault, action) {
    state = { ...state, updated: optionsDefault === state };
    switch (action.type) {
        case 'CHOOSE_LAYOUT':
            return { ...state, layout: { ...state.layout, value: action.payload }};

        case 'CHOOSE_CALENDAR':
            return { ...state, calendar: { ...state.calendar, value: action.payload }};

        case 'CHOOSE_LANGUAGE':
            return { ...state, language: { ...state.language, value: action.payload }};

        case 'CHOOSE_FIRSTDAY':
            return { ...state, firstday: { ...state.firstday, value: action.payload }};

        case 'CHOOSE_DATEFORMAT':
            return { ...state, dateFromat: { ...state.dateFromat, value: action.payload }};

        case 'CHOOSE_THEMECOLOR':
            return { ...state, themeColor: { ...state.themeColor, value: action.payload }};

        case 'CHOOSE_TITLECOLOR':
            return { ...state, titleColor: { ...state.titleColor, value: action.payload }};

        case 'CHOOSE_MESSAGECOLOR':
            return { ...state, messageColor: { ...state.messageColor, value: action.payload }};

        default:
            return state;
    }
}

export default AppearanceReducer;
