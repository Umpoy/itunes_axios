import React from 'react';

const movieStyling = {
    display: 'inline-block',
    margin: '0 0 1em',
    width: '100%'
}

export default props => {
    const { info } = props;
    console.log('info: ', info);
    return (
        <div stlye={movieStyling}>
            <h3>{info['im:name'].label}</h3>
            <img src={info['im:image'][2].label} alt={info['im:name'].label} />
            <p>{info.summary.label}</p>
        </div>
    );
}