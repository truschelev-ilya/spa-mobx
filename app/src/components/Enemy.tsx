import React, {useEffect} from 'react';
import enemyPNG from "../images/enemy.png";
import enemy from "../store/enemy";
import {observer} from "mobx-react-lite";

const Enemy = observer(() => {
    const energy = enemy.energy;

    useEffect(() => {console.log('Component did update')}, []);

    let health = energy > 80 ? 'green'
        : energy > 30 ? 'orange'
            : 'red';

    return (
        <div>
            <input value={enemy.name} onChange={(event) => enemy.setName(event.target.value)} />
            <img src={enemyPNG} alt={enemy.name} style={{width: '100px'}} />
            <div style={{marginBottom: '8px'}}>Damage: {enemy.damage}</div>
            <div style={{background: `linear-gradient(to right, ${health} ${energy}%, white ${energy}%)`}}>{energy}%</div>
        </div>
    );
});

export default Enemy;