import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'
import img1 from "../../../public/img/img2.jpeg"

export default function HeroBanner() {
  const [displayText, setDisplayText] = useState('Web Developer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100);
  const [showCursor, setShowCursor] = useState(true);

  const titles = ['Web Developer', 'Frontend Developer', 'Backend Developer'];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Cursor blinking effect
    let cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(ticker);
      clearInterval(cursorInterval);
    }
  }, [displayText, isDeleting]);

  const tick = () => {
    let i = loopNum % titles.length;
    let fullText = titles[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:wisofer17@gmail.com';
  };

  const handleHireClick = () => {
    window.location.href = 'https://wa.me/50581539569';
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#020420] to-[#03072b] px-4 sm:px-6 lg:px-8 mt-16"> {/* Added margin-top here */}
      <div className="container mx-auto pt-16 sm:pt-20 lg:pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12"> {/* Adjusted gap here */}
          {/* Profile Image */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto lg:mx-0 lg:ml-60"> {/* Moved image further to the right */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div> {/* Increased opacity for more illumination */}
            <div className="relative w-full h-full rounded-full border-2 border-blue-400 overflow-hidden">
              <img
                src={img1}
                alt="Profile"
                className="w-full h-full object-cover brightness-125" // Added brightness class for more illumination
                loading="eager"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hello, I'm
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                William Borge
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6">
              And I'm a <span className="text-blue-400">{displayText}{showCursor ? '|' : ''}</span>
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Desarrollador Full Stack con experiencia en tecnologías como React, Laravel y PHP. Experto en crear soluciones digitales innovadoras y efectivas, combinando sólidas habilidades técnicas con un enfoque creativo en la experiencia del usuario.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleHireClick} 
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                Hire Me
              </button>
              <button 
                onClick={handleContactClick} 
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
