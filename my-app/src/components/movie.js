import React from 'react';

export default props => {
    const { info } = props;
    console.log('info: ', info);
    return (
        <div>
            <h3>{info['im:name'].label}</h3>
            <img src={info['im:image'][2].label} alt={info['im:name'].label} />
        </div>
    );
}