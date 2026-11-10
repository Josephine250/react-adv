export default function SkillList({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm">
          {skill}
        </li>
      ))}
    </ul>
  );
}