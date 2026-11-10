export default function ProfileHeader({ fullname, role, city,bio }) {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-bold text-slate-900">{fullname}</h1>
      <p className="text-lg text-slate-600">{role}</p>
      <p className="text-sm text-slate-500">{city}</p>
      <p className="text-sm text-slate-500">{bio}</p>
      
    </header>
  );
}