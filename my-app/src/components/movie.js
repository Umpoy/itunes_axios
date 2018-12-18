import React from 'react';

const movieStyling = {
    display: 'inline-block',
    margin: '0 0 1em',
    width: '100%',
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'white'
}

export default props => {
    const { info } = props;
    console.log('info: ', info);
    return (
        <div style={movieStyling} className="text-center">
            <h3 >{info['im:name'].label}</h3>
            <img src={info['im:image'][2].label} alt={info['im:name'].label} />
            <p>{info.summary.label}</p>
            <a href={info.link[1].attributes.href} target="_blank" rel="noopener noreferrer">View iTunes Preview</a>
            <p className="footer"><small>{info.rights.label}</small></p>
        </div>
    );
}