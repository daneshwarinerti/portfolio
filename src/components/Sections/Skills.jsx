import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export default function Skills() {
  const skillsList = portfolioData.skills;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        delay: index * 0.05
      }
    })
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="radial-glow top-[15%] left-[-10%] bg-[radial-gradient(circle,rgba(255,153,0,0.03)_0%,rgba(5,8,17,0)_70%)]" />
      <div className="radial-glow bottom-[15%] right-[-10%] bg-[radial-gradient(circle,rgba(0,120,212,0.03)_0%,rgba(5,8,17,0)_70%)]" />

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
            Technical <span className="bg-gradient-to-r from-awsOrange to-azureBlue bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lightGray max-w-xl mx-auto text-sm sm:text-base">
            Categorized directory of core cloud technologies, pipeline integrations, and automation workflows from my resume.
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                borderColor: 'rgba(255, 153, 0, 0.15)',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
              }}
              className="bg-cardNavy/40 border border-white/5 rounded-2xl p-6 flex flex-col space-y-4 shadow-lg shadow-black/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent glow line for cards */}
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-awsOrange/20 to-azureBlue/20" />

              {/* Category Header */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-awsOrange uppercase tracking-wider">
                  // {index + 1}. CATEGORY
                </span>
                <h3 className="text-base sm:text-lg font-bold font-heading text-white tracking-tight">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm font-medium text-lightGray hover:border-awsOrange/30 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
