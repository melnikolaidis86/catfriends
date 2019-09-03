import React from 'react';

import Card from "../card/Card.component";

const CardList = ({ robots }) => (
    <div>
        {
            robots.map(robot => {
               return (
                    <Card key={robot.id} robot={robot} />
               )
            })
        }
    </div>
);

export default CardList;
