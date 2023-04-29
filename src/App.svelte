<!-- @format -->
<script lang="ts">
  import Fretboard from "./comps/Fretboard.svelte";
  import Notifs from "./comps/Notifs.svelte";
  import { currentNote, loading } from "./stores/store";
  import { showNotes } from "./stores/store";

  let currentNoteValue;
  let loadingValue = true;
  let length = 12;
  let showOptions = false;

  currentNote.subscribe((value) => {
    currentNoteValue = value;
  });
  loading.subscribe((value) => {
    loadingValue = value;
  });
</script>

<div class=" bg-slate-100 min-h-screen flex flex-col justify-between">
  <div class="absolute">
    <Notifs />
  </div>

  {#if loadingValue}
    <div class="p-4">
      <p class="font-bold">Loading guitar sounds...</p>
      <p>If this takes more than 10 seconds try reloading the page</p>
    </div>
  {:else}
    <div class="p-2 flex justify-end">
      <button
        on:click="{() => (showOptions = !showOptions)}"
        class=" font-semibold text-slate-600 h-8 w-8 text-2xl rounded-full"
        >⚙️</button
      >
    </div>

    <h1
      class="text-2xl bg-gradient-to-b from-slate-700 to-black font-bold w-16 h-16 rounded-full mx-auto shadow-sm flex justify-center items-center text-slate-100"
    >
      {currentNoteValue}
    </h1>

    {#if showOptions}
      <div
        class="fixed right-2 top-2 bg-white shadow-sm max-w-[200px] rounded-md border-[0.5px] mx-auto w-full z-20 p-4"
      >
        <div class="flex gap-2">
          <label for="frets"
            >Frets
            <span class="bg-white px-2 rounded-md border-[0.5px] shadow-sm"
              >{length}</span
            >
            <input
              class="w-full"
              type="range"
              min="2"
              max="12"
              bind:value="{length}"
            />
          </label>
        </div>
        <div class="flex items-center gap-2 hover:bg-slate-50 mt-2 rounded-md">
          <input
            id="showNotes"
            name="showNotes"
            class="w-5 h-5"
            type="checkbox"
            checked="{false}"
            on:change="{() => showNotes.update((val) => !val)}"
          />
          <label for="showNotes">Show notes </label>
        </div>
        <button
          on:click="{() => (showOptions = false)}"
          class="w-full border p-1 rounded-md mt-6">Close</button
        >
      </div>
    {/if}
    <div class="mt-8">
      <Fretboard length="{length}" />
    </div>
  {/if}

  <footer class="flex p-4 justify-end items-end gap-4 text-blue-600 underline">
    <a href="https://github.com/jordienr/frets" target="_blank"> Code </a>
    <a href="https://twitter.com/jordienr" target="_blank"> @jordienr </a>
    <a href="https://jordienric.com">jordienric.com</a>
  </footer>
</div>

<style>
</style>
