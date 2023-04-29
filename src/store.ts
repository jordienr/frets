import { writable, get } from "svelte/store";
import type { Note } from "./types/Note";
import { notes } from './types/Note';
import Soundfont from 'soundfont-player';

export const currentNote = writable<Note>("A");
export const showNotes = writable<boolean>(false);
export const totalFrets = writable<number>(12);
export const audioContext = new AudioContext();
export const loading = writable<boolean>(true);
export let instrument = null;

Soundfont.instrument(audioContext, 'acoustic_guitar_nylon').then(guitar => {
    console.log(guitar)
    instrument = guitar;
    loading.set(false);
});

type GuitarString = 1 | 2 | 3 | 4 | 5 | 6;

function getNoteWithOctave(note: Note, guitarString: GuitarString): string {
    const octavesFromString= {
        1: 6,
        2: 6,
        3: 5,
        4: 4,
        5: 3,
        6: 2
    }
    const n = `${note}${octavesFromString[guitarString]}`
    console.log(n)

    return n
}

function getRandomNote(): Note {
  return notes[Math.floor(Math.random() * notes.length)];
}

export function checkAnswer(note: Note, string: GuitarString) {
    const cn = get(currentNote);

    instrument.play(getNoteWithOctave(note, string));

    if (note === cn) {
        currentNote.set(getRandomNote());
    } else {
    }
}