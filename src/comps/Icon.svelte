<!-- @format -->
<script lang="ts">
  export let name: string;
  export let height: number;
  export let width: number;
</script>

<img
  src="{'/icons/' + name + '.svg'}"
  alt="{name}"
  height="{height}"
  width="{width}"
/>
