import { Download, Mail, MessageCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .profile-photo {
          animation: fadeInScale 1s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/Baskaran.jpg"
              alt="Baskaran R"
              className="profile-photo w-72 h-72 md:w-50 md:h-50 rounded-full object-full cover shadow-2xl border-4 border-white dark:border-gray-700 hover:shadow-3xl transition-shadow duration-300"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            BASKARAN <span className="text-blue-900">R</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.title')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('projects.viewProject')}
            </a>
            <a
              href="https://docs.google.com/document/d/17vK41bWUpR5E9f1btC8qYHPYUTgcbCHu/edit?usp=drive_link&ouid=110155258988125851637&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              {t('contact.title')}
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:baskar.sona46@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-gray-700 dark:text-gray-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://wa.me/918778243596"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-gray-700 dark:text-gray-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href="https://github.com/baskaran-devaki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-gray-700 dark:text-gray-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/baskarandevaki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-gray-700 dark:text-gray-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com/baskarandevaki"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 text-gray-700 dark:text-gray-300"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
