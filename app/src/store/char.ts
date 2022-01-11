import {makeAutoObservable} from "mobx";
import enemy from "./enemy";

class Char {
    name = 'Char';
    energy = 100;
    damage = 10;

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
        this.energy = this.energy - enemy.damage;
        enemy.getHit(this.damage);
    }

    feed() {
        if(this.energy <= 90) {
            this.energy += 10;
        }else{
            this.energy = 100;
        }
    }
}

export default new Char();