import { Code, LayoutGrid as Layout, Bot, Wrench } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  color: string;
  skills: string[];
}

export default function Skills() {
  const { t } = useI18n();
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: <Code size={28} />,
      color: 'from-blue-500 to-blue-600',
      skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL', 'TypeScript']
    },
    {
      title: 'Web Development',
      icon: <Layout size={28} />,
      color: 'from-green-500 to-green-600',
      skills: ['React', 'Node.js', 'Express', 'Responsive Design', 'REST APIs', 'Tailwind CSS']
    },
    {
      title: 'AI & Automation',
      icon: <Bot size={28} />,
      color: 'from-amber-500 to-amber-600',
      skills: ['AI Workflows', 'Process Automation', 'ChatGPT Integration', 'Prompt Engineering']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={28} />,
      color: 'from-orange-500 to-orange-600',
      skills: ['Git', 'GitHub', 'VS Code', 'Chrome DevTools', 'Postman', 'npm']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          {t('skills.title')}
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-gray-700 dark:text-gray-300">Skills Mastered</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">04+</div>
            <div className="text-gray-700 dark:text-gray-300">Projects Built</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">05+</div>
            <div className="text-gray-700 dark:text-gray-300">Certifications Earned</div>
          </div>
        </div>
      </div>
    </section>
  );
}
