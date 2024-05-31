import FieldText from '../FieldText'
import DropDownList from '../DropDownList'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const whenSaving = (e) => {
        e.preventDefault()
        props.employeeRegistered({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="section-form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText
                    label="Nome"
                    placeholder="Digite seu nome"
                    required={true}
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <FieldText
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required={true}
                    value={position}
                    whenChanged={ value => setPosition(value)}
                />
                <FieldText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <DropDownList
                    label="Times"
                    itens={props.teams}
                    required={true}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form