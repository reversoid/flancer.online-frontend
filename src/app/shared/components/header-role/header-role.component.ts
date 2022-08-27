import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { switchRole } from '../../data/NgRx/role/role.actions';
import { IRole } from '../../data/NgRx/role/role.reducer';
import { selectRole } from '../../data/NgRx/role/role.selectors';

const ROLE_NAMES = new Map([
  [IRole.client, 'заказчик'],
  [IRole.performer, 'исполнитель'],
]);

@Component({
  selector: 'app-header-role',
  templateUrl: './header-role.component.html',
  styleUrls: ['./header-role.component.scss'],
})
export class HeaderRoleComponent implements OnInit {
  constructor(private readonly store: Store) {}

  private role$!: Observable<IRole>;

  ngOnInit(): void {
    this.role$ = this.store.select(selectRole);
  }

  public changeRole(nowIsPerformer: boolean) {
    const to = nowIsPerformer ? IRole.performer : IRole.client;
    this.store.dispatch(switchRole({ to }));
  }

  get roleName(): Observable<string> {
    return this.role$.pipe(map((role) => ROLE_NAMES.get(role)!));
  }

  get isChecked(): Observable<boolean> {
    return this.role$.pipe(map((role) => role === IRole.performer));
  }
}
