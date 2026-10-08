import { useState } from "react";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import ButtonCalculator from "../components/ButtonCalculator";
import { DeleteIcon } from "lucide-react";

function Calculator() {
  function onDeleteCLick() {
    let newDisplay = display.slice(0, -1);

    setDisplay(newDisplay);
  }

  function onACClick(){
    setDisplay("0")
  }

  function onPercentageCLick(){
    let newDisplay = display.concat("%")

    setDisplay(newDisplay)
  }

  function onSplitCLick(){
    let newDisplay = display.concat("/")

    setDisplay(newDisplay)
  }

  const [display, setDisplay] = useState("0");

  return (
    <div className="w-screen h-screen bg-sky-950 flex justify-center p-6">
      <div className="w-96 space-y-4">
        <Title>Calculadora</Title>
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
            <tbody className="gap-4">
              <tr className="grid grid-cols-4 gap-0.5">
                <td>
                  <ButtonCalculator onClick={() => onDeleteCLick()}>
                    <DeleteIcon />
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => onACClick()}>
                    <p className="font-bold">AC</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => onPercentageCLick()}>
                    <p className="font-bold">%</p>
                  </ButtonCalculator>
                </td>
                <td>
                  <ButtonCalculator onClick={() => onSplitCLick()}>
                    <p className="font-bold">/</p>
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
