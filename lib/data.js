// Edit this file to update the site. Content comes from your CV.
export const me = {
  name: "Joseph Victor",
  role: "Cybersecurity student, DevSecOps and cloud engineer",
  intro:
    "I'm a cybersecurity student in Kano, Nigeria. I build and break Linux, cloud and security tooling, and write down what I learn along the way.",
  email: "joevictor2007@gmail.com",
  github: "https://github.com/mrr-01", // TODO: replace
  linkedin: "https://www.linkedin.com/in/victor-joseph-4a6917312/", // TODO: replace
};

export const projects = [
  { group: "Infrastructure and DevOps", items: [
    { name: "HNG DevOps Stage 0: Secure Nginx on AWS", text: "Deployed and secured Nginx on an AWS EC2 instance with a Let's Encrypt SSL certificate." },
    { name: "HNG DevOps Stage 1 and 2", text: "Built and deployed a Python API with CI/CD pipelines on cloud infrastructure." },
    { name: "LoAma: private LLM chat interface", text: "A Docker web UI for running Ollama in the browser. FastAPI backend, vanilla JavaScript frontend, containerized and deployed with a pipeline." },
  ]},
  { group: "Security and automation", items: [
    { name: "BlackFedora: pentest tools automation", text: "A Bash script that installs the top 30 penetration testing tools on Fedora Linux." },
    { name: "Parrot OS KVM setup", text: "Helper script and documentation for running Parrot OS under KVM on Fedora." },
  ]},
  { group: "System level and hardware", items: [
    { name: "Galaxy S8 ViperFX Magisk module", text: "Enables ViperFX audio processing on LineageOS 21 and custom ROMs through low-level system and kernel module work." },
  ]},
];

export const experience = {
  title: "DevOps Engineer Intern",
  org: "HNG Tech",
  points: [
    "Managed Linux and Unix environments and Nginx web servers hosting microservices.",
    "Deployed AWS infrastructure using Bash, Python and CI/CD pipelines.",
    "Maintained reliability and access controls with Linux security tools and automated operational checks.",
  ],
};

export const skills = ["Linux administration","Python","Bash","AWS","Nginx","Docker","CI/CD","Networking","Nmap","Threat management"];

export const certs = [
  ["Cisco Introduction to Cybersecurity", "Apr 2025"],
  ["Cisco Operating Systems Basics", "May 2025"],
  ["Cisco Computer Hardware Basics", "Jan 2025"],
  ["IBM SkillsBuild Cybersecurity Certificate", "In progress"],
];

export const education = {
  degree: "B.Sc. Cybersecurity",
  school: "Bayero University, Kano",
  years: "2025 to present",
  extra: "CGPA 4.33. Coursework: Network Operating Systems and Administration, System Analysis and Design, Information Security Fundamentals.",
};
