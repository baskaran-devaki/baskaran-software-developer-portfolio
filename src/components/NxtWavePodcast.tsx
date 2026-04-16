import { Award, ExternalLink, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../contexts/I18nContext';

interface Certificate {
  id: number;
  title: string;
  date: string;
  speaker?: string;
  description: string;
  keyInsights: string[];
  fileUrl: string;
}

export default function NxtWavePodcast() {
  const [certificates] = useState<Certificate[]>([
    {
      id: 1,
      title: 'Inside the Startup Ecosystem',
      date: '17-Mar-2026',
      speaker: 'Vinutha Naga Rallapalli',
      description: 'Insights into startup journey, funding, and entrepreneurship.',
      keyInsights: ['Startup validation process', 'Investor & funding basics'],
      fileUrl: 'https://drive.google.com/file/d/1G6dQn6F9cAxJocfK0-wFPQ6ZVpO1E2uz/view?usp=sharing'
    },
    {
      id: 2,
      title: 'Building Job-Ready Skills in AI Era',
      date: '27-Jan-2026',
      speaker: 'Dheeraj Avvari',
      description: 'Practical skills needed to succeed in AI-driven job market.',
      keyInsights: ['Industry-ready skills', 'AI in real-world'],
      fileUrl: 'https://drive.google.com/file/d/1Z60O8SZUhEeav_RgCjtaxC1JshD98CcG/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'LLMs & Agentic AI 101',
      date: '13-Sep-2025',
      speaker: 'Drishti Wali',
      description: 'Overview of LLMs, NLP, and modern AI systems.',
      keyInsights: ['AI fundamentals', 'Future tech trends'],
      fileUrl: 'https://drive.google.com/file/d/10NyrF6f2ZWKmefYMLHsKG9ojzpuRdkQn/view?usp=drive_link'
    },
    {
      id: 4,
      title: 'Product Thinking & Real-World Skills',
      date: '16-Aug-2025',
      speaker: 'Mrinal Ahlawat (Google)',
      description: 'What top companies expect from engineers.',
      keyInsights: ['Product mindset', 'Real-world problem solving'],
      fileUrl: 'https://drive.google.com/file/d/1-ADDF8zxbJQxZa39fQ-ZlHklILbne_nR/view?usp=drive_link'
    },
    {
      id: 5,
      title: 'Interview Hacks from Hiring Leader',
      date: '27-Jun-2025',
      speaker: 'Harshal Nagar',
      description: 'Tips to crack interviews and get hired.',
      keyInsights: ['Resume optimization', 'Interview strategy'],
      fileUrl: 'https://drive.google.com/file/d/1_ERJTU_9yxInn_89pOqURXD8HvrCrdym/view?usp=drive_link'
    },
    {
      id: 6,
      title: 'Think Like a CEO',
      date: '17-May-2025',
      speaker: 'Kishore Indukuri',
      description: 'Leadership and entrepreneurial mindset development.',
      keyInsights: ['Strategic thinking', 'Leadership mindset'],
      fileUrl: 'https://drive.google.com/file/d/1sHDdvlLPkDUpJC4RgesPZO_w1DzB_OpU/view?usp=drive_link'
    },
    {
      id: 7,
      title: 'Autonomous Vehicles Career',
      date: '12-Apr-2025',
      speaker: 'Shinpei Kato',
      description: 'Future opportunities in self-driving tech industry.',
      keyInsights: ['Robotics careers', 'Mobility innovation'],
      fileUrl: 'https://drive.google.com/file/d/1S6Y5mDlycsni4P3mEIQz0d-vgsgLZb1O/view?usp=drive_link'
    },
    {
      id: 8,
      title: 'Brain Fitness for High Achievers',
      date: '18-Mar-2025',
      speaker: 'Dr. Patrick Porter',
      description: 'Mental performance and productivity strategies.',
      keyInsights: ['Focus improvement', 'Cognitive performance'],
      fileUrl: 'https://drive.google.com/file/d/1hoFMytVlL5fBY1yu2321oqAjqS2oO8l7/view?usp=drive_link'
    },
    {
      id: 9,
      title: 'Skills for AI Jobs',
      date: '20-Feb-2025',
      speaker: 'Pranjal Singh',
      description: 'Skills required to break into AI careers.',
      keyInsights: ['AI fundamentals', 'Career readiness'],
      fileUrl: 'https://drive.google.com/file/d/1pSppXq1Q1qNakRyy9hhX1bvSEUlh_UyI/view?usp=drive_link'
    },
    {
      id: 10,
      title: 'Most In-Demand Engineer 2025',
      date: '9-Jan-2025',
      speaker: 'Lalitha Tallapragada',
      description: 'Career strategies for future engineers.',
      keyInsights: ['Industry demand', 'Skill development'],
      fileUrl: 'https://drive.google.com/file/d/1IblUnBePkqI0a-GLWB7h3s8wdNCsK7Fe/view?usp=drive_link'
    },
    {
      id: 11,
      title: 'World-Class Engineer',
      date: '21-Nov-2024',
      speaker: 'Mohan KRK',
      description: 'Becoming a top-level engineer with proven strategies.',
      keyInsights: ['Engineering excellence', 'Growth mindset'],
      fileUrl: 'https://drive.google.com/file/d/1ZZSRFwi7izWv-_ihchVlkhHnUjzDjopA/view?usp=drive_link'
    },
    {
      id: 12,
      title: 'Interview Game Changer',
      date: '30-Oct-2024',
      speaker: 'Madhura Gade',
      description: 'What employers really expect in interviews.',
      keyInsights: ['Employer psychology', 'Interview tactics'],
      fileUrl: 'https://drive.google.com/file/d/1lGqY88tM9ooGIwktt3ZV0JR77_pZ8KNK/view?usp=drive_link'
    },
    {
      id: 13,
      title: 'Beyond Tech Skills',
      date: '9-Oct-2024',
      speaker: 'Kalyan Chandrapu',
      description: 'Importance of soft skills in tech career.',
      keyInsights: ['Communication', 'Emotional intelligence'],
      fileUrl: 'https://drive.google.com/file/d/1-p9RsIYZ2KoJjgpl17Q5y7MM6c3XQpjq/view?usp=drive_link'
    },
    {
      id: 14,
      title: 'NxtCode 7 Under 7 Challenge',
      date: '1-Oct-2024',
      description: 'Competitive coding challenge.',
      keyInsights: ['Problem-solving', 'Speed coding'],
      fileUrl: 'https://drive.google.com/file/d/1pv_olh45AXRgZAEojAfe4wp5joqnSlgL/view?usp=drive_link'
    },
    {
      id: 15,
      title: 'Tips to Crack Data Scientist Interview',
      date: '17-Jul-2024',
      speaker: 'Abhishek Das',
      description: 'Preparing for data science interviews.',
      keyInsights: ['Case studies', 'ML questions'],
      fileUrl: 'https://drive.google.com/file/d/1I4o1TzxXy-7fnLlR6KBAtunXlcSQayGi/view?usp=drive_link'
    },
    {
      id: 16,
      title: 'Project Management 101',
      date: '3-Jul-2024',
      speaker: 'Vinay Nandina',
      description: 'Basics of project management.',
      keyInsights: ['Planning', 'Stakeholder management'],
      fileUrl: 'https://drive.google.com/file/d/1S8zZVxqCLoqhAB1rpjwCONH3ih3JTHgY/view?usp=drive_link'
    },
    {
      id: 17,
      title: 'How to Become Data Scientist at Microsoft',
      date: '18-Jun-2024',
      speaker: 'Tezan Sahu',
      description: 'Microsoft data science career insights.',
      keyInsights: ['Skills required', 'Hiring process'],
      fileUrl: 'https://drive.google.com/file/d/1GWwsV_04QhmxpPdyVspdMj4-p0nA93n6/view?usp=drive_link'
    },
    {
      id: 18,
      title: '7 Habits to Become Successful',
      date: '16-Apr-2024',
      speaker: 'Krishna Raghavan',
      description: 'Success habits and leadership mindset.',
      keyInsights: ['Discipline', 'Long-term vision'],
      fileUrl: 'https://drive.google.com/file/d/1lsgnRne38Lt6U7oyPbkF7xKWvb8R5jzf/view?usp=drive_link'
    },
    {
      id: 19,
      title: 'Fundamentals of Software Engineering',
      date: '27-Feb-2024',
      speaker: 'Ritesh Shah',
      description: 'Core software engineering concepts.',
      keyInsights: ['Clean code', 'Development lifecycle'],
      fileUrl: 'https://drive.google.com/file/d/1wouL7YUx7G8ONaIaXrj_e0OJji1BmB2L/view?usp=drive_link'
    },
    {
      id: 20,
      title: 'Product Management Blueprint',
      date: '14-Feb-2024',
      speaker: 'Sandeep Chadda',
      description: 'Product management fundamentals.',
      keyInsights: ['Product strategy', 'Roadmaps'],
      fileUrl: 'https://drive.google.com/file/d/1O4l-RzLa-Mj2mTzpphhmhwjnKqlzczCd/view?usp=drive_link'
    },
    {
      id: 21,
      title: 'Building Career in AI',
      date: '9-Jan-2024',
      speaker: 'Ankur Debnath',
      description: 'Starting a career in AI.',
      keyInsights: ['AI roadmap', 'Industry skills'],
      fileUrl: 'https://drive.google.com/file/d/1Ehp50q7XlvyjVc8Gda0xPWhdeJR9Mumf/view?usp=drive_link'
    },
    {
      id: 22,
      title: 'Internet of Things',
      date: '6-Dec-2023',
      speaker: 'Johan Stokking',
      description: 'IoT concepts and applications.',
      keyInsights: ['IoT basics', 'Real-world usage'],
      fileUrl: 'https://drive.google.com/file/d/1lDhVvgT9_aggNNwd0zKNr9w6j51dwoKI/view?usp=drive_link'
    },
    {
      id: 23,
      title: 'Becoming Security Engineer',
      date: '21-Nov-2023',
      speaker: 'Sandeep Bhandari',
      description: 'Cybersecurity career guidance.',
      keyInsights: ['Security basics', 'Career path'],
      fileUrl: 'https://drive.google.com/file/d/1GC98jknbQjq6uF8CkHChOQBLvv6JT0Xw/view?usp=drive_link'
    },
    {
      id: 24,
      title: 'AWS Fundamentals',
      date: '17-Oct-2023',
      speaker: 'Irshad Chouhan',
      description: 'AWS and cloud computing basics.',
      keyInsights: ['Cloud services', 'Career path'],
      fileUrl: 'https://drive.google.com/file/d/1qyx70l-ypGcgnBBcO-43FHdWaKRytQ6x/view?usp=drive_link'
    },
    {
      id: 25,
      title: 'Data Infrastructure at LinkedIn',
      date: '6-Sep-2023',
      speaker: 'Arun Mahapatro',
      description: 'Scalable data systems at LinkedIn.',
      keyInsights: ['Big data', 'Scalability'],
      fileUrl: 'https://drive.google.com/file/d/1jFdvhgnCWpmHr8Eg7LBMa_SslqlXI7zr/view?usp=drive_link'
    },
    {
      id: 26,
      title: 'Data Science 101',
      date: '16-Aug-2023',
      speaker: 'Karthikeya Racharla',
      description: 'Basics of data science.',
      keyInsights: ['Data analysis', 'Real applications'],
      fileUrl: 'https://drive.google.com/file/d/1o81NKoduvFYBmCT1YBYXHAs_qgeoxFNd/view?usp=drive_link'
    },
    {
      id: 27,
      title: 'MAANG Preparation',
      date: '11-Jul-2023',
      speaker: 'Ankita (Apple)',
      description: 'Preparation for top tech companies.',
      keyInsights: ['Interview prep', 'Coding skills'],
      fileUrl: 'https://drive.google.com/file/d/1OKONZQBezwKsN7X6fv9xqNy50T2pimwH/view?usp=drive_link'
    },
    {
      id: 28,
      title: 'AI/ML Stories from Samsung',
      date: '20-Jun-2023',
      speaker: 'Sriram Varun',
      description: 'AI/ML real-world implementation.',
      keyInsights: ['Enterprise AI', 'Product thinking'],
      fileUrl: 'https://drive.google.com/file/d/1ZQe17qpzI8V1lrwBGs3tPj38Q5vAo0WE/view?usp=drive_link'
    }
  ]);

  const { t } = useI18n();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateScrollWidth = () => {
      setScrollWidth(container.scrollWidth);
    };

    updateScrollWidth();
    window.addEventListener('resize', updateScrollWidth);

    return () => window.removeEventListener('resize', updateScrollWidth);
  }, [certificates]);

  return (
    <section id="nxtwave" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="text-blue-600" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {t('nxtwave.title')}
            </h2>
          </div>

          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              <Zap size={16} />
              Active Learner
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Continuous Learning through Podcasts & Industry Insights
          </h3>

          <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('nxtwave.description')}
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6"
          style={{
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            @keyframes infiniteScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .certificate-card {
              animation: slideIn 0.6s ease-out forwards;
            }
            .scroll-container {
              animation: infiniteScroll ${scrollWidth ? scrollWidth / 120 : 60}s linear infinite;
              animation-play-state: running;
            }
            .scroll-container:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="scroll-container flex gap-6">
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={`${cert.id}-${Math.floor(index / certificates.length)}`}
                className="certificate-card flex-shrink-0 w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-200 dark:border-gray-700 overflow-hidden"
                style={{ animationDelay: `${(index % certificates.length) * 50}ms` }}
                onClick={() => window.open(cert.fileUrl, '_blank')}
              >
              <div className="h-full flex flex-col p-6">
                <div className="mb-3">
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                    {cert.date}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-2 line-clamp-2">
                    {cert.title}
                  </h4>
                  {cert.speaker && (
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      By {cert.speaker}
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                  {cert.description}
                </p>

                <div className="space-y-2 mb-4 flex-grow">
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase">Key Insights:</p>
                  <ul className="space-y-1">
                    {cert.keyInsights.map((insight, i) => (
                      <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                    <Award size={16} />
                    Certificate
                  </span>
                  <ExternalLink size={18} className="text-gray-400 dark:text-gray-500" />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Click any card to view certificate on Google Drive
          </p>

        </div>
      </div>
    </section>
  );
}
