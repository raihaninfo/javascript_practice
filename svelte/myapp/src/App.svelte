<script>
  import Counter from "./components/Counter.svelte";
  import FormCom from "./components/FormCom.svelte";

  let name = "world";
</script>

<main>
  <h1>Hello {name}!</h1>
  <Counter />
  <FormCom />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
