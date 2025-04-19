import type { Task } from "../types/ITask";

const TASKS_STORAGE_KEY = "tasks";

export const taskService = {
  async fetchTasks(): Promise<Task[]> {
    const local = localStorage.getItem(TASKS_STORAGE_KEY);
    
    if (local) {
      return JSON.parse(local);
    }

    const response = await fetch("/tasks.json");
    const tasks = await response.json();
    this.saveTasks(tasks);
    return tasks;
  },

  saveTasks(tasks: Task[]) {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }
};
