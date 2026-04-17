/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Video,
  Palette,
  Server,
  Cpu,
  Mail as MailIcon,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Briefcase,
  Layers,
  Download
} from "lucide-react";

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-blue-500 font-medium tracking-wider uppercase text-sm"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full" />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sashikant_cv.pdf";
    link.download = "Sashikant_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-color)] py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-[var(--text-primary)] tracking-tighter"
        >
          SASHIKANT<span className="text-blue-500">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-blue-500 transition-colors text-[var(--text-secondary)] hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={downloadResume}
              className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm font-semibold flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="text-[var(--text-primary)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-[var(--text-primary)] hover:text-blue-500"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={downloadResume}
                className="w-full mt-4 px-5 py-3 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2"
              >
                <Download size={18} /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Sashikant_cv.pdf";
    link.download = "Sashikant_Gupta_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[var(--bg-primary)] text-[var(--text-secondary)]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-purple-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-semibold tracking-wide uppercase"
          >
            Available for Freelance
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight text-[var(--text-primary)]"
          >
            Hi, I'm <span className="text-gradient">Sashikant</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Aspiring Web Developer & Creative Designer dedicated to building
            digital experiences that matter.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              View Projects <ChevronRight size={20} />
            </a>
            <button
              onClick={downloadResume}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] border border-[var(--border-color)] rounded-xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <Download size={20} /> Resume
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] hidden md:block opacity-50"
        >
          <div className="w-6 h-10 border-2 border-[var(--text-secondary)] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[var(--text-secondary)] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="md:col-span-1">
            <SectionHeading subtitle="Who I Am">About Me</SectionHeading>
            <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                As a second-year <span className="text-[var(--text-primary)] font-medium text-blue-500">BSc IT student</span> at Informatics College, 
                I combine my academic foundation in technology with over 
                <span className="text-[var(--text-primary)] font-medium"> 4 years of creative experience</span> in video editing and graphic design.
              </p>
              <p>
                My journey began in the visual arts, where I mastered the craft of storytelling through pixels and frames. 
                Today, I am channeling that creative energy into web development and UI/UX design, leveraging 
                AI-driven tools and modern frameworks to build intuitive, high-performance applications.
              </p>
              <p>
                I am deeply interested in the intersection of cloud computing, software engineering, and digital media, 
                always striving to bridge the gap between technical complexity and artistic elegance.
              </p>
            </div>
          </div>
          <div className="relative group perspective-1000">
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
              className="preserve-3d transition-transform duration-500"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl bg-slate-800 border border-[var(--border-color)] overflow-hidden shadow-2xl">
                 <img 
                  src="../image/image_3d.png" 
                  alt="Sashikant Gupta" 
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Expertise">My Toolkit</SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming */}
            <SkillCard 
              icon={<Code2 size={32} className="text-blue-500" />} 
              title="Development" 
              skills={["Python", "Java", "SQL", "HTML5", "CSS3", "JavaScript"]} 
              accentColor="rgba(59, 130, 246, 0.5)"
            />
            {/* Creative */}
            <SkillCard 
              icon={<Video size={32} className="text-purple-500" />} 
              title="Creative Design" 
              skills={["Video Editing", "Content Creation", "Graphic Design", "Banner Design", "Thumbnail Design"]} 
              accentColor="rgba(168, 85, 247, 0.5)"
            />
            {/* Tools */}
            <SkillCard 
              icon={<Layers size={32} className="text-orange-500" />} 
              title="Tools & Platforms" 
              skills={["VS Code", "GitHub", "Figma", "Canva", "BlueJ"]} 
              accentColor="rgba(249, 115, 22, 0.5)"
            />
            {/* AI */}
            <SkillCard 
              icon={<Cpu size={32} className="text-green-500" />} 
              title="AI & Engineering" 
              skills={["Gemini", "ChatGPT", "AI Prompt Engineering", "AI Integrations"]} 
              accentColor="rgba(34, 197, 94, 0.5)"
            />
            {/* Infrastructure */}
            <SkillCard 
              icon={<Server size={32} className="text-pink-500" />} 
              title="Systems & Cloud" 
              skills={["Cloud Computing", "Networking", "Operating Systems", "UI/UX Foundations"]} 
              accentColor="rgba(236, 72, 153, 0.5)"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Selected Work">Featured Projects</SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard
              title="Watch E-Commerce"
              description="A modern, responsive frontend for a luxury timepiece store. Focused on clean UI and smooth interactions."
              tags={["HTML", "CSS", "Responsive"]}
              image="https://picsum.photos/seed/watch/600/400"
            />
            <ProjectCard
              title="Gym Management System"
              description="A CLI application built with Java using Object-Oriented principles for managing memberships and tracking schedules."
              tags={["Java", "BlueJ", "OOP"]}
              image="https://picsum.photos/seed/gym/600/400"
            />
            <ProjectCard
              title="Automatic Water Tank System"
              description="A technical hardware project integrating sensors to automate water level management efficiently."
              tags={["Hardware", "Automation", "College Project"]}
              image="https://picsum.photos/seed/water/600/400"
            />
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div id="experience">
            <SectionHeading subtitle="Professional">Experience</SectionHeading>
            <div className="space-y-12">
              <TimelineItem 
                icon={<Briefcase size={20} />}
                title="Freelance Video Editor & Graphic Designer"
                company="Self-Employed"
                date="2021 – Present"
                description="Managing high-end creative projects for diverse clients, specializing in real estate and music videos. Delivering consistent visual branding through banners, thumbnails, and engaging video content."
              />
            </div>
          </div>

          <div id="education">
            <SectionHeading subtitle="Academic">Education</SectionHeading>
            <div className="space-y-12">
              <TimelineItem 
                icon={<GraduationCap size={20} />}
                title="BSc Information Technology"
                company="Informatics College"
                date="2023 – Present"
                description="Currently in 2nd year, focusing on software engineering, cloud computing, and core IT principles."
              />
               <TimelineItem 
                icon={<GraduationCap size={20} />}
                title="High School"
                company="Himal College"
                date="Class 12"
                description="Specialized in science and technology foundations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading subtitle="Get In Touch">Let's Connect</SectionHeading>
          <p className="text-xl text-[var(--text-secondary)] mb-12">
            Interested in working together or just want to say hi? 
            My inbox is always open.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sashikantg07@gmail.com"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-xl transition-all flex items-center gap-3 shadow-xl shadow-blue-900/40"
            >
              <MailIcon /> sashikantg07@gmail.com
            </motion.a>
            
            <div className="flex gap-6 mt-4">
              <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:sashikantg07@gmail.com" icon={<Mail />} label="Email" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center border-t border-[var(--border-color)] opacity-50 text-sm bg-[var(--bg-primary)] text-[var(--text-secondary)]">
        <p>© {new Date().getFullYear()} Sashikant Gupta. Built with Passion & Caffeine.</p>
      </footer>
    </div>
  );
}

