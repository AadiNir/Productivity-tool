interface inp{
    label:string
}
export default function Heading(val:inp) :JSX.Element{
    return <h1 className="text-wrap text-5xl text-slate-900 font-semibold font-mono">{val.label}</h1>
}