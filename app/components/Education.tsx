import { Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-block section-anchor">
      <div className="text-left">
        <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-500 mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold text-gray-200">Arizona State University</h3>
              <span className="text-sm font-mono text-gray-500">Aug 2025 – Dec 2026</span>
            </div>
            <p className="text-gray-400">
              Master of Science in Computer Science (GPA: 4.00/4.00) · Tempe, AZ, USA
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Relevant coursework: Data Mining, Statistical Machine Learning, Data Visualization,
              Semantic Web Mining, Knowledge Representation
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold text-gray-200">Vellore Institute of Technology</h3>
              <span className="text-sm font-mono text-gray-500">Jul 2018 – Jun 2022</span>
            </div>
            <p className="text-gray-400 mb-2">
              Bachelor of Technology in Computer Science and Engineering (GPA: 3.84/4.00) · Vellore, Tamil Nadu, India
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Relevant coursework: Data Structures, Algorithms, Database Systems, Object-Oriented Programming,
              Web Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
