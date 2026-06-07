import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Developing modern web applications using React.js, Node.js, and Java.",
  },
  {
    icon: Rocket,
    title: "UI/UX Design",
    description:
      "Crafting intuitive layouts and user flows with clean aesthetics.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Actively working on hackathons and collaborative projects.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Staying up-to-date with cutting-edge industry technologies and frameworks.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a detail-oriented Computing student at Itahari International College with hands-on experience in frontend development, UI/UX design, and full-stack web applications. My journey started with a strong curiosity for web technologies, which has evolved into building solid web applications using React.js, Tailwind CSS, and Node.js.
              </p>
              <p>
                I'm currently pursuing my BSc (Hons) in Computing (expected 2027) and seeking a Frontend Developer internship where I can apply my skills to build responsive, user-centric interfaces and grow under experienced mentorship.
              </p>
              <p>
                Outside of college and coding, I enjoy participating in 24-hour hackathons, designing interfaces in Figma, and collaborating on open source projects.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border border-l-4 border-l-primary animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create user-centric digital experiences that solve real-world problems with robust, optimized, and elegant code."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
