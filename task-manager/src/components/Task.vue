/* eslint-disable vue/multi-word-component-names */
<template>
  <div class="task">
    <div class="title">
      <span :class="[task.completed ? 'green' : 'red', 'completed']"></span>
      <h4 v-if="!isEditing">{{ task.title }}</h4>
      <input v-if="isEditing" v-model="taskTitle" />
    </div>

    <div class="task-action">
      <button class="delete-btn" @click="onDelete(task.id)">X</button>
      <img
        :src="editSvg"
        v-if="!isEditing"
        @click="enableEdit()"
        class="icons"
      />
      <img
        :src="checkSvg"
        v-if="isEditing"
        @click="updateTask()"
        class="icons"
      />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Task",
  props: {
    task: Object,
    onDelete: Function,
    onEdit: Function,
  },
  data() {
    return {
      isEditing: false,
      taskTitle: this.task.title,
      editSvg: require("../assets/edit.svg"),
      checkSvg: require("../assets/check.svg"),
    };
  },
  methods: {
    enableEdit() {
      this.isEditing = true;
    },

    updateTask() {
      this.onEdit({ ...this.task, title: this.taskTitle });
      this.isEditing = false;
    },
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
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
}

.task-action {
  display: flex;
  gap: 1rem;
}

.icons {
  cursor: pointer;
  width: 24px;
  height: 24px;
}
</style>