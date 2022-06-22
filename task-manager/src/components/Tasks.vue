/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="task-container">
    <h1>Tasks</h1>
    <div class="flex">
      <input v-model="newTask" placeholder="Write task title" />
      <button class="add-btn" @click="odAddTask()" :disabled="!newTask.length">
        Add Task
      </button>
    </div>
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
    onAdd: Function,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    odAddTask() {
      this.onAdd(this.newTask);
      this.newTask = "";
    },
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
.flex {
  display: flex;
  justify-content: space-between;
}

.add-btn {
  border: none;
  padding: 8px;
}
</style>