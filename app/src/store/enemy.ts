import {makeAutoObservable} from "mobx";

class Enemy {
    name = 'Enemy';
    energy = 100;
    damage = 15;

    constructor() {
        makeAutoObservable(this);
    }

    initial() {
        this.energy = 100;
    }

    setName(name:string) {
        this.name = name;
    }

    hit() {
        this.energy = this.energy - Math.round(Math.random()*10);
    }

    getHit(damage:number) {
        this.energy = this.energy - damage;
    }
}

export default new Enemy();