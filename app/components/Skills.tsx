import { Database, Cloud, Code, Terminal, Cpu, Zap } from "lucide-react";

const skills = {
  "Programming Languages": ["Python", "Java", "SQL", "C", "C++", "JavaScript", "TypeScript", "R"],
  "Cloud, DevOps & Databases": [
    "AWS",
    "GCP",
    "Git",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Splunk",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ],
  "Web Development": [
    "HTML5",
    "CSS3",
    "Flask",
    "Django",
    "FastAPI",
    "REST APIs",
    "Vue.js",
    "Node.js",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  "ML & Data Tools": [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "PyTorch",
    "OpenCV",
    "Tableau",
    "Grafana",
  ],
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
