import React from 'react';

class Card extends React.Component {
    render() {
        if(!this.props.title || !this.props.text){
            return;
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Card;



