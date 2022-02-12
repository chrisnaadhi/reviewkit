<script context="module">
  export function load({ error }) {
    return {
      props: { message: error.message },
    };
  }
</script>

<script>
  export let message;
</script>

<div class="error">
  <h2>Ooopps...</h2>
  <p>{message}</p>
  <div class="button">
    <a href="/guides">View All Guides</a>
    <span>or</span>
    <a href="/">Back Home</a>
  </div>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }

  .button {
    display: block;
  }
</style>
