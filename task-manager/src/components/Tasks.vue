/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="task-container">
    <h1>Tasks</h1>
    <ul>
      <li :key="task.id" v-for="task in tasks">
        <Task :task="task" :on-delete="onDelete" />
      </li>
    </ul>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tasks",
  components: { Task },
  props: {
    tasks: Array,
    onDelete: Function,
  },
};
</script>

<style scoped>
.task-container {
  padding: 2rem;
  width: 400px;
}
li {
  list-style: none;
}
</style>