import React from 'react';
import './Game.css';
import images from '../../utils/images';
import Board from '../Board/Board';

class Game extends React.Component {

    state = {
        images: images,
        your_score: 0,
        high_score: 0
    };

    shuffleList = () => {
        console.log('You clicked me!');
        
    }

    render() {
        return (
            <div className="board">
                <Board
                    yourScore={this.state.your_score}
                    highScore={this.state.high_score}
                    imagesList={this.state.images}
                    onClick={() => this.shuffleList}
                />
            </div>
        )
    }
}

export default Game;