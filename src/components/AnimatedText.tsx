import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

interface AnimatedTextProps {
  words: string[];
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ words, className = "" }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const line = containerRef.current.querySelector('.line');
    const letters = containerRef.current.querySelectorAll('.letter');
    const textWrapper = containerRef.current.querySelector('.letters');

    if (!line || !textWrapper || letters.length === 0) return;

    // Reset styles for animation
    anime.set(line, { scaleY: 0, opacity: 0, translateX: 0 });
    anime.set(letters, { opacity: 0 });
    anime.set(containerRef.current, { opacity: 1 });

    const isSingleWord = words.length === 1;

    const tl = anime.timeline({ 
      loop: isSingleWord,
      complete: () => {
        if (!isSingleWord) {
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      }
    });

    const textWidth = (textWrapper as HTMLElement).getBoundingClientRect().width;

    tl.add({
      targets: line,
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 350
    })
    .add({
      targets: line,
      translateX: [0, textWidth + 10],
      easing: "easeOutExpo",
      duration: 350
    }, '+=50') // Wait 50ms after previous animation ends
    .add({
      targets: Array.from(letters), // Convert NodeList to Array for maximum compatibility
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 300,
      delay: (_el: any, i: number) => 17 * (i + 1)
    }, '-=380') // Start 380ms before the end of the previous animation
    .add({
      targets: containerRef.current,
      opacity: [1, 0],
      duration: 250,
      easing: "easeOutExpo",
      delay: 1500
    });

    return () => {
      tl.pause();
    };
  }, [currentIndex, words]);

  return (
    <span className={`inline-block ${className}`} ref={containerRef}>
      <span className="relative flex pt-[0.1em] pr-[0.05em] pb-[0.15em]">
        <span className="opacity-0 absolute top-0 left-0 h-[100%] w-[3px] bg-current origin-[0_50%] line z-10"></span>
        <span className="letters flex whitespace-pre">
          {words[currentIndex].split('').map((char, index) => (
            char === ' ' ? (
              <span key={index} className="letter inline-block leading-[1.1]">
                &nbsp;
              </span>
            ) : (
              <span key={index} className="letter inline-block leading-[1.1]">
                {char}
              </span>
            )
          ))}
        </span>
      </span>
    </span>
  );
};

export default AnimatedText;
