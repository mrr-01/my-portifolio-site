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
    { name: "Secure Nginx on AWS",
      post: "hng-devops-stage-0-secure-nginx-aws",
      url: "https://github.com/mrr-01/hng-devops-stage0",
      text: "Deployed and secured Nginx on an AWS EC2 instance with a Let's Encrypt SSL certificate." },
    { name: "DevOps Personal API Development",
      post: "hng-devops-stage-1-and-2",
      url: "https://github.com/mrr-01/hng-devops-stage1",
      text: "Built and deployed a Python API with CI/CD pipelines on cloud infrastructure." },
    { name: "LoAma: private LLM chat interface",
      post: "loama-private-llm-chat",
      url: "https://github.com/mrr-01/LoAma",
      text: "A Docker web UI for running Ollama in the browser. FastAPI backend, vanilla JavaScript frontend, containerized and deployed with a pipeline." },
  ]},
  { group: "Security and automation", items: [
    { name: "BlackFedora: pentest tools automation",
      post: "blackfedora-pentest-automation",
      url: "https://github.com/mrr-01/BlackFedora",
      text: "A Bash script that installs the top 30 penetration testing tools on Fedora Linux." },
    { name: "Parrot OS KVM setup",
      post: "parrot-os-kvm-setup",
      url: "https://github.com/mrr-01/parrot-kvm-setup",
      text: "Helper script and documentation for running Parrot OS under KVM on Fedora." },
  ]},
  { group: "System level and hardware", items: [
    { name: "Galaxy S8 ViperFX Magisk module",
      post: "galaxy-s8-viperfx-magisk-module",
      url: "https://github.com/mrr-01/samsung-s8-viperfx-fix-lineageos21",
      text: "Enables ViperFX audio processing on LineageOS 21 and custom ROMs through low-level system and kernel module work." },
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
