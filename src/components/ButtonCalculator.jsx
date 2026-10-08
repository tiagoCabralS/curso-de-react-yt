function ButtonCalculator(props){
    return <button 
    className="bg-slate-700 w-full p-2 rounded-full text-white"
    {...props}
    >        
    {props.children}
    </button>
}

export default ButtonCalculator;