'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaConnectdevelop,
  FaSitemap,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiDocker,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'education'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-gradient-to-br from-gray-900 to-blue-900 text-white min-h-screen'>
      <nav className='fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-90 z-50 backdrop-filter backdrop-blur-sm border-b border-gray-700'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <a href='#home' className='text-xl font-bold text-blue-400'>
              Sameer
            </a>
            <ul className='flex space-x-6'>
              {['Experience', 'Skills', 'Projects', 'Education'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item.toLowerCase())}
                    className={`text-sm font-semibold hover:text-blue-400 transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='container mx-auto px-4 pt-20'
      >
        <section
          id='home'
          className='min-h-screen flex flex-col md:flex-row items-center justify-center py-16'
        >
          <div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 whitespace-nowrap'
            >
              Sameer Bin Raees
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-2xl text-blue-300 mb-6'
            >
              FullStack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-left text-gray-300 mb-6'
            >
              <p className='mb-2'>
                <FaEnvelope className='inline mr-2' /> sameerbinraees@gmail.com
              </p>
              <p className='mb-2'>
                <FaMapMarkerAlt className='inline mr-2' /> Pakistan
              </p>
              <div className='flex space-x-4 mt-4'>
                <a
                  href='https://github.com/sameerbinraees'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href='https://www.linkedin.com/in/sameerbinraees'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='md:w-1/2'
          >
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700'>
              <h2 className='text-2xl font-bold mb-4 text-blue-400'>Personal Profile</h2>
              <p className='text-gray-300 leading-relaxed'>
                Passionate FullStack Developer with 4+ years of experience in MERN stack and cloud
                technologies. Skilled in creating scalable web applications, from intuitive UIs to
                robust backend systems. Proficient in both SQL and NoSQL databases, with expertise
                in AWS and serverless architectures. Committed to delivering high-quality solutions
                that drive business growth and enhance user experiences.
              </p>
            </div>
          </motion.div>
        </section>

        <section id='experience' className='py-16'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Work Experience</h2>
          <div className='space-y-6'>
            <ExperienceItem
              title='Full Stack Software Development Engineer'
              company='AMJ Tech Technology Solutions'
              period='JUN 2024 - Current — FULL TIME'
              companyLink='https://www.amjtechsolutions.com/'
              description={[
                'Designed and developed scalable, responsive UI components using React.js, HTML5, CSS3, and JavaScript to enhance user experience.',
                'Implemented a chatbot feature to improve user engagement and support capabilities.',
                'Optimized backend data processing using MongoDB aggregations, ensuring high-performance and efficient data retrieval.',
                'Collaborated with cross-functional teams to design and implement frontend solutions, utilizing Agile methodologies and version control systems like Git.',
                'Implemented best practices for code quality, maintainability, and reusability, following industry standards and design patterns.',
                'Contributed to technical roadmaps and solution architectures, aligning technology strategies with business objectives and utilizing cloud-based technologies.',
                'Implemented Zoho Billing to streamline invoicing and payment processes, improving financial management and reducing manual errors.',
              ]}
            />
            <ExperienceItem
              title='FullStack Developer (Node.js)'
              company='VisionX/PackageX'
              period='NOV 2020 - JUN 2024 — FULL TIME (HYBRID)'
              companyLink='https://packagex.io/'
              description={[
                'Successfully integrated multiple third-party APIs, streamlining label purchases and improving efficiency.',
                'Designed and developed email templates for Mailroom and Receive apps, serving over 200k recipients, improving user engagement and experience.',
                'Implemented Stripe as a payment method, increasing customer conversion and revenue by 25%.',
                'Mentored and supervised multiple interns, improving their full-stack development skills and providing valuable training and support.',
                'Utilized HubSpot APIs and admin portal, improving sales team efficiency and driving business growth.',
                'Revamped the pricing structure for the application, resulting in increased financial gains and improved profitability.',
                'Analyzed and recommended improvements to database tables, ensuring accurate and meaningful data storage.',
              ]}
            />
            <ExperienceItem
              title='FullStack Developer (MERN)'
              company='Extravis'
              period='MAR 2021 - JAN 2022 — PART TIME (REMOTELY)'
              companyLink='https://extravis.co/'
              description={[
                'Worked part-time with Extravis on 3cix, their HR software project, streamlining business hirings.',
                'Developed an ATS with advanced calendar features for scheduling interviews and coordinating with candidates.',
                'Collaborated with CTO to finalize product requirements and roadmap for efficient development and timely feature delivery.',
                'Launched the project with 25% increase in user adoption and positive client feedback.',
              ]}
            />
            <ExperienceItem
              title='Fullstack Developer'
              company='Ingenio'
              period='JUN 2020 - NOV 2020 — Full Time (Hybrid)'
              companyLink='#'
              description={[
                'Designed and developed responsive user interfaces using React.js and modern CSS frameworks, and built scalable backend APIs using Node.js and Express.',
                'Collaborated with clients to understand project requirements and delivered high-quality full-stack solutions, including a video call application with real-time communication features.',
                'Implemented performance optimizations and best practices to ensure seamless user experiences across all applications.',
                'Gained valuable industry experience and developed a strong foundation in full-stack development as a junior developer in my first professional role, setting the stage for future growth and success.',
              ]}
            />
          </div>
        </section>

        <section id='skills' className='py-16'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Technical Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <SkillCategory
              title='Backend'
              skills={['Node.js', 'Express.js', 'TypeScript', 'Type ORM', 'Mongoose', 'Sequelize']}
              icon={<FaNodeJs />}
            />

            <SkillCategory
              title='Frontend'
              skills={[
                'React.js',
                'Next.js',
                'Tailwind CSS',
                'Handlebars',
                'Styled Components',
                'Email Templates',
              ]}
              icon={<FaReact />}
            />

            <SkillCategory
              title='DevOps & DB'
              skills={['AWS', 'Vercel', 'Docker', 'Serverless', 'Postgres', 'Mongo DB']}
              icon={<FaAws />}
            />

            <SkillCategory
              title='Integrations'
              skills={[
                'Stripe',
                'Twilio/Sendgrid',
                'Easypost',
                'Zoho Billing',
                'Open Search',
                'Hubspot API',
              ]}
              icon={<FaConnectdevelop />}
            />
          </div>
        </section>

        <section id='projects' className='py-16'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <ProjectCard
              title='PackageX Receive'
              projectLink='https://packagex.io/products/receive'
              description='Package Tracking Pioneer project of PackageX. An enhanced and upgraded version of their existing product. Mailroom App application that focuses on the last-yard delivery of packages once they reach your building.'
              technologies={[
                'Node.js',
                'React.js',
                'Serverless',
                'AWS',
                'Stripe',
                'SendGrid',
                'Twilio',
                'Firebase',
                'Postgres',
                'OpenSearch',
                'Hubspot',
                'JOI',
              ]}
            />
            <ProjectCard
              title='PackageX Mailroom'
              projectLink='https://packagex.io/solutions/mailroom'
              description='Automate mailroom and package room operations. A flagship mobile application and logistics platform that enables digital mailroom operations across package receiving, forwarding, and shipping for commercial properties, universities, and other building types.'
              technologies={[
                'Node.js',
                'React.js',
                'Serverless',
                'AWS',
                'Stripe',
                'SendGrid',
                'Twilio',
                'Firebase',
                'Postgres',
                'ElasticSearch',
                'JOI',
              ]}
            />
            <ProjectCard
              title='ReviewArm'
              projectLink='https://www.reviewarm.com/'
              description='An AI-powered solution to automate review request processes, generating more positive reviews, managing negative reviews, and enhancing business growth.'
              technologies={[
                'Node.js',
                'React.js',
                'AWS',
                'Zoho CRM',
                'Zoho Billing',
                'SendGrid',
                'Twilio',
                'MongoDB',
              ]}
            />
            <ProjectCard
              title='ChatArm'
              projectLink='https://www.chatarm.ai/'
              description='AI-powered chatbot platform designed to help businesses enhance their customer interactions'
              technologies={[
                'Node.js',
                'React.js',
                'AWS',
                'Zoho CRM',
                'Zoho Billing',
                'ZeptoMail',
                'MongoDB',
                'LangChain',
                'RAG',
              ]}
            />
            <ProjectCard
              title='3cix - Applicant Tracking System'
              projectLink='https://3cix.com/'
              description='An ATS where job seekers can apply to jobs, recruiters can post jobs, and upload CVs for the talent pool to be processed through an AI model pipeline. Streamlined the hiring process, improving efficiency and candidate experience.'
              technologies={['React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'AI Integration']}
            />
            <ProjectCard
              title='Personal Portfolio Website'
              projectLink='#'
              description='Designed and developed a responsive personal portfolio website to showcase skills, projects, and professional experience. Implemented modern design principles and animations for an engaging user experience.'
              technologies={['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel']}
            />
            {/* TODO: Add ChatArm leadArm, shipd etc */}
          </div>
        </section>

        <section id='education' className='py-28'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Education</h2>
          <div className='max-w-3xl mx-auto'>
            <EducationItem
              degree='BS - Computer Science (BSCS)'
              school='National University of Sciences and Technology (NUST)'
              period='2016 - 2020'
              description='Completed a comprehensive program in computer science, focusing on software engineering principles, data structures, algorithms, and web technologies. Participated in various coding competitions and hackathons, honing problem-solving skills and teamwork abilities.'
            />
          </div>
        </section>
      </motion.div>

      <footer className='bg-gray-800 py-6 mt-16'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-gray-400'>&copy; Sameer Bin Raees, 2024, All rights reserved.</p>
        </div>
      </footer>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all'
        onClick={() =>
          window.open(
            'https://drive.google.com/file/d/1JvvEPX50N3aOJs07LlgaUzv_yg-qpL3E/view?usp=sharing',
            '_blank',
          )
        }
      >
        Download Resume
      </motion.button>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string[];
  icon: React.ReactElement;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700'
    >
      <div className='flex items-center mb-4'>
        {React.cloneElement(icon, { className: 'text-blue-400 text-3xl mr-2' })}
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
      <ul className='space-y-2'>
        {skills.map((skill) => (
          <li key={skill} className='flex items-center'>
            <span className='w-2 h-2 bg-blue-400 rounded-full mr-2'></span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ExperienceItem({
  title,
  company,
  period,
  companyLink,
  description,
}: {
  title: string;
  company: string;
  period: string;
  companyLink: string;
  description: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700'
    >
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-blue-400 mb-2'>
        <a href={companyLink}>{company}</a> | {period}
      </p>
      <ul className='list-disc list-inside text-gray-300'>
        {description.map((item, index) => (
          <li key={index} className='mb-1'>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EducationItem({
  degree,
  school,
  period,
  description,
}: {
  degree: string;
  school: string;
  period: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border border-gray-700'
    >
      <h3 className='text-xl font-semibold mb-2'>{degree}</h3>
      <p className='text-blue-400 mb-2'>
        {school} | {period}
      </p>
      <p className='text-gray-300'>{description}</p>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
  projectLink,
}: {
  title: string;
  description: string;
  projectLink: string;
  technologies: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className='bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700'
    >
      <h3 className='text-xl font-semibold mb-2'>
        <a href={projectLink}>{title}</a>
      </h3>
      <p className='text-gray-300 mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech) => (
          <span key={tech} className='bg-blue-500 text-white text-xs px-2 py-1 rounded-full'>
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
