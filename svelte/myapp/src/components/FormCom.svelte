<script>
  let name = "";
  let email = "";
  let submit = () => {
    console.log(name, email);
  };

</script>

<div>
    <!-- preventDefault -->
  <form on:submit|preventDefault={submit}>
    <input bind:value={name} type="text" placeholder="Enter your name" />
    <input bind:value={email} type="text" placeholder="Enter your email" />
    <input type="submit" value="submit" />
  </form>
</div>
