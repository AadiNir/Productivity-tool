interface butlb{
    label:string,
    onClick:()=>void
}
export default function Button(val:butlb):JSX.Element{
    return <button className="p-3 m-2 border-3 rounded-lg bg-gray-800 text-slate-200" onClick={val.onClick}>{val.label}</button>
}