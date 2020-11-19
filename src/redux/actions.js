import { SET_USERS } from "./types";

export function actionSetUsers(users) {
  return {
    type: SET_USERS,
    payload: users,
  }
}
