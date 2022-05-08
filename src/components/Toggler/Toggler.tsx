import 'components/Toggler/styles.scss'

export default function Toggler() {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}
