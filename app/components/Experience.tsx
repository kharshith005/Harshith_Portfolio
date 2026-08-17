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
              Architected a unified AWS RDS connection pooling system, consolidating schema-level
              pools into a single shared pool per instance, reducing idle connection overhead by 20%
              and improving throughput, utilization, and stability across production microservices.
            </li>
            <li>
              Drove a centralized database configuration management platform enforcing consistent
              configuration propagation across all microservices, reducing manual provisioning
              effort by 40% and cutting environment-drift incidents during infrastructure onboarding.
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
              Led AWS RDS Blue-Green deployment upgrade initiatives across critical production
              databases, coordinating planning, execution, and validation to achieve near-zero
              downtime, reduce service disruption by 90%, and preserve complete data integrity
              across systems.
            </li>
            <li>
              Engineered an automated schema comparison tool to detect database
              inconsistencies across environments, capturing all schema mismatches while reducing
              manual debugging time by 30% and improving overall production reliability.
            </li>
            <li>
              Launched an internal API feature for a database migration tool to automate schema
              changes following RDS provisioning and sharding activities, reducing manual
              intervention by 25% and improving system efficiency and reliability.
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
              Engineered a centralized observability and monitoring dashboard in Python integrating
              Splunk, ELK Stack, and database logs, enabling proactive incident detection and
              reducing Mean Time to Resolve (MTTR) by 25% while maintaining 99.9% system availability.
            </li>
            <li>
              Automated infrastructure provisioning across AWS RDS, DynamoDB, and CloudFormation,
              reducing manual configuration effort by 40%, accelerating deployment time by 30%, and
              improving cross-environment reliability and consistency.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
