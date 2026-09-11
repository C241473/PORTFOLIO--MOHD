import { useState, useEffect } from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { CustomCursor } from './components/CustomCursor';
import { AIChatWidget } from './components/AIChatWidget';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { PressMedia } from './components/PressMedia';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'journalism', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-emerald-500 selection:text-black font-sans transition-colors duration-500 overflow-x-hidden">
      {/* 60fps Custom HUD Target Cursor in Emerald & Gold */}
      <CustomCursor />

      {/* 3D Three.js Interactive Canvas Background */}
      <ThreeBackground isDark={isDark} />

      {/* Editorial Grid Background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,var(--line-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--line-color)_1px,transparent_1px)] bg-size-[64px_64px] opacity-40 mask-[radial-gradient(ellipse_80%_80%_at_50%_30%,#000_40%,transparent_85%)]"
      />

      {/* Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Flow */}
      <main className="relative z-10 flex flex-col items-center">
        <Hero onNavigateContact={navigateToContact} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <PressMedia />
        <Achievements />
        <Contact />
      </main>

      {/* Tanzirul AI Assistant */}
      <AIChatWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
