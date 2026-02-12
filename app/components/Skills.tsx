import { Database, Cloud, Code, Terminal, Cpu, Zap } from "lucide-react";

const skills = {
  "Programming Languages": ["Python", "Java", "SQL", "C", "C++", "JavaScript", "R"],
  "Cloud, DevOps & Databases": ["AWS", "Git", "Docker", "Kubernetes", "Terraform", "CI/CD", "Splunk", "MySQL", "PostgreSQL", "NoSQL"],
  "Web Development": ["HTML5", "CSS3", "Flask", "Django", "REST APIs", "Vue.js", "Node.js"],
  "ML & Data Tools": ["Scikit-learn", "TensorFlow", "NumPy", "Pandas", "OpenCV"],
};

export default function Skills() {
  return (
    <section id="skills" className="section-block section-anchor">
      <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-500 mb-12 flex items-center gap-4">
        <Zap size={18} /> Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="w-full">
            <h3 className="font-bold text-slate-300 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillsList.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 rounded-full text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
