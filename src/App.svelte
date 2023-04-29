<!-- @format -->
<script lang="ts">
  import Fretboard from "./comps/Fretboard.svelte";
  import Icon from "./comps/Icon.svelte";
  import { currentNote, loading } from "./store";
  import { showNotes } from "./store";

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

<div class=" bg-slate-100 min-h-screen">
  <main>
    {#if loadingValue}
      <div class="p-24">
        <p class="font-bold">Loading guitar sounds...</p>
        <p>If this takes more than 10 seconds try reloading the page</p>
      </div>
    {:else}
      <div class="p-2 flex justify-end">
        <button
          on:click="{() => (showOptions = !showOptions)}"
          class="bg-gradient-to-b from-white to-slate-50 font-semibold text-slate-600 text-sm px-4 py-1.5 rounded-md border-[0.5px] border-slate-300 shadow-sm"
          >Settings</button
        >
      </div>
      <div class="flex flex-col items-center gap-8 pt-24">
        <h1
          class="text-4xl bg-gradient-to-b from-slate-700 to-black font-bold w-24 h-24 rounded-3xl shadow-sm flex justify-center items-center text-slate-100 border-[0.5px]"
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
            <div
              class="flex items-center gap-2 hover:bg-slate-50 mt-2 rounded-md"
            >
              <input
                id="showNotes"
                name="showNotes"
                class="w-5 h-5"
                type="checkbox"
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
        <Fretboard length="{length}" />
      </div>
    {/if}
  </main>

  <footer class="flex justify-center h-40 mt-32 items-end">
    <a
      href="https://twitter.com/jordienr"
      target="_blank"
      class=" text-blue-600 font-semibold bg-blue-100 flex gap-2 p-1 px-3 rounded-md border border-blue-300"
    >
      @jordienr
    </a>
  </footer>
</div>

<style>
</style>
