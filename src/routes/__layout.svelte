<script>
  import Title from "$lib/components/title.svelte";
  import "../styles/global.css";
</script>

<header>
  <Title title="ReviewKit Guides" />
</header>
<main>
  <slot />
</main>
<footer>
  <p>Copyright &copy; 2022 | ReviewKit Guides</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }

  main {
    max-width: 960px;
    margin: 20px auto;
  }

  footer {
    text-align: center;
  }
</style>
