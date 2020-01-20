import React from 'react';
import './Image.css';

class Image extends React.Component {
    render() {
        return (
            <img 
                className="image-item" 
                onClick={() => this.props.select} 
                src={this.props.source}
                alt="Game Choice"
            />
        )
    }
}

export default Image;