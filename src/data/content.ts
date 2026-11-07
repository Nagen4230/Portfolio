export interface ProjectItem {
  id: string;
  title: string;
  category: 'software' | 'video';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  metrics?: string;
  role: string;
  period: string;
  deliverables?: string[];
  keyWins?: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewGradient: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  description: string;
  skills: { name: string; level: number; note: string }[];
  tools: string[];
}

export interface TimelineMilestone {
  period: string;
  title: string;
  institution: string;
  role?: string;
  badge: string;
  goldMetric?: string;
  description: string;
  achievements: string[];
  type: 'education' | 'leadership' | 'award';
}

export const RESUME_DATA = {
  candidate: {
    name: "Nagendran Murugan",
    tagline: "Software Engineering Undergraduate & Video Editor",
    headline: "1st-Year Software Engineering Student at Universiti Malaya (UM)",
    subheadline: "Building reliable software solutions with Python, exploring modern Java, and leveraging AI-assisted tools alongside cinematic video storytelling.",
    status: "Seeking Summer 2027 Software Engineering / Tech Internships",
    location: "Kuala Lumpur / Mentakab, Pahang, Malaysia",
    email: "nagen4230@gmail.com",
    phone: "+60 11-25423532",
    github: "https://github.com/Nagen4230",
    linkedin: "https://www.linkedin.com/in/nagendran-murugan-553844440",
    resumeUrl: "/resume.pdf",
    academicSummary: "High-achieving First-Year Software Engineering student at Universiti Malaya (4.00 Matriculation CGPA) with a strong foundation in Python development, state-level competitive programming success, and proven student leadership experience. Passionate about web development, interactive logic engines, and modern developer tools.",
  },

  metrics: [
    { label: "Matriculation CGPA", value: "4.00 / 4.00", highlight: "Perfect Academic Score" },
    { label: "SPM Results", value: "10 Straight As", highlight: "7 A+, 1 A, 2 A-" },
    { label: "Competitive Coding", value: "2nd Runner-Up", highlight: "State-Level Competition" },
    { label: "Innovation Honors", value: "4x Medalist", highlight: "IIDEX & IYIA Gold/Bronze" },
  ],

  skillCategories: [
    {
      title: "Programming & Developer Stack",
      iconName: "Code2",
      color: "crimson",
      description: "Proficient Python development, currently expanding into Java object-oriented engineering, AI-assisted development tools, and Git/GitHub collaboration workflows.",
      skills: [
        { name: "Python", level: 92, note: "Proficient in Python development, logic scripting, and problem-solving" },
        { name: "Java", level: 68, note: "Currently learning core OOP, classes, syntax, and CS principles" },
        { name: "AI-Assisted Development Tools", level: 90, note: "Prompt engineering, agentic coding workflows, and rapid prototyping" },
        { name: "Git / GitHub Version Control", level: 85, note: "Repositories, branching, pull requests, and version control" },
      ],
      tools: ["Python", "Java", "AI-Assisted Tools", "Git", "GitHub", "VS Code"],
    },
    {
      title: "Video Editing & Motion Graphics",
      iconName: "Film",
      color: "crimson",
      description: "Directing cinematic pacing, sound design, motion graphics, and engaging promotional media.",
      skills: [
        { name: "Video Editing & Story Pacing", level: 90, note: "Timeline rhythm, cutting, and narrative engagement" },
        { name: "Motion Graphics & Title Design", level: 84, note: "Keyframe typography and visual motion cues" },
        { name: "Sound Design & Audio Sync", level: 86, note: "Rhythm matching, audio levels, and soundscapes" },
      ],
      tools: ["Video Editing Suites", "Motion Graphics", "Audio Sync Tools", "4K Video Pipelines"],
    },
  ],

  projects: [
    {
      id: "career-navigator",
      title: "Engineering Field & Career Navigator Web App",
      category: "software" as const,
      categoryLabel: "Full-Stack Web & Logic Engine",
      shortDesc: "Interactive web app featuring a 1-minute diagnostic mini-game that evaluates user interest and recommends specialized engineering tracks.",
      fullDesc: "Engineered an interactive web application featuring a 1-minute diagnostic mini-game to evaluate user interest and recommend specialized engineering tracks (CS, Mechanical, Civil, Electrical). Designed a curated hub offering field-specific videos, beginner project ideas, and team-building matchmaker concepts. Implemented frontend routing logic and interface layout within a structured local development environment.",
      technologies: ["Web Dev", "JavaScript", "Interactive UX Logic", "CSS", "Frontend Routing"],
      metrics: "Sub-100ms diagnostic score calculation • 4 Engineering Tracks Evaluated",
      role: "Lead Developer",
      period: "2026",
      keyWins: [
        "Engineered an interactive 1-minute diagnostic mini-game to evaluate user interest.",
        "Built recommendation logic pairing user strengths with specialized engineering tracks.",
        "Designed curated hub offering field videos, starter projects, and team-building matchmaker concepts.",
        "Implemented frontend routing logic and interface layout in structured environment."
      ],
      deliverables: ["Diagnostic scoring engine", "Interactive recommendation UI", "Field-specific resource curator"],
      githubUrl: "https://github.com/Nagen4230",
      previewGradient: "from-red-950/60 via-obsidian-900 to-black",
    },
    {
      id: "developer-portfolio",
      title: "Personal Developer Portfolio & Recruiter Sandbox",
      category: "software" as const,
      categoryLabel: "High-Performance Web Portfolio",
      shortDesc: "Responsive web portfolio presenting software engineering projects, academic wins, interactive terminal, and trained AI assistant.",
      fullDesc: "Developed a responsive web portfolio to present software engineering projects, academic wins, and technical capabilities. Implemented modular UI components, live terminal simulator, trained AI assistant drawer, and modern styling standards to optimize cross-device user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5 Canvas", "Vite", "Git/GitHub"],
      metrics: "100% Responsive • <1.2s First Contentful Paint • Live Interactive AI & Terminal",
      role: "Solo Developer",
      period: "2026",
      keyWins: [
        "Implemented interactive AI career assistant trained on factual resume records.",
        "Crafted live terminal simulator showcasing Python, Java learning, and build pipelines.",
        "Designed glowing glassmorphic UI adhering strictly to obsidian, crimson, and gold palette.",
        "Engineered responsive components ensuring clean cross-device recruiter access."
      ],
      deliverables: ["Full-featured React single-page app", "Interactive AI assistant drawer", "Live terminal emulator"],
      githubUrl: "https://github.com/Nagen4230",
      liveUrl: "https://nagen4230.github.io/portfolio",
      previewGradient: "from-neutral-900 via-red-950/40 to-black",
    },
    {
      id: "multimedia-club-promos",
      title: "ICT & Badminton Championship Motion Promos",
      category: "video" as const,
      categoryLabel: "Motion Graphics & Video Editing",
      shortDesc: "High-octane tournament teaser reels, workshop openers, and motion graphic title sequences with synced audio soundscapes.",
      fullDesc: "Directed and edited promotional video campaigns for college-level badminton tournaments and ICT Multimedia digital literacy workshops. Utilized video editing software and motion graphics for kinetic typography, smooth transitions, beat-synced audio editing, and color adjustments to maximize engagement across campus channels.",
      technologies: ["Video Editing Software", "Motion Graphics", "Audio Leveling", "Pacing"],
      metrics: "1,500+ Campus Views • 100% On-Time Tournament Hype Release",
      role: "Video Editor & Motion Designer",
      period: "2025 – 2026",
      keyWins: [
        "Crafted dynamic rhythm-cut match hype reels synchronized to soundscapes.",
        "Created reusable lower-thirds, intro bumper stingers, and title motion sequences.",
        "Achieved rapid turnaround: filmed, edited, and distributed highlight reels on schedule."
      ],
      deliverables: ["Tournament Teaser Reel", "Workshop Opener Reel", "Motion Graphics Assets"],
      previewGradient: "from-red-950/60 via-amber-950/20 to-black",
    },
    {
      id: "tech-workshop-reels",
      title: "Digital Literacy & Coding Workshop Video Modules",
      category: "video" as const,
      categoryLabel: "Educational Video Production",
      shortDesc: "Bite-sized educational video tutorials and workshop recap reels engineered for student engagement and retention.",
      fullDesc: "Produced an episodic short-form video series introducing junior high school and matriculation students to foundational programming principles and digital tools. Combined clean screen-recordings, smooth zoom-in keyframes, animated syntax highlights, and energetic pacing to demystify computer science.",
      technologies: ["Video Editing", "Screen Capture Graphics", "Voiceover Audio EQ", "Kinetic Captions"],
      metrics: "Conducted for 100+ Junior Students • 100% Positive Feedback",
      role: "Content Creator & Video Editor",
      period: "2024 – 2026",
      keyWins: [
        "Transformed programming concepts into snappy, digestible video modules.",
        "Animated custom callout boxes and code highlighting effects for tutorials.",
        "Engineered crisp audio voiceovers with customized EQ curves and background ducking."
      ],
      deliverables: ["Mini Video Series", "Workshop Opener Reel", "Screen Capture Walkthroughs"],
      previewGradient: "from-obsidian-800 via-red-950/30 to-black",
    },
  ],

  timeline: [
    {
      period: "2026 – Present",
      title: "Bachelor of Computer Science (Software Engineering)",
      institution: "Universiti Malaya (UM)",
      role: "Incoming First-Year Undergraduate",
      badge: "Degree Studies",
      goldMetric: "Top University in Malaysia",
      description: "Commencing undergraduate studies in Software Engineering at Universiti Malaya (Kuala Lumpur). Focusing on core computer science foundations, algorithms, modern web development, and active participation in tech student communities.",
      achievements: [
        "Incoming First-Year Student in Software Engineering at Universiti Malaya (UM).",
        "Passionate about web development, interactive logic engines, and modern developer tools.",
        "Actively preparing for tech industry internships and collaborative engineering opportunities."
      ],
      type: "education",
    },
    {
      period: "2025 – 2026",
      title: "Matriculation Programme Certificate",
      institution: "Pahang Engineering Matriculation College (KMKPh)",
      role: "Student & Club President",
      badge: "Academic Excellence",
      goldMetric: "4.00 / 4.00 CGPA",
      description: "Graduated with a perfect 4.00 Cumulative Grade Point Average in engineering matriculation while concurrently leading campus sports operations as Badminton Club President.",
      achievements: [
        "Earned perfect Cumulative Grade Point Average (CGPA): 4.00 / 4.00.",
        "Elected President of Badminton Club: managed end-to-end tournament structures and logistics.",
        "Clinched 1st Runner-Up in the College-Level Badminton Tournament."
      ],
      type: "education",
    },
    {
      period: "2025 – 2026",
      title: "President – Badminton Club",
      institution: "Pahang Engineering Matriculation College",
      role: "President",
      badge: "Executive Leadership",
      goldMetric: "College-Wide Tournaments",
      description: "Headed the executive committee managing student athletics, tournament scheduling, and court logistics for college-wide competitions.",
      achievements: [
        "Managed end-to-end operations, court logistics, scheduling, and tournament structures for college-wide competitions.",
        "Demonstrated dual excellence: sustained a 4.00 academic record while serving as President.",
        "1st Runner-Up in the College-Level Badminton Tournament."
      ],
      type: "leadership",
    },
    {
      period: "2020 – 2024",
      title: "Sijil Pelajaran Malaysia (SPM)",
      institution: "SMK Seri Tualang",
      role: "Secondary Education",
      badge: "Academic Top Tier",
      goldMetric: "10 Straight As (7 A+, 1 A, 2 A-)",
      description: "Completed secondary education with top honors across science and technical subjects, serving simultaneously as ICT & Multimedia Club President.",
      achievements: [
        "Academic Achievement: 10 Straight As (7 A+, 1 A, 2 A-).",
        "2nd Runner-Up — State-Level Coding Competition (SMK Seri Tualang).",
        "3rd Place — State-Level Essay Writing Competition (2022)."
      ],
      type: "education",
    },
    {
      period: "2020 – 2024",
      title: "President – ICT & Multimedia Club",
      institution: "SMK Seri Tualang",
      role: "Club President",
      badge: "Technology Leadership",
      goldMetric: "Workshops for Junior Students",
      description: "Spearheaded school-wide technology initiatives and conducted basic programming and digital literacy workshops for junior students.",
      achievements: [
        "Spearheaded school-wide technology initiatives and conducted basic programming and digital literacy workshops for junior students.",
        "Secretary of Badminton Club (2020–2024): oversaw official administrative documentation, tournament schedules, meeting minutes, and membership records."
      ],
      type: "leadership",
    },
    {
      period: "2016 – 2018",
      title: "Invention & Innovation Honors",
      institution: "IIDEX & International Young Inventors Award (IYIA)",
      badge: "Global Innovation",
      goldMetric: "Consecutive Gold Medalist",
      description: "Recognized internationally and nationally for innovative prototype design and presentations.",
      achievements: [
        "Consecutive Gold Medalist — Invention, Innovation & Design Exploration (IIDEX, 2017 & 2018).",
        "Gold Medalist (2017) & Bronze Medalist (2016) — International Young Inventors Award (IYIA)."
      ],
      type: "award",
    },
  ],

  aiKnowledge: {
    systemPrompt: "You are the AI Career Assistant for Nagendran Murugan, an incoming 1st-Year Software Engineering student at Universiti Malaya (UM). Respond concisely, professionally, and factually based strictly on his resume and verified records.",
    quickChips: [
      "Engineering Stack",
      "Video Editing Process",
      "Academic & Project Highlights",
      "Internship Availability",
      "Contact Info",
    ],
    faqMap: [
      {
        triggers: ["engineering", "stack", "tech", "languages", "python", "java", "git", "ai", "code"],
        answer: "Nagendran's developer stack features proficient Python development (logic engines, problem-solving), currently expanding into Java (OOP, CS fundamentals), AI-assisted development tools for rapid prototyping, and Git/GitHub for version control. He placed 2nd Runner-Up in a State-Level Coding Competition and built the 'Engineering Field & Career Navigator Web App'."
      },
      {
        triggers: ["video", "editing", "multimedia", "premiere", "motion", "reels"],
        answer: "Nagendran brings strong video editing and motion graphics capabilities, having served as President of the ICT & Multimedia Club. He directs video projects with dynamic pacing, sound design, and title animations, producing tournament hype videos and technical workshop modules."
      },
      {
        triggers: ["academic", "cgpa", "highlights", "matriculation", "spm", "um", "universiti malaya"],
        answer: "Nagendran holds a perfect 4.00 CGPA from Pahang Engineering Matriculation College and 10 Straight As (7 A+, 1 A, 2 A-) in SPM. He is an incoming 1st-Year Software Engineering undergraduate at Universiti Malaya (UM), a consecutive 2x Gold Medalist at IIDEX (2017 & 2018), and an IYIA Gold Medalist."
      },
      {
        triggers: ["internship", "availability", "summer", "hire", "recruit"],
        answer: "Nagendran is actively seeking Software Engineering and Tech internship opportunities. He brings 4.00 academic precision, competitive coding logic, proven student leadership (Badminton Club & ICT Club President), and strong developer discipline."
      },
      {
        triggers: ["contact", "email", "github", "linkedin", "phone"],
        answer: "You can contact Nagendran directly via email at nagen4230@gmail.com, view his code on GitHub (github.com/Nagen4230), or connect on LinkedIn (nagendran-murugan-553844440). His verified resume can be downloaded directly from the top navigation."
      }
    ]
  }
};
