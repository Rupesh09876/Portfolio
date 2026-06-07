const experiences = [
  {
    period: "2024 — 2027 (Expected)",
    role: "BSc (Hons) Computing",
    company: "Itahari International College, Sundarharaicha-4, Dulari, Morang",
    description:
      "Coursework: Web Development, UI/UX Design, OOP, Database Systems, Mobile App Development.",
    technologies: ["React.js", "Java", "PostgreSQL", "Tailwind CSS", "Figma"],
    current: true,
  },
  {
    period: "Jun — Aug 2025",
    role: "Full-Stack Web & Mobile Development (MERN Stack)",
    company: "Innovation Lab, Itahari International College",
    description:
      "Acquired hands-on experience in full-stack web and mobile development, building production-level applications using MongoDB, Express.js, React, and Node.js.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    current: false,
  },
  {
    period: "2025",
    role: "UI/UX Design Training",
    company: "Practical Project-Based Learning",
    description:
      "Learned core principles of UI/UX design, visual hierarchy, user research, wireframing, and interactive prototyping.",
    technologies: ["Figma", "Adobe XD", "Mobile-First Design"],
    current: false,
  },
  {
    period: "2021 — 2023",
    role: "+2 Science",
    company: "Shree Panchayat Higher Secondary School, Pathari Shanishchare-1, Morang",
    description:
      "Completed higher secondary school in physical science track with fundamentals of computer science.",
    technologies: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Education & Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Learning that{" "}
            <span className="font-serif italic font-normal text-foreground">
              {" "}
              builds foundations.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my academic background, specialized training programs, and practical project-based learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
