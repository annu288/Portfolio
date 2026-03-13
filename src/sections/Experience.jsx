import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // card slide-in
      gsap.from(card, {
        xPercent: -10,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });

      // matching vertical line grow animation
      const line = card.querySelector(".exp-line");
      if (line) {
        gsap.from(line, {
          scaleY: 0,
          duration: 0.9,
          ease: "power2.out",
          transformOrigin: "bottom",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      }
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray(".expText").forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
        },
      });
    }, "<"); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => {
              let logoSrc = "/images/logo1.jpg";
              let logoAlt = "TCS logo";

              if (index === 1) {
                logoSrc = "/images/logo2.png";
                logoAlt = "Company logo 2";
              } else if (index === 2) {
                logoSrc = "/images/logo3.png";
                logoAlt = "Company logo 3";
              }

              return (
                <div key={card.title} className="exp-card-wrapper timeline-card">
                  <div className="xl:w-2/6 flex items-center justify-center">
                    <div className="company-logo-wrapper">
                      <img src={logoSrc} alt={logoAlt} />
                    </div>
                  </div>

                  <div className="hidden xl:flex exp-line-wrapper">
                    <div className="exp-line" />
                  </div>

                  <div className="xl:w-4/6">
                    <div className="expText relative z-20">
                      <h1 className="font-semibold text-3xl flex items-center gap-3">
                        <span>{card.title}</span>
                        {index === 0 && (
                          <span className="exp-title-logo">
                            <img src="/images/Amex.png" alt="American Express logo" />
                          </span>
                        )}
                        {index === 1 && (
                          <span className="exp-title-logo">
                            <img src="/images/fnp.png" alt="Ferns N Petals logo" />
                          </span>
                        )}
                      </h1>
                      {card.client && (
                        <p className="mt-2 text-white-50">{card.client}</p>
                      )}
                      <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                      <p className="text-[#839CB5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;