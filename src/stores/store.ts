import { writable, get } from "svelte/store";
import type { Note } from "../types/Note";
import { notes } from '../types/Note';
import Soundfont from 'soundfont-player';
import { addNotif } from "./notifs";

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

type GuitarString = 0 | 1 | 2 | 3 | 4 | 5;

function getNoteWithOctave(string: number, fret: number){
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const open = [4, 9, 14, 19, 23, 28];

    const index = open[string] + fret;

    const note = notes[index % 12];
    const octave = Math.floor(index / 12) + 2;

    const res = `${note}${octave}`;

    console.log(res)

    return res;
}

function getRandomNote(): Note {
  return notes[Math.floor(Math.random() * notes.length)];
}

export function checkAnswer(note: Note, string: GuitarString, fretNumber: number) {
    const cn = get(currentNote);

    instrument.play(getNoteWithOctave(string, fretNumber));

    if (note === cn) {
        addNotif({
            message: "Correct!",
            type: "success"
        })
        currentNote.set(getRandomNote());
    } else {
        addNotif({
            message: "Oops, try again",
            type: "error"
        })
    }
}