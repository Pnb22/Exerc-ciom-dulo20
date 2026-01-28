import { useState } from "react";
import { useRecoilState } from "recoil";
import { tasksAtom } from "../atoms/tasksAtom";

export function TaskForm() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useRecoilState(tasksAtom);

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);

    setText("");
  }

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
