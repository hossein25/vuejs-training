/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="task">
    <div class="title">
      <span :class="[task.completed ? 'green' : 'red', 'completed']"></span>
      <h4>{{ task.title }}</h4>
    </div>

    <button class="delete-btn" @click="onDelete(task.id)">X</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Task",
  props: {
    task: Object,
    onDelete: Function,
  },
};
</script>

<style scoped>
.task {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  display: flex;
  align-items: center;
  gap: 16px;
}
.completed {
  width: 10px;
  height: 10px;
  border-radius: 50px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.delete-btn {
  color: red;
  border: unset;
  background-color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
</style>