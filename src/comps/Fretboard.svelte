<!-- @format -->
<script lang="ts">
  import String from "./String.svelte";

  export let length = 12;
</script>

<div class="border-l border-t border-b rounded-md shadow-xl shadow-slate-200">
  <String firstNote="{'E'}" length="{length}" stringNumber="{5}" />
  <String firstNote="{'B'}" length="{length}" stringNumber="{4}" />
  <String firstNote="{'G'}" length="{length}" stringNumber="{3}" />
  <String firstNote="{'D'}" length="{length}" stringNumber="{2}" />
  <String firstNote="{'A'}" length="{length}" stringNumber="{1}" />
  <String firstNote="{'E'}" length="{length}" stringNumber="{0}" />
</div>
