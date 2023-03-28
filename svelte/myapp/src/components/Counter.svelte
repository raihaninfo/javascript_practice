<script>
  let num = 0;
  let increment = () => {
    num += 1;
  };
  let decrement = () => {
    if (num <= 1) {
      num = 1;
    } else {
      num -= 1;
    }
  };
  let reset = () => {
    num = 0;
  };
</script>

<div>
  <h2>Counter</h2>
  <h3>Current Number is {num}</h3>
  <button on:click={increment}>Increment</button>
  <button on:click={decrement}>Decrement</button>
  <button on:click={reset}>Reset</button>
</div>
