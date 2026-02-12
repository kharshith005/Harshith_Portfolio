
export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 animate-gradient-text">
        Harshith Kurakula
      </h1>
      <p className="text-2xl font-medium text-slate-300 mb-6">
        MSCS Student @ Arizona State University
      </p>
      <p className="max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed mb-10">
        I build reliable backend systems and automation tooling for high-scale platforms,
        with hands-on experience in distributed systems, database performance, and cloud
        reliability engineering. Actively seeking Summer 2026 software engineering
        internships.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:hkurakul@asu.edu"
          className="px-5 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors"
        >
          Email Me
        </a>
        <a
          href="/Harshith_Kurakula_Resume.pdf"
          className="px-5 py-3 rounded-full border border-slate-700 text-slate-200 text-sm font-semibold hover:border-slate-500 transition-colors"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
