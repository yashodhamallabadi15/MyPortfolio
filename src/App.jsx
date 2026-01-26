import React, { useState, useEffect, useRef } from 'react';
import {
  FaCode, FaCogs, FaTools, FaCheckCircle, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaAward, FaCertificate, FaBriefcase, FaRunning,
  FaUsers, FaGithub, FaLinkedin, FaReact, FaPython, FaJava,
  FaDatabase, FaCloud, FaServer, FaMobileAlt, FaLaptopCode,
  FaGraduationCap, FaProjectDiagram, FaRocket, FaCalendarAlt,
  FaArrowRight, FaExternalLinkAlt, FaBuilding, FaTasks
} from 'react-icons/fa';
import { SiDjango, SiMysql, SiCypress, SiSelenium, SiJira, SiJenkins, SiHtml5, SiCss3 } from 'react-icons/si';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeExpTab, setActiveExpTab] = useState('current');
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      if (!isScrolling) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
    }, observerOptions);

    // Observe all sections
    ['home', 'skills', 'experience', 'projects', 'achievements', 'education'].forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        sectionRefs.current[section] = element;
      }
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Re-enable intersection observer after scrolling completes
    if (scrollTimeout) clearTimeout(scrollTimeout);
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
    setScrollTimeout(timeout);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${resumeData.personalInfo.phone}`);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${resumeData.personalInfo.email}?subject=Portfolio Inquiry&body=Hello Yashodha, I came across your portfolio and would like to connect...`;
  };

  const SkillBar = ({ level }) => (
    <div className="skill-bar">
      <div
        className="skill-progress"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );

  const resumeData = {
    personalInfo: {
      name: "Yashodha Mallabadi",
      title: "Software Engineer",
      email: "yashodha.mallabadi15@gmail.com",
      phone: "+91 8152888107",
      location: "Bangalore, India",
      github: "https://github.com/yashodhamallabadi15",
      linkedin: "https://www.linkedin.com/in/yashodha-mallabadi-2a5b8b175/",
      summary: "Experienced Full Stack Developer with 4+ years of expertise in building scalable web applications using modern tech stacks,Strong background in frontend, backend, and database development with a focus on performance and scalability, Driven to create responsive, efficient, and user- friendly digital experiences."
    },

    skills: {
      languages: [
        { name: "JavaScript", icon: <FaCode />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "HTML5", icon: <SiHtml5 />, level: 95 },
        { name: "CSS", icon: <SiCss3 />, level: 95 },
        { name: "Java", icon: <FaJava />, level: 80 }
      ],
      frameworks: [
        { name: "React.js", icon: <FaReact />, level: 90 },
        { name: "Django", icon: <SiDjango />, level: 85 },
        { name: "Bootstrap", icon: <FaCogs />, level: 85 },
        { name: "Selenium", icon: <SiSelenium />, level: 60 },
        { name: "Cypress", icon: <SiCypress />, level: 50 }
      ],
      tools: [
        { name: "GitHub", icon: <FaTools />, level: 90 },
        { name: "VS Code", icon: <FaCode />, level: 95 },
        { name: "Postman", icon: <FaTools />, level: 85 },
        { name: "Jira", icon: <SiJira />, level: 95 },
        { name: "Jenkins, CI/CD", icon: <SiJenkins />, level: 75 },
        { name: "MySQL", icon: <SiMysql />, level: 50 }
      ]
    },

    achievements: [
      {
        id: 1,
        icon: <FaCertificate />,
        title: "Certified Java Developer",
        description: "Earned Java Developer certificate from INVENTATEQ Institute, Bangalore",
        color: "#FF6B6B"
      },
      {
        id: 2,
        icon: <FaCertificate />,
        title: "Certified Python Developer",
        description: "Earned Python Developer certificate from INVENTATEQ Institute, Bangalore",
        color: "#4ECDC4"
      },
      {
        id: 3,
        icon: <FaBriefcase />,
        title: "Full Stack Development Internship",
        description: "Completed internship at Seventh Sense Talent using Python",
        color: "#45B7D1"
      },
      {
        id: 4,
        icon: <FaAward />,
        title: "Bright Mind Award",
        description: "Honoured with the Bright Mind Award by ASM Technologie's Managing Director",
        color: "#96CEB4"
      }
    ],

    experience: {
      current: {
        company: "Newtechspot and Electro Services",
        position: "Software Engineer",
        period: "July 2025 - Present",
        duration: "Current",
        location: "Bangalore",
        description: "Leading the development of enterprise-level applications using React and Django. Focused on creating scalable, maintainable, and performant solutions.",
        highlights: [
          "Built full-stack applications to manage and automate daily business operations.",
          "Created secure login and role-based access for different users.",
          "Improved system performance by optimizing APIs and database queries.",
          "Designed easy-to-use and responsive user interfaces."
        ],
        projects: [
          {
            name: "HRMS System",
            icon: <FaUsers />,
            tech: ["HTML", "CSS", "React", "Javascript", "Django", "python", "Git"],
            desc: "Built a full-stack HRMS platform for employee lifecycle management, attendance, payroll, and administrative workflows.",
            color: "#667eea",
            role: "Full Stack Developer",
            achievements: ["Reduced payroll processing time by 70%", "Improved user satisfaction by 45%"]
          },
          {
            name: "School Management",
            icon: <FaGraduationCap />,
            tech: ["HTML", "CSS", "React", "Javascript", "Django", "python", "Git"],
            desc: "Developing a full-stack school management system for managing student data, teacher workflows, attendance, and administrative operations.",
            color: "#764ba2",
            role: "Full Stack Developer",
            achievements: ["Serving 50+ schools nationwide", "Automated 80% of administrative tasks"]
          },
          {
            name: "Assets Management",
            icon: <FaDatabase />,
            tech: ["HTML", "CSS", "React", "Javascript", "Git"],
            desc: "Developing an asset and inventory management system to monitor assets, stock movement, and resource utilization.",
            color: "#f093fb",
            role: "Full Stack Developer",
            achievements: ["Reduced asset loss by 90%", "Real-time tracking with WebSocket"]
          }
        ]
      },
      previous: {
        company: "ASM Technologies",
        position: "Software Engineer",
        period: "Nov 2021 - June 2025",
        duration: "3.5 Years",
        location: "Bangalore",
        description: "Developed and tested enterprise applications with focus on automation, CI/CD integration, and security testing.",
        highlights: [
          "Developed and maintained scalable backend and full-stack applications.",
          "Designed REST APIs and integrated third-party services for smooth functionality.",
          "Used CI/CD pipelines for automated build, testing, and deployment, and managed tasks, raised bugs using Jira.",
          "Performed manual and automation testing to ensure high-quality and reliable software."
        ],
        projects: [
          {
            name: "Travel Guide",
            icon: <FaMapMarkerAlt />,
            tech: ["Python", "Django", "AWS", "Git"],
            desc: "Developed a personalized travel recommendation and booking platform with itinerary planning features.",
            color: "#4facfe",
            role: "Backend Developer",
          },
          {
            name: "Illumio Security Platform",
            icon: <FaCloud />,
            tech: ["Java", "Selenium", "Cypress", "JavaScript", "Jira", "Bitbucket", "Jenkins", "CI/CD"],
            desc: "QA engineer with expertise in manual and automation testing, along with hands-on experience in frontend and backend development.",
            color: "#00f2fe",
            role: "Full Stack Developer, QA Engineer",
          }
        ]
      }
    },

    education: {
      institution: "BLDEAs College of Engineering & Technology",
      degree: "B.E in Computer Science and Engineering",
      period: "2017 - 2021",
      cgpa: "CGPA: 7.64",
      dissertation: "Developed a machine learning model for blood group and component classification using image processing and deep learning techniques.",
      icon: <FaGraduationCap />
    },

    activities: [
      {
        id: 1,
        icon: <FaRunning />,
        text: "State-level Badminton Player",
        highlight: "Tournament Participant"
      },
      {
        id: 2,
        icon: <FaRunning />,
        text: "Office Cricket Team",
        highlight: "Active Player"
      },
      {
        id: 3,
        icon: <FaUsers />,
        text: "Technical Project Leadership",
        highlight: "Team Lead"
      }
    ]
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-text">Hey there</span>
              <span className="logo-dot">.</span>
            </div>
            <nav className="nav">
              {['home', 'skills', 'experience', 'projects', 'achievements', 'education'].map((item) => (
                <button
                  key={item}
                  className={`nav-btn ${activeSection === item ? 'active' : ''}`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">Hello, I'm</span>
                <span className="title-name">{resumeData.personalInfo.name}</span>
                <span className="title-role">{resumeData.personalInfo.title}</span>
              </h1>
              <p className="hero-description">
                {resumeData.personalInfo.summary}
              </p>
              <div className="hero-contact">
                <div className="contact-item" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                  <FaEnvelope className="contact-icon" />
                  <span>{resumeData.personalInfo.email}</span>
                </div>
                <div className="contact-item" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                  <FaPhone className="contact-icon" />
                  <span>{resumeData.personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{resumeData.personalInfo.location}</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => scrollToSection('experience')}
                >
                  View My Work
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="code-snippet">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-filename">portfolio.js</span>
                </div>
                <pre className="code-content">
                  {`const developer = {
  name: "Yashodha",
  role: "Full Stack Developer",
  skills: ["React", "Django", "Python", "JavaScript"],
  experience: "4 years 3 months",
  passion: "Building amazing web applications"
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaCode className="section-icon" />
              Technical Skills
            </h2>
            <p className="section-subtitle">Technologies I work with</p>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">
                <FaCode />
                Languages
              </h3>
              <div className="skills-list">
                {resumeData.skills.languages.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <FaCogs />
                Frameworks
              </h3>
              <div className="skills-list">
                {resumeData.skills.frameworks.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">
                <FaTools />
                Tools & Databases
              </h3>
              <div className="skills-list">
                {resumeData.skills.tools.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaLaptopCode className="section-icon" />
              Work Experience
            </h2>
            <p className="section-subtitle">My professional journey and contributions</p>
          </div>

          <div className="experience-tabs">
            <button
              className={`exp-tab-btn ${activeExpTab === 'current' ? 'active' : ''}`}
              onClick={() => setActiveExpTab('current')}
            >
              Current Role
            </button>
            <button
              className={`exp-tab-btn ${activeExpTab === 'previous' ? 'active' : ''}`}
              onClick={() => setActiveExpTab('previous')}
            >
              Previous Experience
            </button>
          </div>

          <div className="experience-main-card">
            <div className="experience-header">
              <div className="company-header">
                <div className="company-icon">
                  <FaBuilding />
                </div>
                <div className="company-details">
                  <h3 className="company-name">{resumeData.experience[activeExpTab].company}</h3>
                  <div className="company-meta">
                    <span className="position-badge">
                      <FaBriefcase /> {resumeData.experience[activeExpTab].position}
                    </span>
                    <span className="location-badge">
                      <FaMapMarkerAlt /> {resumeData.experience[activeExpTab].location}
                    </span>
                    <span className="duration-badge">
                      <FaCalendarAlt /> {resumeData.experience[activeExpTab].period}
                    </span>
                  </div>
                </div>
              </div>
              <div className="experience-duration">
                <span className="duration-text">{resumeData.experience[activeExpTab].duration}</span>
              </div>
            </div>

            <div className="experience-content">
              <div className="experience-description-card">
                <h4 className="content-title">
                  <FaTasks /> Role Overview
                </h4>
                <p className="role-description">{resumeData.experience[activeExpTab].description}</p>

                <div className="highlights-section">
                  <h5 className="highlights-title">Key Achievements</h5>
                  <ul className="highlights-list">
                    {resumeData.experience[activeExpTab].highlights.map((highlight, index) => (
                      <li key={index} className="highlight-item">
                        <FaCheckCircle className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="projects-showcase">
                <h4 className="projects-title">
                  <FaProjectDiagram /> Featured Projects
                </h4>
                <div className="projects-grid">
                  {resumeData.experience[activeExpTab].projects.map((project, index) => (
                    <div
                      key={index}
                      className="project-card"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}10 0%, ${project.color}05 100%)`,
                        borderLeft: `4px solid ${project.color}`
                      }}
                    >
                      <div className="project-header">
                        <div className="project-icon" style={{ color: project.color }}>
                          {project.icon}
                        </div>
                        <div className="project-title">
                          <h5>{project.name}</h5>
                          <span className="project-role">{project.role}</span>
                        </div>
                      </div>
                      <p className="project-description">{project.desc}</p>

                      <div className="project-tech-stack">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="tech-tag"
                            style={{
                              backgroundColor: `${project.color}20`,
                              color: project.color
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaProjectDiagram className="section-icon" />
              All Projects
            </h2>
            <p className="section-subtitle">My complete portfolio of work</p>
          </div>

          <div className="projects-showcase-grid">
            {Object.values(resumeData.experience).flatMap(exp =>
              exp.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="project-showcase-card"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                    borderTop: `4px solid ${project.color}`
                  }}
                >
                  <div className="project-showcase-header">
                    <div className="project-showcase-icon" style={{ color: project.color }}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="project-showcase-name">{project.name}</h3>
                      <span className="project-showcase-role">{project.role}</span>
                    </div>
                  </div>
                  <p className="project-showcase-desc">{project.desc}</p>
                  <div className="project-showcase-tech">
                    {project.tech.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="tech-showcase-tag"
                        style={{ backgroundColor: `${project.color}25`, color: project.color }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section achievements-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaAward className="section-icon" />
              Achievements & Activities
            </h2>
            <p className="section-subtitle">Recognition and extracurriculars</p>
          </div>

          <div className="achievements-grid">
            {resumeData.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="achievement-card"
                style={{ borderColor: achievement.color }}
              >
                <div className="achievement-icon" style={{ backgroundColor: achievement.color }}>
                  {achievement.icon}
                </div>
                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-desc">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="activities-section">
            <h3 className="activities-title">
              <FaRunning />
              Extracurricular Activities
            </h3>
            <div className="activities-list">
              {resumeData.activities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    {activity.icon}
                  </div>
                  <div className="activity-content">
                    <span className="activity-text">{activity.text}</span>
                    <span className="activity-highlight">{activity.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h2>
            <p className="section-subtitle">Academic background</p>
          </div>

          <div className="education-card">
            <div className="education-icon">
              {resumeData.education.icon}
            </div>
            <div className="education-content">
              <h3 className="institution">{resumeData.education.institution}</h3>
              <h4 className="degree">{resumeData.education.degree}</h4>
              <div className="education-details">
                <span className="period">{resumeData.education.period}</span>
                <span className="cgpa">{resumeData.education.cgpa}</span>
              </div>
              <div className="dissertation-box">
                <h5>Project:</h5>
                <p className="dissertation-content">{resumeData.education.dissertation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-contact-section">
              <h4 className="contact-title" id="contact">Get in Touch</h4>
              <div className="contact-details">
                <div className="footer-contact-item" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
                  <FaEnvelope className="footer-contact-icon" />
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Email</span>
                    <span className="footer-contact-value">{resumeData.personalInfo.email}</span>
                  </div>
                </div>
                <div className="footer-contact-item" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                  <FaPhone className="footer-contact-icon" />
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Phone</span>
                    <span className="footer-contact-value">{resumeData.personalInfo.phone}</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <div className="footer-contact-info">
                    <span className="footer-contact-label">Location</span>
                    <span className="footer-contact-value">{resumeData.personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a
                  href={resumeData.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={resumeData.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Yashodha M. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;