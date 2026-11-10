import ProfileHeader from "./components/profileHeader";
import ProjectCard from "./components/projectcard";
import SkillList from "./components/slillList";

const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];

const navLinks = ["Home", "About", "Program", "Blogs"];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-extrabold text-blue-600">Josephine.</span>
          <ul className="flex gap-6 text-sm font-semibold text-slate-600 sm:gap-8 sm:text-base">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer transition hover:text-blue-600"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        {/* Profile + Skills */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ProfileHeader
            fullname="Niyompano Josephine"
            role="Frontend Developer"
            city="Kigali"
            bio="Frontend developer who enjoys building clean, responsive and user-friendly web interfaces."
          />

          <div className="mt-8 border-t border-slate-100 pt-6">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-xl font-bold">Skills</h2>
              <span className="h-1 w-10 rounded-full bg-blue-500" />
            </div>
            <SkillList skills={skills} />
          </div>
        </section>

        {/* Projects */}
        <section className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-100 to-blue-50 p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
            <span className="h-1 w-12 rounded-full bg-blue-500" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <ProjectCard
              project={{
                name: "Smartgate",
                description:
                  "A smart access-control system that manages entry and exit with real-time visitor tracking and instant notifications.",
                image: "/images/smartgate.png",
              }}
            />
            <ProjectCard
              project={{
                name: "impowerHer",
                description:
                  "A platform that connects women with mentorship, skills training and economic opportunities to help them grow and lead.",
                image: "/images/impowerher.png",
              }}
            />
            <ProjectCard
              project={{
                name: "sokHub",
                description:
                  "An online marketplace where local sellers list products and buyers discover and order from shops near them.",
                image: "/images/sokhub.png",
              }}
            />
            <ProjectCard
              project={{
                name: "Sekumwe",
                description:
                  "A collaboration space that brings people together to share ideas, coordinate efforts and solve problems as a team.",
                image: "/images/sekumwe.png",
              }}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Niyompano Josephine. All rights reserved.
      </footer>
    </div>
  );
}