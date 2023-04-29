<!-- @format -->
<script lang="ts">
  import { checkAnswer } from "../stores/store";
  import type { Note } from "../types/Note";
  import { showNotes } from "../stores/store";

  export let note: Note;
  export let index: number;
  export let stringNumber: 0 | 1 | 2 | 3 | 4 | 5;
  let showNoteVal = false;

  showNotes.subscribe((val) => {
    showNoteVal = val;
  });

  function onClick() {
    checkAnswer(note, stringNumber, index);
  }
</script>

<button
  on:click="{onClick}"
  class="{index === 0
    ? 'bg-gray-700 w-10 text-white'
    : 'bg-white' +
      ' fret relative py-2 w-24 hover:bg-blue-50 transition-all text-sm border-r'}"
>
  <span
    class="{(showNoteVal ? 'opacity-100 ' : 'opacity-0 ') +
      'z-10 bg-gradient-to-b from-slate-700 to-slate-900 text-slate-200 font-mono relative rounded-full w-6 h-6 mx-auto flex items-center justify-center text-xs'}"
  >
    {note}
  </span>
</button>

<style>
  .fret::before {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    top: 48%;
    left: 0;
    background: theme("colors.slate.700");
    position: absolute;
  }
</style>
