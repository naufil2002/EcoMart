import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css';
import hero_video from '../Assests/hero_video.mp4'; // Import your video file
// import fallback_image from '../Assests/fallback_image.jpg'; // Import a fallback image

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className='heroo'>
      <video
        ref={videoRef}
        className="hero-video"
        src={isLoaded ? hero_video : undefined}
        autoPlay
        loop
        muted
        playsInline
        // poster={fallback_image}
      />
      <Container>
        <div className='row hero position-relative'>
          <div className="hero-content position-absolute">
            <div className="hero-left col-lg-6 col-md-6 col-sm-12">
              <h4>NEW ARRIVALS ONLY</h4>
              <h1>New Collection for Everyone</h1>
              <div className="flex items-center justify-start hero-latest-button">
                <button className="px-6 py-2 font-medium bg-slate-600 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  Latest Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
