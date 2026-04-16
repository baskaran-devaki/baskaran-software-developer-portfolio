import { Award, BookOpen, Code2, Lightbulb, CheckCircle2, Globe, Smartphone, Zap, Database, ExternalLink } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

export default function Journey() {
  const { t } = useI18n();
  const milestones = [
    {
      title: 'Started NxtWave Journey',
      description: 'Enrolled in comprehensive full-stack development program',
      icon: <BookOpen size={24} />,
      color: 'blue'
    },
    {
      title: 'Frontend Foundations',
      description: 'Mastered HTML, CSS, JavaScript and responsive design principles',
      icon: <Code2 size={24} />,
      color: 'green'
    },
    {
      title: 'React Development',
      description: 'Built dynamic web applications using React and modern JavaScript',
      icon: <Lightbulb size={24} />,
      color: 'orange'
    },
    {
      title: 'Backend & Databases',
      description: 'Learning Node.js, Express, and database management',
      icon: <CheckCircle2 size={24} />,
      color: 'purple'
    }
  ];

  const certifications = [
    { name: 'Build Your Own Static Website', icon: Globe, color: 'blue' },
    { name: 'Build Your Own Responsive Website', icon: Smartphone, color: 'green' },
    { name: 'Programming Foundations with Python', icon: Code2, color: 'yellow' },
    { name: 'Build Your Own Dynamic Web Applications', icon: Zap, color: 'purple' },
    { name: 'JavaScript Essentials', icon: Code2, color: 'orange' },
    { name: 'Developer Foundations', icon: BookOpen, color: 'blue' },
    { name: 'Responsive Web Design using Flexbox', icon: Smartphone, color: 'green' },
    { name: 'Introduction to Databases', icon: Database, color: 'rose' }
  ];

  return (
    <section id="journey" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t('journey.title')}
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-16"></div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Progress Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 flex items-center justify-center text-white shadow-lg`}>
                      {milestone.icon}
                    </div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="text-blue-600 dark:text-blue-400" size={40} />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Professional Certifications
            </h3>
          </div>

          <div className="text-center mb-2">
            <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-8">
              Certified by NxtWave
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 mb-10">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const colorMap: { [key: string]: { bg: string; border: string; text: string; iconBg: string; iconText: string } } = {
                blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-700 dark:text-blue-400', iconBg: 'bg-blue-100 dark:bg-blue-900/40', iconText: 'text-blue-600 dark:text-blue-400' },
                green: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-700', text: 'text-green-700 dark:text-green-400', iconBg: 'bg-green-100 dark:bg-green-900/40', iconText: 'text-green-600 dark:text-green-400' },
                yellow: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-700', text: 'text-yellow-700 dark:text-yellow-400', iconBg: 'bg-yellow-100 dark:bg-yellow-900/40', iconText: 'text-yellow-600 dark:text-yellow-400' },
                purple: { bg: 'bg-slate-100 dark:bg-slate-800/40', border: 'border-slate-300 dark:border-slate-600', text: 'text-slate-700 dark:text-slate-400', iconBg: 'bg-slate-200 dark:bg-slate-700/40', iconText: 'text-slate-600 dark:text-slate-400' },
                orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-700', text: 'text-orange-700 dark:text-orange-400', iconBg: 'bg-orange-100 dark:bg-orange-900/40', iconText: 'text-orange-600 dark:text-orange-400' },
                rose: { bg: 'bg-rose-50 dark:bg-rose-900/20', border: 'border-rose-200 dark:border-rose-700', text: 'text-rose-700 dark:text-rose-400', iconBg: 'bg-rose-100 dark:bg-rose-900/40', iconText: 'text-rose-600 dark:text-rose-400' }
              };
              const colors = colorMap[cert.color] || colorMap.blue;

              return (
                <div
                  key={index}
                  className={`group ${colors.bg} border-2 ${colors.border} p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colors.iconBg} rounded-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`${colors.iconText}`} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-xs font-semibold">
                          <CheckCircle2 size={14} className={`${colors.text}`} />
                          <span className={`${colors.text}`}>Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
              All certifications are verified and can be viewed in my certificate folder
            </p>
            <a
              href="https://drive.google.com/drive/folders/1K32fF5bl9FSONCPoRnDJo3Rs4eDU5zj0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg"
            >
              <Award size={20} />
              <span>View My Certificates</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
