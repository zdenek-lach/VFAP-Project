import React from 'react';

const ComputerInfo = ({item}) => {


    return (
        <div className='card'>
            {item.computer.map(computer => (
                <ul>
                    <li>
                        <strong>Computer ID: </strong>{computer.id}
                    </li>
                    <li>
                        <strong>Computer name: </strong>{computer.name}
                    </li>
                    <li>
                        <strong>Available games: </strong>{computer.games}
                    </li>
                </ul>
            ))}
        </div>
    )
}
export default ComputerInfo;
