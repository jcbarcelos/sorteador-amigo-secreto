import './Cabecalho.css'
const participante = require("../../assets/images/participante.png") as string;
const logo = require("../../assets/images/logo.png") as string;
const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <img className='imagem-logo' src={logo} alt="Logo do Sorteador" />
            <img className='participante' src={participante} alt="Participante com um presente na mão" />
        </header>
    )
}

export default Cabecalho