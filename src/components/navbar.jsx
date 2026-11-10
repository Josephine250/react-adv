export default function Navbar({home,about,program,blogs}){
        return (
                <nav className="space-y-2">
                <ul className="text-3xl font-bold text-slate-900">
                <li className="text-lg text-slate-600">{home}</li>
                <li className="text-sm text-slate-500">{about}</li>
                <li className="text-sm text-slate-500">{program}</li>
                <li className="text-sm text-slate-500">{blogs}</li>
                </ul>
                </nav>
        )
};
