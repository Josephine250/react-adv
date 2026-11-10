export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-semibold text-slate-900">{project.name}</h3>
      <p className="text-sm text-slate-500">{project.description}</p>
      <img src={project.image} alt={project.name} className="mt-4 w-full rounded-lg" />
      
    </div>
  );
}