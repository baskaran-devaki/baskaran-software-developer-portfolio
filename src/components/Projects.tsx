import { ExternalLink, Github, Award, Zap, Cpu, BarChart3 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  impact: string[];
  technologies: string[];
  category: string;
  certificateUrl: string;
  icon: React.ReactNode;
}

const TechIcon = ({ tech }: { tech: string }) => {
  const iconMap: { [key: string]: JSX.Element } = {
    'Power BI': <div className="w-5 h-5 bg-yellow-500 rounded text-white flex items-center justify-center text-xs font-bold">BI</div>,
    'Excel': <div className="w-5 h-5 bg-green-500 rounded text-white flex items-center justify-center text-xs font-bold">XL</div>,
    'Figma': <div className="w-5 h-5 bg-purple-500 rounded text-white flex items-center justify-center text-xs font-bold">FG</div>,
    'UI/UX': <div className="w-5 h-5 bg-pink-500 rounded text-white flex items-center justify-center text-xs font-bold">UX</div>,
    'Cursor IDE': <div className="w-5 h-5 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">CI</div>,
    'MCP': <div className="w-5 h-5 bg-indigo-600 rounded text-white flex items-center justify-center text-xs font-bold">MP</div>,
    'Pipedream': <div className="w-5 h-5 bg-sky-500 rounded text-white flex items-center justify-center text-xs font-bold">PD</div>,
    'Make.com': <div className="w-5 h-5 bg-rose-500 rounded text-white flex items-center justify-center text-xs font-bold">MK</div>,
    'APIs': <div className="w-5 h-5 bg-teal-500 rounded text-white flex items-center justify-center text-xs font-bold">AP</div>,
    'AI Agents': <div className="w-5 h-5 bg-orange-500 rounded text-white flex items-center justify-center text-xs font-bold">AI</div>,
    'Data Analysis': <div className="w-5 h-5 bg-green-600 rounded text-white flex items-center justify-center text-xs font-bold">DA</div>,
    'Automation': <div className="w-5 h-5 bg-cyan-600 rounded text-white flex items-center justify-center text-xs font-bold">AT</div>,
  };
  return iconMap[tech] || <span className="px-2 py-1 text-xs">{tech}</span>;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Data Analytics Dashboard',
      description: 'Built an interactive data analytics dashboard using Power BI, Excel, and Kaggle datasets. Performed data cleaning, analysis, and visualization to generate actionable business insights.',
      impact: [
        'Data cleaning and preprocessing',
        'Interactive dashboards',
        'Business insights visualization'
      ],
      technologies: ['Power BI', 'Excel', 'Data Analysis'],
      category: 'Data & Analytics',
      certificateUrl: 'https://drive.google.com/file/d/1v-nQqb_WU7xWU_7TYxslo2rWgakDWDRm/view',
      icon: <BarChart3 className="text-yellow-500" size={24} />
    },
    {
      title: 'UI/UX Design Project',
      description: 'Redesigned a complete application using Figma by applying user-centered design principles and modern UI/UX practices to improve usability and user experience.',
      impact: [
        'Wireframing and prototyping',
        'Design systems creation',
        'User-centered design approach'
      ],
      technologies: ['Figma', 'UI/UX'],
      category: 'Design',
      certificateUrl: 'https://drive.google.com/file/d/1kD8BEK5nRiHuhH71ext4V8IM1ffpI_Wn/view',
      icon: <Cpu className="text-pink-500" size={24} />
    },
    {
      title: 'MCP AI Workflow',
      description: 'Developed prompt-driven AI workflows using Model Context Protocol, integrating tools and automation systems for enhanced productivity and intelligent task automation.',
      impact: [
        'AI workflow automation',
        'Tool integration',
        'Prompt engineering'
      ],
      technologies: ['Cursor IDE', 'MCP', 'Pipedream'],
      category: 'AI & Automation',
      certificateUrl: 'https://drive.google.com/file/d/14G1P1fwgrxSaQFtgt7qB5KaLiwbjkul6/view',
      icon: <Zap className="text-indigo-500" size={24} />
    },
    {
      title: 'AI Automation Workflows',
      description: 'Built end-to-end automation workflows using Make.com by integrating APIs, AI agents, and MCP servers for business process optimization and intelligent automation.',
      impact: [
        'Automation workflows',
        'API integration',
        'Business process optimization'
      ],
      technologies: ['Make.com', 'APIs', 'AI Agents'],
      category: 'AI & Automation',
      certificateUrl: 'https://drive.google.com/file/d/1BaA2BOCUFI7xDoos6MW48gc7O1YGoMzz/view',
      icon: <Zap className="text-rose-500" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Professional Projects
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="text-blue-600 dark:text-blue-400 font-bold mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:scale-105 transition-transform"
                        title={tech}
                      >
                        <TechIcon tech={tech} />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105 font-medium text-sm"
                  >
                    <Award size={18} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-600 shadow-lg">
          <div className="flex items-start gap-4">
            <Award className="text-blue-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                NxtWave – Explore Your Tech Future
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                NxtWave isn’t just a learning platform—it’s a career transformation ecosystem 💻✨

It helps students in India gain industry-ready skills and become job-ready even before graduation, with a strong focus on real-world projects and high-paying tech careers 🚀
              </p>
              <a
                href="https://ccbp.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all transform hover:scale-105 font-medium"
              >
                <ExternalLink size={18} />
                <span>Explore NxtWave Academy</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
