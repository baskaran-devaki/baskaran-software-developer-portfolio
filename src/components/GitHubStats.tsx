import { Github, GitBranch, Star, Code2, TrendingUp, ExternalLink } from 'lucide-react';

export default function GitHubStats() {
  const gitHubStats = [
    { label: 'Total Repositories', value: '5+', icon: GitBranch, color: 'blue' },
    { label: 'GitHub Stars', value: '5+', icon: Star, color: 'yellow' },
    { label: 'Code Commits', value: '100+', icon: TrendingUp, color: 'green' },
    { label: 'Projects', value: '3+', icon: Code2, color: 'purple' }
  ];

  const topLanguages = [
    { name: 'JavaScript', percentage: 35, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', percentage: 25, color: 'from-blue-400 to-blue-600' },
    { name: 'Python', percentage: 18, color: 'from-green-400 to-green-600' },
    { name: 'HTML/CSS', percentage: 15, color: 'from-orange-400 to-orange-600' },
    { name: 'Other', percentage: 7, color: 'from-gray-400 to-gray-600' }
  ];

  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Github className="text-gray-900 dark:text-white" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            GitHub Activity
          </h2>
        </div>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {gitHubStats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorMap: { [key: string]: { bg: string; text: string; icon: string } } = {
              blue: { bg: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', icon: 'text-blue-500' },
              yellow: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', text: 'text-yellow-600 dark:text-yellow-400', icon: 'text-yellow-500' },
              green: { bg: 'bg-green-50 dark:bg-green-900/20', text: 'text-green-600 dark:text-green-400', icon: 'text-green-500' },
              purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', text: 'text-purple-600 dark:text-purple-400', icon: 'text-purple-500' }
            };
            const colors = colorMap[stat.color] || colorMap.blue;

            return (
              <div
                key={index}
                className={`${colors.bg} border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-3">
                  <IconComponent className={`${colors.icon}`} size={28} />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <p className={`text-sm font-semibold ${colors.text}`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Top Languages
          </h3>
          <div className="space-y-5">
            {topLanguages.map((lang, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {lang.name}
                  </span>
                  <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                    {lang.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${lang.color} transition-all duration-500`}
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-700">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Explore My GitHub Profile
              </h3>
              <p className="text-gray-300">
                View all repositories, contributions, and projects on GitHub. Check out my recent work and coding practices.
              </p>
            </div>
            <a
              href="https://github.com/baskaran-devaki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-lg transition-all transform hover:scale-105 font-semibold shadow-lg whitespace-nowrap"
            >
              <Github size={20} />
              <span>Visit GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
