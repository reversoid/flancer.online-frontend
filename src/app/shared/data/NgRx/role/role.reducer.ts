import { createReducer, on } from '@ngrx/store';
import { switchRole } from './role.actions';

export const enum IRole {
  performer = 1,
  client,
}

const initalState = IRole.performer;

export const roleReducer = createReducer(
  initalState,
  on(switchRole, function (state) {
    if (state === IRole.client) return IRole.performer;
    return IRole.client;
  }),
);
