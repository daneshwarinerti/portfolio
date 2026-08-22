import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { SiDocker, SiKubernetes, SiLinux } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';
import TypingEffect from '../TypingEffect';

// Local SVG icons for version compatibility
const GithubIcon = ({ size = 20, ...props }) => (
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

const LinkedinIcon = ({ size = 20, ...props }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { name, title, tagline, resumeUrl, profilePhotoUrl, socials } = portfolioData.personalInfo;

  const typingPhrases = [
    "AWS Cloud Deployments",
    "DevOps Automation",
    "Infrastructure as Code",
    "Docker Containerization",
    "Kubernetes Orchestration"
  ];

  return (
    <section 
      id="hero" 
      className="h-auto md:min-h-screen flex items-center relative overflow-hidden pt-24 pb-12 md:py-0"
    >
      {/* Background Radial Glow */}
      <div className="radial-glow top-[-10%] left-[-10%] bg-[radial-gradient(circle,rgba(255,153,0,0.08)_0%,rgba(5,8,17,0)_70%)]" />
      <div className="radial-glow bottom-[10%] right-[-10%] bg-[radial-gradient(circle,rgba(0,120,212,0.08)_0%,rgba(5,8,17,0)_70%)]" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Hero Left Content Column (7 cols on desktop, full-width on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:col-span-7 space-y-4 md:space-y-6 text-left"
          >
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-awsOrange/10 border border-awsOrange/20 rounded-full text-awsOrange text-xs font-mono font-semibold"
            >
              <span className="w-1.5 h-1.5 bg-awsOrange rounded-full animate-pulse" />
              Cloud & DevOps Specialist
            </motion.div>

            {/* Name Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-none">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-white via-lightGray to-textDim bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            {/* Subtitle / Typing loop */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-heading text-white">
              I specialize in <br className="sm:hidden" />
              <TypingEffect words={typingPhrases} />
            </h2>

            {/* Tagline Paragraph */}
            <p className="text-lightGray text-sm sm:text-base md:text-lg max-w-xl">
              {tagline}
            </p>

            {/* Actions Bar (Three Buttons: View Projects, Resume, Contact) */}
            <div className="flex flex-wrap gap-3 pt-1 md:pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-awsOrange to-azureBlue hover:from-awsOrange/90 hover:to-azureBlue/90 text-white font-semibold font-heading text-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-awsOrange/10 w-full sm:w-auto"
              >
                View Projects <ArrowRight size={14} />
              </a>
              <a 
                href={resumeUrl} 
                download 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold font-heading text-xs transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Download Resume <Download size={14} />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-azureBlue/10 border border-azureBlue/20 hover:bg-azureBlue/20 hover:border-azureBlue/30 text-azureBlue font-semibold font-heading text-xs transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Contact Me <Mail size={14} />
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-2 md:pt-4">
              <span className="text-[10px] font-mono text-textDim tracking-widest uppercase">
                CONNECT //
              </span>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-lightGray hover:text-awsOrange transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-lightGray hover:text-azureBlue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={socials.email}
                className="text-lightGray hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Hero Right Visual Column - Circular profile layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="w-full md:col-span-5 flex justify-center items-center relative"
          >
            {/* Glowing circular container */}
            <div className="relative w-48 h-48 min-[375px]:w-56 min-[375px]:h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-awsOrange/20 shadow-[0_0_50px_rgba(255,153,0,0.15)] flex justify-center items-center transition-all duration-500 hover:border-awsOrange/40 hover:shadow-[0_0_60px_rgba(255,153,0,0.25)]">
              
              {/* Profile Image container */}
              <div className="w-[93%] h-[93%] rounded-full overflow-hidden bg-cardNavy border border-white/5 relative">
                <img
                  src={profilePhotoUrl}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Orbiting Tech Icons */}
              {/* AWS */}
              <div className="floating-icon absolute top-[-10px] left-[10%] w-11 h-11 bg-cardNavy/90 border border-awsOrange/30 rounded-xl flex items-center justify-center shadow-md shadow-awsOrange/20">
                <FaAws className="w-6 h-6 text-awsOrange" />
              </div>

              {/* Docker */}
              <div className="floating-icon absolute top-[30%] right-[-15px] w-11 h-11 bg-cardNavy/90 border border-azureBlue/30 rounded-xl flex items-center justify-center shadow-md shadow-azureBlue/20" style={{ animationDelay: '1.5s' }}>
                <SiDocker className="w-6 h-6 text-azureBlue" />
              </div>

              {/* Kubernetes */}
              <div className="floating-icon absolute bottom-[-10px] right-[10%] w-11 h-11 bg-cardNavy/90 border border-azureBlue/30 rounded-xl flex items-center justify-center shadow-md shadow-azureBlue/20" style={{ animationDelay: '3s' }}>
                <SiKubernetes className="w-6 h-6 text-azureBlue" />
              </div>

              {/* Linux */}
              <div className="floating-icon absolute top-[30%] left-[-15px] w-11 h-11 bg-cardNavy/90 border border-awsOrange/30 rounded-xl flex items-center justify-center shadow-md shadow-awsOrange/20" style={{ animationDelay: '4.5s' }}>
                <SiLinux className="w-6 h-6 text-awsOrange" />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
