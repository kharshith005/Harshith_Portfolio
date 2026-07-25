import { Terminal } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-block section-anchor">
      <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-blue-500 mb-12 flex items-center gap-4">
        <Terminal size={18} /> Professional Experience
      </h2>

      <div className="timeline">
        {/* Senior SE */}
        <div className="timeline-item">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-bold text-gray-200">Senior Software Engineer (SRE Team)</h3>
            <span className="text-sm font-mono text-gray-500 italic">Apr 2025 – Jul 2025</span>
          </div>
          <p className="text-blue-500 font-bold text-sm mb-4 uppercase tracking-wider">
            Chargebee Technologies · Chennai, Tamil Nadu, India
          </p>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-2">
            <li>
              Optimized database connection management by consolidating schema-level connection
              pools into a shared pool per AWS RDS instance, reducing connection spikes and idle
              connections by 20% while improving resource utilization, scalability, and stability.
            </li>
            <li>
              Automated configuration onboarding through a centralized database configuration
              management system, enabling consistent configuration across microservices and
              reducing manual effort by 40% during infrastructure provisioning.
            </li>
          </ul>
        </div>

        {/* Software Engineer */}
        <div className="timeline-item">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-bold text-gray-200">Software Engineer (SRE Team)</h3>
            <span className="text-sm font-mono text-gray-500 italic">Aug 2022 – Mar 2025</span>
          </div>
          <p className="text-blue-500 font-bold text-sm mb-4 uppercase tracking-wider">
            Chargebee Technologies · Chennai, Tamil Nadu, India
          </p>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-2">
            <li>
              Led AWS RDS upgrade initiatives using Blue-Green deployments to achieve near-zero
              downtime, preserve data integrity, and reduce service disruption by 90%.
            </li>
            <li>
              Built an automated schema comparison tool in Java and SQL to detect cross-environment
              inconsistencies, reducing manual debugging time by 30% and improving production reliability.
            </li>
            <li>
              Designed a multi-threaded Java job scheduler to parallelize schema migrations across
              12+ concurrent RDS instances, automating post-provisioning and sharding changes while
              cutting total runtime by 60% and manual intervention by 25%.
            </li>
            <li>
              Scaled SRE best practices across cross-functional engineering, platform, and product
              teams by institutionalizing incident post-mortems and runbooks, reducing incident
              recurrence by 30% and enabling reliable, scalable multi-region deployments.
            </li>
          </ul>
        </div>

        {/* Software Engineer Intern */}
        <div className="timeline-item">
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-bold text-gray-200">Software Engineer Intern (SRE Team)</h3>
            <span className="text-sm font-mono text-gray-500 italic">Jan 2022 – Jul 2022</span>
          </div>
          <p className="text-blue-500 font-bold text-sm mb-4 uppercase tracking-wider">
            Chargebee Technologies · Chennai, Tamil Nadu, India
          </p>
          <ul className="list-disc list-inside text-gray-400 leading-relaxed space-y-2">
            <li>
              Engineered a centralized observability dashboard integrating Splunk, ELK Stack, and
              database logs, enabling proactive incident detection, reducing Mean Time to Resolve
              (MTTR) by 25%, and sustaining 99.9% availability.
            </li>
            <li>
              Spearheaded infrastructure provisioning automation using AWS RDS, DynamoDB, and
              CloudFormation, reducing manual configuration effort by 40%, accelerating deployment
              time by 30%, and improving cross-environment reliability.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
