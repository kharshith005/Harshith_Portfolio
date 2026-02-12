import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-transparent text-center py-20 section-anchor">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-slate-200">Let’s Connect</h2>
        <p className="text-slate-400 mb-8">
          Open to Summer 2026 software engineering internships.
          Reach out for collaboration or project conversations.
        </p>
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="https://www.github.com/kharshith005/"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/kharshith5/"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:hkurakul@asu.edu"
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={32} />
          </a>
        </div>
        <p className="text-sm text-slate-600">© 2026 Harshith Kurakula. All rights reserved.</p>
      </div>
    </footer>
  );
}
