import React, { Component } from 'react';

class Frase extends Component {
    render() {
        return (
            <div className="collapse" id={"collapse" + this.props.idautor}>
                <div className="card card-body">
                    {this.props.frasetexto}
                </div>
            </div>
        )
    }
}

export default Frase;