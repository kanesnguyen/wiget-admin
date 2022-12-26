import { CHOOSE_CALENDAR, CHOOSE_DATEFORMAT, CHOOSE_FIRSTDAY, CHOOSE_LANGUAGE, CHOOSE_LAYOUT } from "../constants/actionTypes/appearance";
export function chooseLayout(value) {
    
    return {
      type: CHOOSE_LAYOUT,
      payload: value
    };
}

export function chooseCalendar(value) {
    return {
      type: CHOOSE_CALENDAR,
      payload: value
    };
}

export function chooseLanguage(value) {
    return {
      type: CHOOSE_LANGUAGE,
      payload: value
    };
}

export function chooseFirstDay(value) {
    return {
      type: CHOOSE_FIRSTDAY,
      payload: value
    };
}

export function chooseDateFormat(value) {
    return {
      type: CHOOSE_DATEFORMAT,
      payload: value
    };
}