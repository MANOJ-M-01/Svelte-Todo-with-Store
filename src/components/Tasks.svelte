<script>
  import { TaskStore } from "../store/store";
  import TaskList from "./TaskList.svelte";
  import AddTask from "./AddTask.svelte";
  import TaskCounts from "./TaskCounts.svelte";

  // let Items = [];
  // TaskStore.subscribe((data) => (Items = data));

</script>

<svelte:head>
  <title>Tasks</title>
</svelte:head>

<div class="container">
  <AddTask />
  <TaskCounts />
  {#each $TaskStore as item (item.id)}
    <TaskList details={item} />
  {/each}
</div>

<style>
  .container {
    max-width: 500px;
    margin: 20px auto;
    margin-bottom: 50px;
  }
</style>