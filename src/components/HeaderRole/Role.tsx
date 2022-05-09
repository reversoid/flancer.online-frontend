import 'components/HeaderRole/styles.scss'
import Toggler from 'components/Toggler/Toggler'
import { useState } from 'react'

export enum Roles {
    performer,
    client
}

function initRoles(): Map<Roles, string>{
    return new Map([
        [Roles.client, 'заказчик'],
        [Roles.performer, 'исполнитель']
    ])
}

function changeRole(role: Roles, setRole: Function) {
    if (role === Roles.client)
        setRole(Roles.performer)
    else
        setRole(Roles.client)
}


export default function Role() {
    const roles = initRoles()
    // TODO by default role is client, need to be saved in db
    // TODO make redux state of role so that other components can access them
    const [role, setRole] = useState(Roles.client)

    return (
        <div className="role">
            <span className="role__text">Вы {roles.get(role)}</span>
            <div className="role__toggler">
                <Toggler currentRole={role} onChange={()=>changeRole(role, setRole)}/>
            </div>
        </div>
    )
}
