// Define um componente funcional React chamado equipamentoCard que recebe
// uma propriedade chamada "equipamento"

import "../styles/visual.css"

const EquipamentoCard = ({equipamento}) =>{

    const corStatus = {
        "Em manutenção": "orange",
        "Inativo" : "red",
        "Ativo": "green"
    };

    // Retornar um card estilizado com as informações do equipamento
    return(
        <div className="EquipamentoCard">
            <img src={equipamento.urlImage}></img>
            <h3>{equipamento.equipamento}</h3>
            <p>
                Status: 

                <strong style={{color: corStatus[equipamento.status]}}>
                     {equipamento.status}
                </strong>
            </p>

            <p>Função: {equipamento.funcao}</p>
        </div>
    );
}

//exporta o componente para ser usado em outros arquivos
export default EquipamentoCard;