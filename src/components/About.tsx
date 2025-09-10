"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const quickFacts = [
    "Based in Bangalore, Karnataka",
    "BE in Information Science & Technology (2018)",
    "Frontend Developer (4+ years) specializing in React.js & Next.js",
    "Skilled in JavaScript, TypeScript, Node.js, Express.js, REST APIs",
    "Passionate about UI/UX design, performance optimization & responsive design",
    "Improved web app Lighthouse score from 37% → 67% through code optimization",
    "Experience with React Native for iOS & Android apps",
  ];

  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLLIElement>("li") ?? [];

    // If IntersectionObserver not supported, just reveal all
    if (typeof IntersectionObserver === "undefined") {
      items.forEach((el, i) => {
        el.classList.remove("opacity-0", "translate-y-5");
        el.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // remove hidden classes, add visible classes
            el.classList.remove("opacity-0", "translate-y-5");
            el.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(el); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Bio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I’m Pooja Rachatte, a Frontend Developer with 4 years of
                experience specializing in React.js, Next.js, JavaScript, and
                TypeScript.
              </p>
              <p>
                I build scalable, responsive, and user-friendly web applications
                with a strong focus on performance, accessibility, and clean
                UI/UX. My expertise includes RESTful API integration,
                authentication/authorization, and performance optimization—
                boosting application speed, engagement, and overall user
                experience.
              </p>
              <p>
                Alongside React web apps, I also have hands-on experience in
                React Native for building iOS and Android applications. Over the
                years, I’ve collaborated with cross-functional teams, optimized
                websites for SEO, implemented code splitting and lazy loading,
                and improved Lighthouse scores significantly.
              </p>
              <p>
                When I’m not coding, I enjoy solving complex debugging
                challenges, experimenting with new technologies, and translating
                design concepts into interactive digital experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3" ref={listRef}>
                {quickFacts.map((fact, index) => (
                  <li
                    key={index}
                    // initial hidden classes are present in the markup so Tailwind keeps them
                    className={
                      "flex items-start opacity-0 translate-y-5 transition-all duration-700 ease-out"
                    }
                    // stagger using inline style so we can compute delay per item
                    style={{
                      transitionDelay: `${index * 0.14}s`,
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
