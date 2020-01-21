import React from 'react';
import './Game.css';
import Image from '../Image/Image';
import images from '../../utils/images';

class Game extends React.Component {

    state = {
        images: images,
        selected: [],
        your_score: 0,
        high_score: 0,
        status: 'don\'t click any more than once.'
    };


    shuffleList = () => {
        let shuffle = this.state.images.sort(() => Math.random() - 0.5);
        this.setState({
            images: shuffle
        })
    }

    determineScore = (i) => {
        if (this.state.selected.includes(i.id)) {
            this.resetGame();
        } else {
            this.state.selected.push(i.id);
            this.setState({
                your_score: this.state.your_score + 1
            })  
        }
        this.shuffleList();
    }

    resetGame = () => {
        const status = document.getElementById('status');
        const board = document.getElementById('board');

        this.setState({
            images: this.state.images,
            selected: [],
            your_score: 0,
            status: 'YOU CLICKED ONE MORE THAN ONCE!'
        })

        board.classList.add('shakeup');
        status.classList.add('you-lose');
        setTimeout(function() { board.classList.remove('shakeup') }, 1000);
        this.newHighScore();
    }

    newHighScore = () => {
        if (this.state.your_score > this.state.high_score) {
            this.setState({
                high_score: this.state.your_score
            }) 
        } else {
            this.setState({
                high_score: this.state.high_score
            }) 
        }
    }

    render() {
        return (
            <div className="game">
                <div className="score">
                    Click on an image below to earn points, but <span id="status">{this.state.status}</span>
                    <h3>Your Score: {this.state.your_score} | High Score: {this.state.high_score}</h3>
                </div>
                <div id="board">
                    {this.state.images.map(img => {
                        return (
                            <Image 
                                source={img.ref}
                                chooseImage={() => this.determineScore(img)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Game;