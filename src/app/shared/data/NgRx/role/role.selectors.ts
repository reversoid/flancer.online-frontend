import { createSelector } from '@ngrx/store';
import { RoleState } from './role.reducer';

export const selectRole = createSelector(
  (state: object) => (<{ role: RoleState }>state).role,
  (role) => role.role,
);
