"use client"

import { useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Zap,
  Users,
  Trophy,
  ExternalLink,
  Database,
  Shield,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProfilePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".fade-in-up, .fade-in, .stagger-item")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "shadcn/ui",
    "NextAuth",
    "Zustand",
    "Context API",
    "React Query",
    "Zod",
    "Axios",
    "Git/GitHub",
  ]

  const softSkills = [
    "Problem Solving",
    "Effective Communication",
    "Teamwork",
    "Time Management",
    "Agile Methodologies",
    "Modular Thinking",
  ]

  const highlights = [
    {
      icon: Code,
      title: "Clean Code Expert",
      description: "Strong foundation in SOLID principles, algorithms, and maintainable code architecture",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Specialized in SSR, SSG, CSR optimization and code-splitting for fast applications",
      color: "green",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Proven agile team experience with effective communication and collaborative problem-solving",
      color: "purple",
    },
    {
      icon: Trophy,
      title: "Business Impact",
      description: "Balances technical excellence with real business needs and user-centric solutions",
      color: "orange",
    },
  ]

  const projectFeatures = [
    {
      icon: Users,
      title: "Multi-Role Platform",
      description: "Customers, restaurant staff, delivery drivers, and administrators",
      color: "blue",
    },
    {
      icon: Database,
      title: "Full-Stack Architecture",
      description: "Next.js 15, React 19, TypeScript, Prisma ORM with PostgreSQL",
      color: "green",
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Custom auth system with role-based access control",
      color: "red",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Optimized for mobile, tablet, and desktop with dark/light mode",
      color: "purple",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      green: "bg-green-50 border-green-200 hover:bg-green-100",
      purple: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      orange: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      red: "bg-red-50 border-red-200 hover:bg-red-100",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        .fade-in-up, .fade-in, .stagger-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in {
          transform: translateY(20px);
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .stagger-item:nth-child(1) { transition-delay: 0.1s; }
        .stagger-item:nth-child(2) { transition-delay: 0.2s; }
        .stagger-item:nth-child(3) { transition-delay: 0.3s; }
        .stagger-item:nth-child(4) { transition-delay: 0.4s; }
        .stagger-item:nth-child(5) { transition-delay: 0.5s; }
        .stagger-item:nth-child(6) { transition-delay: 0.6s; }
        
        .hero-avatar {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .tech-tag {
          transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .project-feature {
          transition: all 0.3s ease;
        }
        
        .project-feature:hover {
          transform: translateY(-2px);
        }
      `}</style>

      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-10 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground fade-in animate-in">Mohammed Abu Kmail</h1>
            <div className="flex gap-4">
              <Button asChild variant="ghost" size="sm" className="hover:scale-105 transition-transform duration-200">
                <a href="https://github.com/boss-moh" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="hover:scale-105 transition-transform duration-200">
                <a href="https://www.linkedin.com/in/mohammed-abu-kmail/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="sm" className="hover:scale-105 transition-transform duration-200">
                <a href="mailto:moh.saad.abu.kmail@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center hero-avatar fade-in-up">
            <Code className="w-16 h-16 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 fade-in-up">Front-End Engineer</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed fade-in-up">
            Experienced in building scalable, high-performance web applications using React.js, Next.js, and TypeScript.
            Skilled in modern UI/UX design, RESTful API integration, and responsive design.
          </p>
          <div className="flex flex-wrap justify-center gap-3 fade-in-up">
            <Button asChild size="lg" className="hover:scale-105 transition-all duration-200">
              <a href="mailto:moh.saad.abu.kmail@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:scale-105 transition-all duration-200 bg-transparent"
            >
              <a href="https://github.com/boss-moh" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Card className="mb-12 fade-in-up hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="mb-4">
                I'm a Front-End Engineer experienced in building scalable, high-performance web applications using
                React.js, Next.js, and TypeScript. I specialize in modern UI/UX design, RESTful API integration,
                responsive design, and web accessibility. I'm committed to writing clean, maintainable code and
                continuously learning emerging technologies.
              </p>
              <p>
                At Talents Valley, I developed web applications enhancing user experience through responsive designs and
                performance optimization. I focused on reducing application load times through code-splitting techniques
                and efficient React component management, working collaboratively in teams to deliver high-quality
                solutions.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className={`${getColorClasses(highlight.color)} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 stagger-item`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`${getIconColorClasses(highlight.color)} p-3 rounded-lg transition-all duration-300`}>
                    <highlight.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Card className="fade-in-up hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Skills & Tools</h2>

            {/* Technical Skills Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 tech-tag cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-muted/80 tech-tag cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-muted rounded-xl hover:bg-muted/80 transition-colors duration-300">
              <h3 className="font-semibold text-foreground mb-2">Core Principles</h3>
              <p className="text-muted-foreground text-sm">
                Algorithms & Data Structures • SOLID Principles • Clean Code Architecture • Agile Methodologies •
                Modular Thinking
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Project Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Card className="fade-in-up hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Featured Project</h2>

            {/* Project Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">TastyGo Food Delivery Platform</h3>
                  <p className="text-muted-foreground">
                    A comprehensive food delivery platform connecting customers with restaurants
                  </p>
                </div>
                <Button asChild className="w-fit hover:scale-105 transition-all duration-200">
                  <a href="https://food-app-mu-opal.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Demo
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {projectFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 ${getColorClasses(feature.color)} rounded-lg project-feature stagger-item`}
                >
                  <div className={`${getIconColorClasses(feature.color)} p-2 rounded-lg transition-all duration-300`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Stack */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Technology Stack</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="stagger-item">
                  <h5 className="font-medium text-foreground mb-2">Frontend</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="stagger-item">
                  <h5 className="font-medium text-foreground mb-2">Backend</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Prisma ORM", "PostgreSQL", "NextAuth", "Server Actions"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium hover:bg-green-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="stagger-item">
                  <h5 className="font-medium text-foreground mb-2">Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React Hook Form", "Zod", "Zustand", "Lucide React"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="stagger-item">
                  <h5 className="font-medium text-foreground mb-2">Customer Experience</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Menu browsing and product details</li>
                    <li>• Shopping cart with promo codes</li>
                    <li>• Real-time order tracking</li>
                    <li>• Order history and reordering</li>
                  </ul>
                </div>
                <div className="stagger-item">
                  <h5 className="font-medium text-foreground mb-2">Business Management</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Admin dashboard with analytics</li>
                    <li>• Chef kitchen management system</li>
                    <li>• Driver delivery tracking</li>
                    <li>• Role-based access control</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience & Education Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Experience Section */}
          <Card className="fade-in-up hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Experience</h2>
              <div className="border-l-4 border-primary pl-6 hover:border-primary/80 transition-colors duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">React Developer (Internship)</h3>
                  <p className="text-foreground font-medium">Talents Valley Company</p>
                  <p className="text-muted-foreground text-sm mb-3">07/2022 – 10/2023 | Gaza, Palestine</p>
                  <p className="text-muted-foreground text-sm">
                    Developed web applications with ReactJS and NextJS, enhancing user experience by implementing
                    responsive designs and optimizing performance. Focused on reducing application load times through
                    code-splitting techniques and efficient React component management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="fade-in-up hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Education</h2>
              <div className="border-l-4 border-green-500 pl-6 hover:border-green-400 transition-colors duration-300">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Bachelor's Degree in Software Engineering</h3>
                  <p className="text-foreground font-medium">Al-Azhar University</p>
                  <p className="text-muted-foreground text-sm mb-3">08/2020 – 08/2025 | Gaza, Palestine</p>
                  <p className="text-muted-foreground text-sm">
                    Pursuing a degree focused on SOLID and Agile principles, algorithms, and data structures. Working on
                    improving software performance, solving complex problems, and building scalable solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Card className="fade-in-up hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Certificates</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">Frontend Engineering with React</h3>
                <p className="text-blue-600 font-medium mb-3">From Manara</p>
                <p className="text-muted-foreground text-sm">
                  Developed dynamic user interfaces using React, focusing on component-based architecture and state
                  management. Implemented modern JavaScript (ES6+) features to build responsive, interactive web
                  applications.
                </p>
              </div>
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-2">Responsive Web Design</h3>
                <p className="text-green-600 font-medium mb-3">Web Development Course</p>
                <p className="text-muted-foreground text-sm">
                  Completed a comprehensive course covering HTML and CSS, with a focus on responsive design principles
                  and best practices for modern web development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Card className="bg-primary text-primary-foreground fade-in-up hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life with modern web technologies and clean, scalable code.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-all duration-200">
                <a href="mailto:moh.saad.abu.kmail@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
              >
                <a href="https://github.com/boss-moh" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Mohammed Abu Kmail. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
