<template>
  <Tasks
    :tasks="tasks"
    :on-delete="onDeleteTask"
    :on-add="onAddTask"
    :on-edit="onEditTask"
  />
</template>

<script>
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    onDeleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    onAddTask(taskTitle) {
      this.tasks.push({ id: Date.now(), title: taskTitle, completed: false });
    },
    onEditTask(task) {
      const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks[taskIndex] = task;
    },
  },

  created() {
    this.tasks = [
      {
        id: 1,
        title: "Learn Vue",
        completed: true,
      },
      {
        id: 2,
        title: "Learn Vuex",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Vue Router",
        completed: false,
      },
    ];
  },
};
</script>

<style>
body {
  width: 100%;
  height: 100vh;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
}
</style>
