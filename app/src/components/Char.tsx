import React, {useEffect} from 'react';
import charPNG from '../images/char.png';
import char from '../store/char';
import {observer} from "mobx-react-lite";

const Char = observer(() => {
    const energy = char.energy;

    useEffect(() => {console.log('Component did update')}, []);

    let health = energy > 80 ? 'green'
        : energy > 30 ? 'orange'
            : 'red';

    return (
        <div>
            <input value={char.name} onChange={(event) => char.setName(event.target.value)} />
            <img src={charPNG} alt={char.name} style={{width: '100px'}} />
            <div style={{marginBottom: '8px'}}>Damage: {char.damage}</div>
            <div style={{background: `linear-gradient(to right, ${health} ${energy}%, white ${energy}%)`}}>{energy}%</div>
        </div>
    );
});

export default Char;