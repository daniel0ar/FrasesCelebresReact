import React, { Component } from 'react';

class Escritor extends Component {
    render() {
        return (
            <div className="escritor-info">
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#collapse"+this.props.id} aria-expanded="false" aria-controls={"collapse"+this.props.id}>
                    {this.props.nombre}
                </button>
            </div>
        )
    }
}

export default Escritor;