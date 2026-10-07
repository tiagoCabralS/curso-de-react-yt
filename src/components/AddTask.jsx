import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-125 p-6 space-y-4 bg-slate-200 rounded-md shadow flex flex-col">
      <Input 
      type="text" 
      placeholder="Título da tarefa"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      />
      <Input 
      type="text" 
      placeholder="Descrição da tarefa"
      value={description}
      onChange={(event) => setDescription(event.target.value)}
      />
      
      <button
        onClick={() => {
            onAddTaskSubmit(title, description)
            setTitle("")
            setDescription("")
        }}
        className="bg-slate-500 p-2 rounded-md text-white"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
