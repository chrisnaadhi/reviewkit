<script context="module">
  export async function load({ fetch, params }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = params.id;
    const res = await fetch(`/guides/${id}.json`);
    const { guide } = await res.json();

    if (res.ok) {
      return {
        props: {
          guide,
        },
      };
    }

    return {
      status: 301,
      redirect: "/guides",
    };
  }
</script>

<script>
  export let guide;
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
  <pre>Created by : {guide.userId}</pre>
  <a href="/guides"><button>Back</button></a>
</div>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.2);
  }

  pre {
    color: #c4c4c4;
    font-size: 10px;
  }

  button {
    padding: 5px 20px;
    background-color: #422d5d;
    color: #decff1;
    border: 1px solid #decff1;
    font-size: 9px;
    border-radius: 8px;
  }

  button:hover {
    background-color: #decff1;
    color: #422d5d;
    border: 1px solid transparent;
  }
</style>
