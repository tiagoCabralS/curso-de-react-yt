import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(title, description) {
    const query = new URLSearchParams();
    query.set("title", title);
    query.set("description", description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            // SE A TAREFA ESTIVER MARCADA COMO COMPLETA ADICIONA UMA LINHA NO TÍTULO
            className={`${task.isCompleted && "line-through"} bg-slate-700 text-left w-full p-2 rounded-md text-white`}
          >
            {task.title}
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task.title, task.description)}
          >
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => props.onDeleteClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
