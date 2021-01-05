import React from 'react';
import './CardSkills.css'

function CardSkills(props) {
    return ( <div className="pai-de-todos">
        <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
    </div>

    )
}

export default CardSkills;