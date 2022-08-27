import { createAction, props } from '@ngrx/store';
import { IRole } from './role.reducer';

export const switchRole = createAction(
  '[Role Component] Switch Role',
  props<{ to: IRole }>(),
);
