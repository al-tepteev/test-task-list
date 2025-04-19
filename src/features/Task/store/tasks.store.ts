import { defineStore } from "pinia";
import type { Task } from "../types/ITask";
import { taskService } from "../service/taskRepository.service";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [] as Task[],
    isLoaded: false
  }),

  actions: {
    async loadTasks() {
      this.tasks = await taskService.fetchTasks();
      this.isLoaded = true;
    },

    toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id);

      if (task) {
        task.done = !task.done;
        this.saveTasks();
      }
    },

    async saveTasks() {
      await taskService.saveTasks(this.tasks);
    }
  }
});
