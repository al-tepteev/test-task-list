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
  max-width: 480px;
  margin: 4rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
    color: #111;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    transition: background 0.3s;
    margin-bottom: 0.75rem;

    &:hover {
      background: #f5f5f7;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      cursor: pointer;
      width: 100%;
    }

    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      accent-color: #007aff; // Apple blue
      cursor: pointer;
    }

    span {
      font-size: 1.05rem;
      transition: color 0.2s, text-decoration 0.2s;

      &.done {
        color: #aaa;
        text-decoration: line-through;
      }
    }
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: #666;
  }
}
</style>
