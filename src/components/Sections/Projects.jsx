import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

// Local SVG icons for clean vector visualization
const GithubIcon = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Arrow = () => (
  <>
    <span className="text-white/30 font-bold sm:inline hidden mx-1 select-none">➔</span>
    <span className="text-white/30 font-bold sm:hidden block my-1 select-none">↓</span>
  </>
);

export default function Projects() {
  const projects = portfolioData.projects;

  // Find the EKS monitoring project to make it the featured case study
  const featuredProject = projects.find(p => p.id === "project-1") || projects[0];
  // Filter the grid projects (Voting App and DevSecOps)
  const gridProjects = projects.filter(p => p.id !== "project-1");

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="radial-glow top-[30%] left-[-15%] bg-[radial-gradient(circle,rgba(255,153,0,0.03)_0%,rgba(5,8,17,0)_70%)]" />
      <div className="radial-glow bottom-[30%] right-[-15%] bg-[radial-gradient(circle,rgba(0,120,212,0.03)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            Systems & <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Deployments</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Detailed engineering architectures, pipeline configurations, and observability setups built on AWS.
          </p>
        </motion.div>

        {/* ==================================================
            FEATURED PROJECT 1 — HORIZONTAL CASE STUDY
            ================================================== */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="w-full min-w-0 bg-cardNavy/30 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-xl shadow-black/30 hover:border-awsOrange/20 transition-all duration-300 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-awsOrange/30 to-azureBlue/30" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-[9px] text-awsOrange uppercase tracking-wider block mb-1">
                    // FEATURED CASE STUDY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 pt-1.5 text-xs text-lightGray/70 font-semibold font-mono">
                    <span>Amazon EKS</span> • <span>Kubernetes</span> • <span>Docker</span> • <span>Helm</span>
                  </div>
                </div>

                <p className="text-lightGray text-sm leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-mono text-textDim uppercase tracking-wider font-semibold">
                    Deployment Highlights:
                  </h4>
                  <ul className="space-y-2 text-xs text-lightGray">
                    {featuredProject.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-awsOrange font-bold select-none">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-xs transition-all duration-200"
                  >
                    <GithubIcon /> View Repository
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Architecture flows */}
              <div className="lg:col-span-6 space-y-5 bg-black/20 border border-white/5 p-6 rounded-2xl">
                <span className="font-mono text-[10px] text-textDim tracking-widest uppercase block mb-1">
                  SYSTEM ARCHITECTURE FLOW
                </span>

                {/* Flow 1: Build & Deploy */}
                <div className="space-y-2 font-mono">
                  <span className="text-[9px] text-awsOrange uppercase tracking-wider block">// CI/CD & Deploy Flow</span>
                  <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-1 gap-x-1.5 text-[11px] text-white">
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">GitHub Actions</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">Docker Build</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">Amazon ECR</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-awsOrange/20 rounded text-awsOrange">Amazon EKS</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">ALB Ingress</div>
                  </div>
                </div>

                {/* Flow 2: Observability */}
                <div className="space-y-2 font-mono pt-3 border-t border-white/5">
                  <span className="text-[9px] text-azureBlue uppercase tracking-wider block">// Observability flow</span>
                  <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-y-1 gap-x-1.5 text-[11px] text-white">
                    <div className="px-2 py-1 bg-deepNavy border border-azureBlue/25 rounded text-azureBlue">Amazon EKS</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">Prometheus</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">Grafana</div>
                    <Arrow />
                    <div className="px-2 py-1 bg-deepNavy border border-white/5 rounded">Alertmanager</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ==================================================
            GRID PROJECTS 2 & 3
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="w-full min-w-0 bg-cardNavy/30 border border-white/5 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/30 hover:border-azureBlue/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Header */}
                <div>
                  <span className="font-mono text-[9px] text-azureBlue uppercase tracking-wider block mb-1">
                    // CASE STUDY // 0{idx + 2}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lightGray text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Visual Architecture block */}
                {project.id === "project-2" ? (
                  /* Project 2: AWS Voting App */
                  <div className="bg-black/20 border border-white/5 p-5 rounded-2xl space-y-4 font-mono">
                    <span className="font-mono text-[9px] text-textDim tracking-wider uppercase block">// INFRASTRUCTURE MAP</span>
                    
                    <div className="space-y-2 text-[10px]">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-x-1.5 gap-y-0.5 text-white">
                        <div className="px-2 py-0.5 bg-deepNavy border border-white/5 rounded">Terraform</div>
                        <Arrow />
                        <div className="px-2 py-0.5 bg-deepNavy border border-white/5 rounded">AWS VPC</div>
                        <Arrow />
                        <div className="px-2 py-0.5 bg-deepNavy border border-azureBlue/20 rounded text-azureBlue font-semibold">ECS Fargate</div>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[8px] text-azureBlue uppercase block mb-1.5">// ECS CONTAINER DEPENDENCIES:</span>
                        <div className="grid grid-cols-3 gap-2 text-center text-[9px] text-white/90">
                          <div className="py-1 bg-deepNavy/60 border border-white/5 rounded">Amazon ECR</div>
                          <div className="py-1 bg-deepNavy/60 border border-white/5 rounded">RDS Postgres</div>
                          <div className="py-1 bg-deepNavy/60 border border-white/5 rounded">ElastiCache</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Project 3: DevSecOps CI/CD Pipeline */
                  <div className="bg-black/20 border border-white/5 p-5 rounded-2xl space-y-4 font-mono text-[10px]">
                    <span className="font-mono text-[9px] text-textDim tracking-wider uppercase block">// CI/CD PIPELINE STAGES</span>
                    
                    <div className="flex flex-col items-center gap-1.5 text-center text-white">
                      <div className="px-2.5 py-0.5 bg-deepNavy border border-white/5 rounded w-full sm:w-auto">GitHub Trigger</div>
                      <span className="text-white/20">↓</span>
                      <div className="px-2.5 py-0.5 bg-deepNavy border border-white/5 rounded w-full sm:w-auto">Actions Runner</div>
                      <span className="text-white/20">↓</span>
                      
                      {/* Security scans box */}
                      <div className="py-2 px-3 bg-red-950/15 border border-red-500/20 rounded-xl w-full">
                        <span className="text-[8px] text-red-400 font-semibold uppercase tracking-wider block mb-1">// SECURITY SCAN GATES</span>
                        <div className="flex flex-wrap justify-center gap-1.5 text-[8px]">
                          <span className="px-1.5 py-0.5 bg-red-500/10 border border-red-500/25 rounded text-red-300">Trivy</span>
                          <span className="px-1.5 py-0.5 bg-red-500/10 border border-red-500/25 rounded text-red-300">Gitleaks</span>
                          <span className="px-1.5 py-0.5 bg-red-500/10 border border-red-500/25 rounded text-red-300">pip-audit</span>
                        </div>
                      </div>
                      
                      <span className="text-white/20">↓</span>
                      <div className="px-2.5 py-0.5 bg-deepNavy border border-awsOrange/20 rounded text-awsOrange w-full sm:w-auto">Docker Build & ECR</div>
                      <span className="text-white/20">↓</span>
                      <div className="px-2.5 py-0.5 bg-deepNavy border border-white/5 rounded w-full sm:w-auto">ECS Fargate Deployment</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-xs transition-all duration-200"
                >
                  <GithubIcon /> View Repository
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
