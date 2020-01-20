import React from 'react';
import './Image.css';

function Image(props) {
    return (
        <img 
            className="image-item" 
            onClick={props.chooseImage} 
            src={props.source}
            alt="Game Choice"
        />
    )
}

export default Image;