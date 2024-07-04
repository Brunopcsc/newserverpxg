import { GiUpgrade } from 'react-icons/gi'
import './style.css' // Opcional: para estilos personalizados

const EmDesenvolvimentoPage = () => {
    return (
        <div className="developmentContainer">
            <h1>Conteúdo em Desenvolvimento</h1>
            <div className="developmentContent">
                <p>
                    Nós estamos trabalhando duro para trazer novidades em breve!
                </p>
                <GiUpgrade className="developmentIcon" />
            </div>
        </div>
    )
}

export default EmDesenvolvimentoPage
