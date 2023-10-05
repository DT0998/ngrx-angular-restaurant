import { User } from 'src/app/auth/user.model';

export interface State {
  user: User;
}
const initialState = {
  user: null,
};
export function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
