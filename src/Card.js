import React, { Component} from 'react';
import './Card.scss';

class Card extends Component{
    render(){
        return(
            <div className={`Card ${this.props.round}`} style={{backgroundColor: this.props.background}}>
                <div className='Card-content'>
                    <div>
                        <img src={this.props.icon} alt="icon"/>
                    </div>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.content}</p>

                </div>
                <div style={{color: this.props.background}}>
                    <button>Learn More</button>
                </div>
            </div>
        );
    }
}

export default Card;