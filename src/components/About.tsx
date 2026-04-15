import { BookOpen, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm an aspiring software developer currently on an intensive learning journey with NxtWave,
              mastering modern web development technologies and AI-powered workflow automation.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My passion lies in building practical, real-world applications that solve problems and
              create value. I'm constantly exploring new technologies and best practices to stay at the
              forefront of software development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Through NxtWave's comprehensive curriculum, I'm developing a strong foundation in full-stack
              development, coupled with hands-on experience in AI tools and automation workflows that are
              shaping the future of software engineering.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <BookOpen className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Actively learning and mastering new technologies through structured courses and hands-on projects
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Goal-Oriented
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Focused on building a strong portfolio and becoming a job-ready software developer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    AI & Automation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Exploring AI-powered tools and workflow automation to enhance productivity and innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
