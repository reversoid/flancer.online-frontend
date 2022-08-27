import { createReducer, on } from '@ngrx/store';
import { switchRole } from './role.actions';

export const enum IRole {
  performer = 1,
  client,
}

export interface RoleState {
  role: IRole;
}

const initalState: RoleState = {
  role: IRole.performer,
};

export const roleReducer = createReducer(
  initalState,
  on(switchRole, function (state, { to }) {
    return { ...state, role: to };
  }),
);
