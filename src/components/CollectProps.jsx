import React from 'react';

const CollectProps = ({ data, personSetter }) => {

    const reduceData = data.reduce((a, b) => a + b)

    const newPerson = {
        name: 'Jane',
        age: '25',
    }

    const clickHandler = () => {
        personSetter(newPerson)
    }


    return (
        <>
            <h2>Initial data value: {data.toString()}</h2>
            <h2>Reduced data value: {reduceData}</h2>
            <button onClick={clickHandler}>Change person</button>
        </>
    );
};

export default CollectProps;