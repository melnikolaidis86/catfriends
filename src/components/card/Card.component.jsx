import React from 'react';

const Card = ({ robot }) => {
    const { id, name, email } = robot;
    return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
        <img src={`https://robohash.org/${ id }?200x200&set=set4`} alt='Robot friend' />
        <div>
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    </div>
)};

export default Card;
