import React from 'react';
import './App.css';
import Char from "./components/Char";
import Enemy from "./components/Enemy";
import BattleHistory from "./components/Battle";
import char from "./store/char";
import enemy from "./store/enemy";
import battle from "./store/battle";
import {observer} from "mobx-react-lite";

const App = observer(() => {

    const checkBattleStatus = () => {
        if(char.energy <= 0 || enemy.energy <= 0){
            battle.write(char.energy > enemy.energy ? char.name : enemy.name);
            restart();
        }
    }

    const getBattle = () => {
        char.hit();
        checkBattleStatus();
    }

    const restart = () => {
        char.initial();
        enemy.initial();
    }

    const clean = () => {
        restart();
        battle.initial();
    }

    return (
    <div className="App">
        <h1>EPIC BATTLE</h1>
        <div className={'arena'}>
            <Char />
            <div className={'battle'}>
                <button onClick={getBattle}>Hit</button>
                <button onClick={()=> char.feed()}>Feed</button>
                <button onClick={clean}>Clean</button>
            </div>
            <Enemy />
        </div>
        <BattleHistory />
    </div>
    );
})

export default App;
