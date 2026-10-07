import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  // EFEITO QUE ACONTECE QUANDO ALGO MUDA
  // Executa a função sempre que o tasks for alterado
  useEffect(() => {
    console.log("TASKS FOI ALTERADO!");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Executa a função UMA vez, quando o usuário acaba de acessar a aplicação
  useEffect(() => {
    async function fetchTasks() {
      // Chamar a API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        },
      );
      
      // Resgatar os dados que ela retorna
      const data = await response.json();

      // Armazenar os dados no STATE
      setTasks(data)
    }
    // DESCOMENTAR ESSA LINHA PARA RESGATAR TAREFAS DA API
    // fetchTasks()
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });

    setTasks(newTasks);
  }

  function onDeleteClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    // VERIFICAR SE O TITULO E A DESCRIÇÃO ESTÃO PREENCHIDOS
    if (!title.trim() || !description.trim()) {
      return alert("Preencha o título e a descrição da tarefa.");
    }

    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-125 space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    </div>
  );
}

export default App;
