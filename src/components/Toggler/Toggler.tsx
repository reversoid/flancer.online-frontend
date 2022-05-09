import { Roles } from 'components/HeaderRole/Role'
import 'components/Toggler/styles.scss'

export default function Toggler({currentRole, onChange}:{currentRole: Roles, onChange: Function}) {
    return (
        <label className="switch">
            <input type="checkbox"
                defaultChecked={currentRole === Roles.performer}
                onChange={()=>onChange()}
            />
            <span className="slider round"></span>
        </label>
    )
}
