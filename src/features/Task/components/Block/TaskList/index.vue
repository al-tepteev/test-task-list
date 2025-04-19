<template>
  <div class="task-list">
    <h2>Список задач</h2>
    <ul v-if="taskStore.isLoaded">
      <li v-for="task in taskStore.tasks" :key="task.id">
        <label>
          <input
            type="checkbox"
            :checked="task.done"
            @change="() => taskStore.toggleTask(task.id)"
          />
          <span :class="{ done: task.done }">{{ task.title }}</span>
        </label>
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useTaskStore } from "@/features/Task/store/tasks.store";

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.loadTasks();
});
</script>

<style scoped lang="scss">
.task-list {
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;

    span.done {
      text-decoration: line-through;
      color: #888;
    }
  }
}
</style>
