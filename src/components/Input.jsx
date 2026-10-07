function Input(props){
    return <input    
        className="bg-white p-2 rounded-md"
        // SPREAD DAS PROPS (como se fosse um desempacotamento):
        // Passa todas as props que forem enviadas para o HTML
        {...props}        
      />
}

export default Input