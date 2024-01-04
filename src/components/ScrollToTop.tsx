'use client';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={isVisible ? 'dark:bg-green-100 bg-rose-600 dark:hover:bg-white hover:bg-pink-700 inline-flex items-center rounded-full p-3 md:p-4 lg:p-5 text-white shadow-sm transition-opacity focus:outline-none opacity-100' : 'opacity-0'}
      >
        <FontAwesomeIcon icon={faArrowUp} className="dark:text-blue-900 text-white text-lg md:text-xl lg:text-2xl"/>
      </button>
    </div>
  );
};
