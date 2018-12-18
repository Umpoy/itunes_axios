import React from 'react';

const movieStyling = {
    display: 'inline-block',
    margin: '0 0 1em',
    width: '100%'
}

export default props => {
    const { info } = props;
    console.log('info: ', info.link[1].attributes.href);
    return (
        <div style={movieStyling} className="text-center">
            <h3 >{info['im:name'].label}</h3>
            <img src={info['im:image'][2].label} alt={info['im:name'].label} />
            <p>{info.summary.label}</p>
            <a href={info.link[1].attributes.href} target="_blank">Preview</a>
        </div>
    );
}