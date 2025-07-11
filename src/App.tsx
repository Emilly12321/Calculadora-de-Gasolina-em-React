import { useState, FormEvent } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

interface InfoProps {
  tittle: string;
  gasolina: string | number;
  alcool: string | number
}


function App() {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [info, setInfo] = useState<InfoProps>()

  function calcular(evento: FormEvent) {
    evento.preventDefault(); /// para bloquer o reloding da página ao clicar em submit
    let calculo = (alcool / gasolina);

    if (calculo <= 0.7) {
      setInfo({
        tittle: "Compensa mais usar Álcool",
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool),
      })

    } else {
      setInfo({
        tittle: "Compensa mais usar Gasolina",
        gasolina: formatarMoeda(gasolina),
        alcool: formatarMoeda(alcool),
      })
    }

  }

  // Formatar o número para moeda brasileira por meio de uma função JS....
  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br", { style: "currency" , currency: "BRL"})
    return valorFormatado;
  }

  return (
    <>
      <div>
        <main className="container">

          <img className="logo" src={logoImg} alt="Logo da calculadora" />
          <h1 className='tittle'>Qual é a melhor opção: </h1>

          <form className="form" onSubmit={calcular}> {/*ao submeter / clicar em concluir, será ativado a function calcular*/}

            <label>Alcool( preço por litro) </label>
            <input className="input" type="number" placeholder="4,90" min="1" step="0.01" required value={alcool} onChange={(e) => setAlcool(Number(e.target.value))} />

            <label>Gasolina( preço por litro) </label>
            <input className="input" type="number" placeholder="4,90" min="1" step="0.01" required value={gasolina} onChange={(e) => setGasolina(Number(e.target.value))} /> {/* Number() é a conversão do dado que vem em String para número*/}

            <button type='submit' className='button' value="Calcular">Calcular</button>
          </form>

          {/* Primeiramente estou verificando se há o objeto info e se ele não é Undefined,após isso verefico  se há dados dentro dele , tudo isso sendo afirmado com o && , se houver  */}
          {info && Object.keys(info).length > 0 && (
            <section className="result">

              <h2 className="result-tittle">{info.tittle}</h2>

              <span>Álcool {info.alcool}</span>
              <span>Gasolina {info.gasolina}</span>

            </section>
          )}

            {/* Isso é feito para que só seja mostrado, apenas quando houver dados no objeto, enquando não houver... a section ficará ocultada */}



        </main>

      </div>

    </>
  )
}

export default App
