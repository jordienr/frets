<!-- @format -->
<script lang="ts">
  import type { Note } from "../types/Note";
  import Fret from "./Fret.svelte";
  import { notes } from "../types/Note";

  export let firstNote: Note;
  export let length: number;
  export let stringNumber: 1 | 2 | 3 | 4 | 5 | 6;

  function getNoteByNumber(n: number) {
    return notes[(notes.indexOf(firstNote) + n) % notes.length];
  }
</script>

<div class="flex overflow-auto">
  {#each Array.from({ length: length + 1 }) as _, i}
    <Fret
      note="{getNoteByNumber(i)}"
      index="{i}"
      stringNumber="{stringNumber}"
    />
  {/each}
</div>
