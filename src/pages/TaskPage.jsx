import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-125 space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="text-white absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="p-4 bg-slate-500 rounded-md shadow">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
