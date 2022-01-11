import React from 'react';
import battle from '../store/battle';
import {observer} from "mobx-react-lite";

const Battle = observer(() => {
    return (
        <table className={'history'}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
            {battle.history.map((battle:any, index:number) =>
                <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{battle.winner}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
});

export default Battle;