import { getCompleteSpeech } from './functions.js';

export class Animal {
    constructor(name, speech, sound) {
        this.name = name;
        this.speech = speech;
        this.sound = sound;
    }

    speak() {
        let s = getCompleteSpeech(this.speech, this.sound);
        alert(s);
    }

    getName() {
        return this.name;
    }
}