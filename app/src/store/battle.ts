import {makeAutoObservable} from "mobx";

class Battle {
    history: { winner: string }[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    initial() {
        this.history = [];
    }

    write(name:string) {
        this.history.push({winner:name});
    }

}

export default new Battle();