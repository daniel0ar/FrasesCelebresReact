import React, { Component } from 'react';
import Escritor from './escritor'
import Frase from './frase';

class Escritores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            escritores: [],
            frases: [],
        };
    }

    componentDidMount() {
        fetch('https://dataserverdaw.herokuapp.com/escritores')
            .then(result => {
                result.json().then(json => this.setState({ escritores: json['escritores'] }))
            }
            );

        fetch('https://dataserverdaw.herokuapp.com/escritores/frases')
            .then(result => {
                result.json().then(json => this.setState({ frases: json['frases'] }))
            }
            );

    }

    render() {

        this.state.escritores.map((escritor, i) => (
            /*
            TRATANDO DE UNIR LAS FRASES CON SUS ESCRITORES
            this.state.frases.map(frase => (
                if (frase['id_autor'] == escritor['id'])
                    escritor['frase'] = this.state.frases.(escritor['id'])

            ))*/
            escritor['frase'] = "Frase escritor" + this.state.frases[i]
            ))
        return (
            <div id="tablaEscritores" className="container">
                {this.state.escritores.map(escritor => (
                    <Escritor key={escritor.id} nombre={escritor.nombre} id={escritor.id} frase={escritor.frase}></Escritor>
                ))}
                {this.state.frases.map(frase => (
                    <Frase frasetexto={frase.texto} idautor={frase.id_autor}></Frase>
                ))}
            </div>
        )
    }
}

export default Escritores;