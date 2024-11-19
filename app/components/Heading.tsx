interface Ty {
    name: string; // Use `string` instead of `String`
}

export function Heading_1(props:Ty){
    return(        
        <h1 className="text-2xl  lg:text-5xl font-black text-slate-700 font-sarif leading-normal">{props.name}</h1>        
    );
}

export function Heading_2(props:Ty){
    return(
       
        <h1 className="text-3xl font-bold text-slate-700 font-sarif mb-5 w-13">{props.name}</h1>
      
    );
}

export function Heading_3(props:Ty){
    return(
       
        <h1 className="text-xl font-bold text-slate-700 font-sarif mb-2 w-13">{props.name}</h1>
      
    );
}