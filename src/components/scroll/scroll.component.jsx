import React from 'react';

const styles = {
    overflowY: 'scroll',
    height: '800px',
    border: '1px solid black'
};

const Scroll = props => (
    <div style={ styles }>
        { props.children }
    </div>
);

export default Scroll;
