import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const rydeImgRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animation for the first project image
    gsap.fromTo(
      rydeImgRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rydeRef.current,
          start: "top center",
        },
      },
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="first-project-top">
              <div className="image-wrapper">
                <img
                  ref={rydeImgRef}
                  src="/images/project1.png"
                  alt="fnp app"
                />
              </div>

              <div className="text-content">
                <h2>Worked on the Saudi Arabia website for Ferns N Petals(fnp)</h2>
                <p className="text-white-50 md:text-xl">
                  An app built with React, TailwindCSS, Js for a fast,
                  user-friendly experience.
                </p>
              </div>
            </div>

            <div className="project-list-wrapper overflow-hidden justify-center">
              <div className="project project-row" ref={libraryRef}>
                <div className="project-row-inner">
                  <div className="image-wrapper">
                    <img
                      src="/images/project2.png"
                      alt="EdTech Platform"
                    />
                  </div>

                  <div className="text-content">
                    <h2>Study Notion</h2>
                    <p className="text-white-50 md:text-xl">
                    A full-stack edtech platform enabling course creation,
                     student enrollment, and secure authentication .
                </p>
                  </div>
                </div>
              </div>

              <div className="project project-row" ref={ycDirectoryRef}>
                <div className="project-row-inner">
                  <div className="image-wrapper">
                    <img src="/images/project3.png" alt="Service Pro Roofing" />
                  </div>

                  <div className="text-content">
                    <h2>Service Pro Roofing</h2>
                    <p className="text-white-50 md:text-xl">
                      Designed and implemented features for the Service Pro Roofing
                      website to enhance user experience and service inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
