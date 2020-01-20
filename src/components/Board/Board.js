import React from 'react';
import './Board.css';
import Image from '../Image/Image';

class Board extends React.Component {

    renderedImages = this.props.imagesList.map(img => {
            return (
                <Image 
                    source={img.ref}
                    select={() => this.props.onClick}
                />
            )
        })

    render() {
        return (
            <div>
                <div>
                    Click on an image below to earn points, but don't click any more than once.
                    <h3>Your Score: {this.props.yourScore} | High Score: {this.props.highScore}</h3>
                </div>
                <div className="board">
                    {this.renderedImages}
                </div>
            </div>
                
        )
    }
}

export default Board;