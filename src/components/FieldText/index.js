import './FieldText.css'

const FieldText = (props) => {
    
    const modifiedPlaceholder = `${props.placeholder}...`


    const whenTyped = (e) => {
       props.whenChanged(e.target.value)
    }

    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} placeholder={modifiedPlaceholder} required={props.required} />

        </div>
    )
}

export default FieldText
