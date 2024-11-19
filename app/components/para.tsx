interface Ty {
    name: string; // Use `string` instead of `String`
}
export const Para = (props:Ty) => {
    return(
        <p className="text-slate-500 text-md  lg:w-2/3 ">{props.name}</p>
    );
}