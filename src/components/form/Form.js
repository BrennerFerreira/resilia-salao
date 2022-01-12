function Form() {
  function cadastrarCliente(e) {
    e.preventDefault()
    console.log('Cliente cadastrado!')
  }

  return (
    <div>
      <h1>Cadastro de cliente:</h1>
      <form onSubmit={cadastrarCliente}>
        <div>
          <input type= "text" placeholder="Cliente" />
        </div>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="number" placeholder="Celular" />
        </div>
        <div>
          <input type="text" placeholder="Endereço" />
        </div>
        <div>
          <input type="text" placeholder="CPF" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
