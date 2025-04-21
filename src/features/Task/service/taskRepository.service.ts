import type { Task } from "../types/ITask";

const TASK_STATUS_KEY = "task_status_map";

function readStatusMap(): Record<number, boolean> {
  try {
    return JSON.parse(localStorage.getItem(TASK_STATUS_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeStatusMap(map: Record<number, boolean>) {
  localStorage.setItem(TASK_STATUS_KEY, JSON.stringify(map));
}

export const taskService = {
  async fetchTasks(): Promise<Task[]> {
    const response = await fetch("/tasks.json");
    const tasks: Task[] = await response.json();

    const statusMap = readStatusMap();
    return tasks.map(t => ({
      ...t,
      done: statusMap[t.id] ?? t.done
    }));
  },

  saveStatus(id: number, done: boolean) {
    const map = readStatusMap();
    
    map[id] = done;
    writeStatusMap(map);
  },
  saveAllStatuses(tasks: Task[]) {
    const map: Record<number, boolean> = {};

    tasks.forEach(t => {
      map[t.id] = t.done;
    });
    writeStatusMap(map);
  }
};
