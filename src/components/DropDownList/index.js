import './DropDownList.css'

const DropDownList = (props) => {
    return (
        <div className="dropdownlist">
            <label>{props.label}</label>
            <select onChange={e => props.whenChanged(e.target.value)} required={props.required} value={props.value}>
                <option value=''></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownList