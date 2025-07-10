import './App.css'
import logoImg from './assets/logo.png'
function App() {


  return (
    <>
      <div>
        <main className="container">

          <img className="logo" src={logoImg} alt="Logo da calculadora" />
          <h1 className='tittle'>Qual é a melhor opção: </h1>

          <form className="form">

              <label>Alcool( preço por litro) </label>
              <input className="input" type="number" placeholder="4,90" min="1" step="0.01" required/>
              
              <label>Gasolina( preço por litro) </label>
              <input className="input" type="number" placeholder="4,90" min="1" step="0.01" required/>
              
              <button type='submit'>Calcular</button>
          </form>

        </main>

      </div>

    </>
  )
}

export default App
