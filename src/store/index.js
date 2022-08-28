import { useTodoStore } from "./todo";

export default function useStore() {
  return {
    todoStore: useTodoStore(),
  };
}