// --- Helper Components ---

const SkillCard = ({ icon, title, skills, accentColor }: { icon: React.ReactNode; title: string, skills: string[], accentColor: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      rotateX: 10, 
      rotateY: -5,
      y: -10,
      scale: 1.02,
      boxShadow: `0 25px 50px -12px ${accentColor}`
    }}
    className="perspective-1000 p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] transition-all group preserve-3d shadow-xl"
  >
    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:translate-z-10 transition-all shadow-inner">
      <div className="group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)] group-hover:translate-z-5 transition-transform">{title}</h3>
    <div className="flex flex-wrap gap-2 group-hover:translate-z-5 transition-transform">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 rounded-lg bg-white/5 text-[var(--text-secondary)] text-xs font-semibold hover:text-[var(--text-primary)] hover:bg-white/10 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, image }: { title: string; description: string; tags: string[]; image: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] mb-6 bg-slate-900 aspect-video shadow-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <div className="flex gap-4">
          <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <ExternalLink size={20} />
          </button>
          <button className="p-3 rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors">
            <Github size={20} />
          </button>
        </div>
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] group-hover:text-blue-500 transition-colors">{title}</h3>
    <p className="text-[var(--text-secondary)] mb-4 line-clamp-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="text-sm font-mono text-blue-500/80 font-semibold">#{tag}</span>
      ))}
    </div>
  </motion.div>
);

const TimelineItem = ({ icon, title, company, date, description }: { icon: React.ReactNode; title: string; company: string; date: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 border-l-2 border-[var(--border-color)]"
  >
    <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-color)] flex items-center justify-center text-blue-500 shadow-lg transition-colors">
      {icon}
    </div>
    <div className="mb-1 text-blue-500 font-bold tracking-wider text-sm">{date}</div>
    <h3 className="text-2xl font-bold mb-1 text-[var(--text-primary)]">{title}</h3>
    <div className="text-[var(--text-secondary)] font-medium mb-4 opacity-70">{company}</div>
    <p className="text-[var(--text-secondary)] leading-relaxed">{description}</p>
  </motion.div>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.1 }}
    href={href}
    className="p-4 rounded-full bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-blue-500 hover:border-blue-500/50 transition-all shadow-sm"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

