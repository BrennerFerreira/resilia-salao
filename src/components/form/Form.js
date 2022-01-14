import { useState } from "react"
import { TextInput } from "../input/input"
import { MainButton } from "../button/MainButton"

function Form({onSubmit}) {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  function cadastrarCliente(e) {
    e.preventDefault() 
   onSubmit (name, email)
  }

  return (
    <div>
      <h1>Cadastro de cliente:</h1>
      <form>
       
    <TextInput id="name" label="Nome" value={name} onChange={setName} />
    <TextInput id="email" label="E-mail" value={email} onChange={setEmail} />
    <MainButton label= "Enviar" onClick={cadastrarCliente} disabled={!(name && email)}/>
      
      </form>
    </div>
  )
}

export default Form
