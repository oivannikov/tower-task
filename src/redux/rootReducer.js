import { SET_USERS } from "./types";

const initialState = {
  users: [],
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default: return state;
  }
}
