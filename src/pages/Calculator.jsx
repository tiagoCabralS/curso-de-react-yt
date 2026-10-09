import { useState } from "react";
import Input from "../components/Input";
import Title from "../components/Title";
import ButtonCalculator from "../components/ButtonCalculator";
import { ChevronLeftIcon, DeleteIcon } from "lucide-react";
import { evaluate } from "mathjs"
import { useNavigate } from "react-router-dom";

function Calculator() {
  function onDeleteCLick() {
    let newDisplay = display.slice(0, -1);

    setDisplay(newDisplay);
  }

  function addToInput(txt){
    let newDisplay = display.concat(txt)

    setDisplay(newDisplay)
  }

  function solveExpression(expression){
    try{      
      return evaluate(expression) 
    }
    catch (error){
      return `${error}`
    }
  }

  function onSubmitClick(){
    let newDisplay = solveExpression(display.replace(/,/g, '.'))

    setDisplay(newDisplay.toString().replace(".", ","))    
  }
  
  const [display, setDisplay] = useState("");
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-96 space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="text-white absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Calculadora</Title>
        </div>
        <div className="p-6 bg-slate-200 rounded-md shadow">
          <table className="w-full">
            <thead>
              <tr className="">
                <td className="w-full" >
                  <Input
                    type="text"
                    placeholder="0"
                    value={display}
                    onChange={(event) => setDisplay(event.target.value)}
                  />
                </td>
              </tr>
            </thead>
            <tbody className="gap-4 space-y-0.5">
              <tr className="grid grid-cols-4 gap-0.5">
                <td>
                  <ButtonCalculator onClick={() => onDeleteCLick()}>
                    <DeleteIcon />
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => setDisplay("")}>
                    <p className="font-bold">AC</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("%")}>
                    <p className="font-bold">%</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("/")}>
                    <p className="font-bold">/</p>
                  </ButtonCalculator>
                </td>
              </tr>
              <tr className="grid grid-cols-4 gap-0.5">
                <td>
                  <ButtonCalculator onClick={() => addToInput("7")}>
                    <p className="font-bold">7</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("8")}>
                    <p className="font-bold">8</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("9")}>
                    <p className="font-bold">9</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("*")}>
                    <p className="font-bold">*</p>
                  </ButtonCalculator>
                </td>
              </tr>
              <tr className="grid grid-cols-4 gap-0.5">
                <td>
                  <ButtonCalculator onClick={() => addToInput("4")}>
                    <p className="font-bold">4</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("5")}>
                    <p className="font-bold">5</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("6")}>
                    <p className="font-bold">6</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("-")}>
                    <p className="font-bold">-</p>
                  </ButtonCalculator>
                </td>
              </tr>
              <tr className="grid grid-cols-4 gap-0.5">
                <td>
                  <ButtonCalculator onClick={() => addToInput("1")}>
                    <p className="font-bold">1</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("2")}>
                    <p className="font-bold">2</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("3")}>
                    <p className="font-bold">3</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("+")}>
                    <p className="font-bold">+</p>
                  </ButtonCalculator>
                </td>
              </tr>
              <tr className="grid grid-cols-4 gap-0.5">
                <td>
                  <ButtonCalculator onClick={() => addToInput("")}>
                    <p className="font-bold">+/-</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput("0")}>
                    <p className="font-bold">0</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => addToInput(",")}>
                    <p className="font-bold">,</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => onSubmitClick()}>
                    <p className="font-bold">=</p>
                  </ButtonCalculator>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
