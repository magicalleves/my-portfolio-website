import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import profilePic from './assets/Pic.png'; // This should be your profile picture path
import cvFile from './assets/CV.pdf'; // This should be the path to your CV
import '@fortawesome/fontawesome-free/css/all.min.css';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const linkVariant = {
  active: { scale: 1.1, transition: { duration: 0.5 } },
  inactive: { scale: 1 }
};

const pVariants = {
  hidden: { opacity: 0, x: "-100%", scale: 1 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  visibleWithDelay: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } },
  visibleWithDelay2nd: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 1 } }
};

const pVariantsC = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  visibleWithDelay: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } },
  visibleWithDelay2nd: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.8 } }
};

const boxUpPop = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  },
  visibleWithDelay: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.7, 
      delay: 0.4 
    } 
  },
  section4: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  },
  visibleWithDelay2nd: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      delay: 0.8 
    } 
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('section-1');
  const [viewedSections, setViewedSections] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setViewedSections(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(section1Ref.current);
    observer.observe(section2Ref.current);
    observer.observe(section3Ref.current);
    observer.observe(section4Ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/send-email', { // Change the port number here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };
  
  return (
    <div className="App">
      <div className="navbar">
        <motion.a href="#section-1" className={activeSection === 'section-1' ? 'active' : ''} variants={linkVariant} animate={activeSection === 'section-1' ? 'active' : 'inactive'}>Home 🏠</motion.a>
        <motion.a href="#section-2" className={activeSection === 'section-2' ? 'active' : ''} variants={linkVariant} animate={activeSection === 'section-2' ? 'active' : 'inactive'}>About 🗒️</motion.a>
        <motion.a href="#section-3" className={activeSection === 'section-3' ? 'active' : ''} variants={linkVariant} animate={activeSection === 'section-3' ? 'active' : 'inactive'}>Experiences 📝</motion.a>
        <motion.a href="#section-4" className={activeSection === 'section-4' ? 'active' : ''} variants={linkVariant} animate={activeSection === 'section-4' ? 'active' : 'inactive'}>Contact 🤙</motion.a>
      </div>
      <motion.div ref={section1Ref} className="App-section" id='section-1' initial="hidden" animate={viewedSections['section-1'] ? "visible" : "hidden"} variants={fadeIn}>
        <motion.div id='center-content'>
          <p style={{fontSize: 80, fontWeight: 600, marginBottom: -15}}>EVA GADZHIEVA</p>
          <p style={{fontSize: 31}}>JUNIOR SOFTWARE DEVELOPER 👩‍💻</p>
        </motion.div>
      </motion.div>
      <motion.div ref={section2Ref} className="App-section" id='section-2' initial="hidden" animate={viewedSections['section-2'] ? "visible" : "hidden"} variants={fadeIn}>
        <div className="column" style={{borderWidth: 1, marginLeft: 90}}>
          <motion.p style={{fontSize: 35, marginBottom: -5, marginRight: 'auto'}} initial="hidden" animate={viewedSections['section-2'] ? "visible" : "hidden"} variants={pVariants}>
            Hey there! 👋
          </motion.p>
          <motion.p style={{fontSize: 33, marginBottom: -5}} initial="hidden" animate={viewedSections['section-2'] ? "visibleWithDelay" : "hidden"} variants={pVariants}>
            I'm Eva, a high school student with a deep passion for software development, particularly in mobile and web development. 👩‍💻
          </motion.p>
          <motion.p style={{fontSize: 25}} initial="hidden" animate={viewedSections['section-2'] ? "visibleWithDelay2nd" : "hidden"} variants={pVariants}>
            I am committed to continuous learning and staying up-to-date with the latest advancements in software development. I actively seek opportunities to expand my knowledge and gain practical experience in order to enhance my skills and contribute to the field.
          </motion.p>
        </div>
        <div className="column">
          <div style={{backgroundColor: '#FAF1E4', padding: 50, borderRadius: 15}}>
            <img src={profilePic} alt="Me" style={{width: 450, borderRadius: 15}} />
          </div>
        </div>
      </motion.div>
      <motion.div ref={section3Ref} className="App-section" id='section-3' initial="hidden" animate={viewedSections['section-3'] ? "visible" : "hidden"} variants={fadeIn}>
        <div className="experiences">
          <div className="centered">
            <h2 style={{fontSize: 35}}>Experiences</h2>
            <motion.div style={{fontSize: 18, marginBottom: '15px', width: '60%'}} initial="hidden" animate={viewedSections['section-3'] ? "visible" : "hidden"} variants={pVariantsC}>
              <div>
                <p style={{marginBottom: -10}}><strong>Farmium // </strong> Feb 2022 - Present</p>
                <h3>🚀 CTO & Co-founder</h3>
                <p>At Farmium, I oversee the company's technical initiatives and guide the direction of product development. Collaborating with a dedicated team, we continuously innovate and adapt to meet our users' needs.</p>
              </div>
            </motion.div>
            <motion.div style={{fontSize: 18, marginBottom: '15px', width: '60%'}} initial="hidden" animate={viewedSections['section-3'] ? "visibleWithDelay" : "hidden"} variants={pVariantsC}>
              <div style={{paddingTop: 30}}>
                <p style={{marginBottom: -10}}><strong>AISTGroup // </strong> July 2023 - Oct 2023</p>
                <h3>📱 Junior React Native Developer</h3>
                <p>At AISTGroup, I was actively involved in developing and enhancing a frontend React Native application using the Expo framework. My role involved closely collaborating with the design team to ensure a seamless user experience across Android and iOS platforms, and troubleshooting any technical challenges that arose.</p>
                <div className="skillBoxDiv">
                  <div className="skillBox">React Native</div>
                  <div className="skillBox">Expo</div>
                  <div className="skillBox">iOS interface</div>
                  <div className="skillBox">Andriod interface</div>
                </div>
              </div>
            </motion.div>
            <motion.div style={{fontSize: 18, marginBottom: '15px', width: '60%'}} initial="hidden" animate={viewedSections['section-3'] ? "visibleWithDelay2nd" : "hidden"} variants={pVariantsC}>
              <div style={{paddingTop: 30}}>
                <p style={{marginBottom: -10}}><strong>Medico // </strong> June 2022 - Sep 2022</p>
                <h3>🌐 Website Developer</h3>
                <p>At Medico.az, I contributed to the design and development of an interactive web application, streamlining the process for users to order medicines for home delivery. Leveraging a mix of technologies like PHP, AJAX, jQuery, and MySQLi, I collaborated with the backend team to ensure the platform's efficiency and responsiveness.</p>
                <div className="skillBoxDiv">
                  <div className="skillBox">HTML</div>
                  <div className="skillBox">CSS</div>
                  <div className="skillBox">Javascript</div>
                  <div className="skillBox">JQuery</div>
                  <div className="skillBox">PHP</div>
                  <div className="skillBox">MySQLi</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" animate={viewedSections['section-3'] ? "visible" : "hidden"} variants={boxUpPop}>
              <div className="download-button">
                <p style={{color: '#9eb384' , fontWeight: 600}}>📋 Want a copy of my CV/Resume instead?</p>
                <a href={cvFile} download="Eva_Hajiyeva_CV.pdf">
                  <button>Click here to download it 👈</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div ref={section4Ref} className="App-section" id='section-4' initial="hidden" animate={viewedSections['section-4'] ? "visible" : "hidden"} variants={fadeIn}>
        <div className="column">
          <motion.div initial="hidden" animate={viewedSections['section-4'] ? "section4" : "hidden"} variants={boxUpPop}>
            <div className="ContactPage">
              <h2>Want to contact me? Write your message below: </h2>
              <form onSubmit={handleSubmit}>
                <div className="textarea-container">
                  <textarea 
                    placeholder="Type here..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <p className="char-limit">{message.length} / 320</p>
                </div>
                <button type="submit" className="buttonSubmit">Submit message</button>
              </form>

            
              <div className='iconsDiv'>
                <div className='icon-boxes'>
                  <div className="icon-box">
                    <a href="https://www.instagram.com/magicalleves">
                      <i className="fa-brands fa-instagram" style={{color: '#435334', fontSize: '38px'}}></i>
                    </a>
                  </div>
                </div>
                <div className='icon-boxes'>
                  <div className="icon-box">
                    <a href="https://www.linkedin.com/in/eva-gadzhieva-78203a241/">
                      <i className="fa-brands fa-linkedin" style={{color: '#435334', fontSize: '38px'}}></i>
                    </a>
                  </div>
                </div>
                <div className='icon-boxes'>
                  <div className="icon-box">
                    <a href="https://github.com/magicalleves">
                      <i className="fa-brands fa-github" style={{color: '#435334', fontSize: '38px'}}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
