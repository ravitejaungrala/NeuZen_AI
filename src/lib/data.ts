import {
  BrainCircuit,
  Briefcase,
  DollarSign,
  HeartPulse,
  LayoutGrid,
  ShieldCheck,
  ShoppingBag,
  Bot,
  BarChart,
  type LucideIcon,
  BookOpen,
  Users,
  GraduationCap,
  Landmark,
  Database,
  Cloud,
  Code,
  Share2,
  Cpu,
  Server,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions/industries', label: 'Industries' },
  { href: '/solutions/case-studies', label: 'Case Studies' },
  { href: '/products', label: 'Products' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export const companyLinks = [
    { href: '/about', label: 'About Us', description: 'Learn more about our mission, vision, and team.' },
    { href: '/careers', label: 'Careers', description: 'Explore open positions and join our innovative team.' },
    { href: '/insights', label: 'Insights', description: 'Our thoughts on the present and future of AI.'},
]

export const products = [
  {
    title: 'Nexus Intelligence',
    description: 'Our flagship AI platform that integrates seamlessly with your existing data streams to provide actionable insights.',
    image: findImage('product-1'),
    link: '/products',
  },
  {
    title: 'Aura Automations',
    description: 'A powerful chatbot and workflow automation tool designed to enhance customer engagement and streamline operations.',
    image: findImage('product-2'),
    link: '/products',
  },
  {
    title: 'Synapse Cloud',
    description: 'Secure and scalable cloud infrastructure optimized for high-performance AI model training and deployment.',
    image: findImage('product-3'),
    link: '/products',
  },
  {
    title: 'Quantum Predict',
    description: 'Advanced predictive analytics to forecast market trends, customer behavior, and operational needs with unparalleled accuracy.',
    image: findImage('product-4'),
    link: '/products',
  },
];

export const industries = [
  { 
    name: 'Finance', 
    icon: DollarSign, 
    description: 'Empowering financial institutions with AI-driven insights for risk management, algorithmic trading, and personalized customer experiences. Our solutions help detect fraud, optimize investment strategies, and automate compliance.',
    image: findImage('industry-finance')
  },
  { 
    name: 'Healthcare', 
    icon: HeartPulse,
    description: 'Transforming patient care through AI-powered diagnostics, personalized treatment plans, and streamlined hospital operations. We help predict disease outbreaks, analyze medical imaging, and improve clinical trial efficiency.',
    image: findImage('industry-healthcare')
  },
  { 
    name: 'Retail', 
    icon: ShoppingBag,
    description: 'Revolutionizing the shopping experience with personalized recommendations, inventory optimization, and dynamic pricing. Our AI helps retailers understand customer behavior, forecast demand, and automate supply chains.',
    image: findImage('industry-retail')
  },
  { 
    name: 'Manufacturing', 
    icon: LayoutGrid,
    description: 'Optimizing production lines with predictive maintenance, quality control automation, and supply chain management. NeuZenAI enhances efficiency, reduces downtime, and improves product quality for manufacturers.',
    image: findImage('industry-manufacturing')
  },
  { 
    name: 'Security', 
    icon: ShieldCheck,
    description: 'Enhancing digital and physical security with proactive threat detection, anomaly identification, and intelligent surveillance systems. Our AI solutions protect critical assets and data from emerging threats.',
    image: findImage('industry-security')
  },
  { 
    name: 'Business', 
    icon: Briefcase,
    description: 'Streamlining corporate operations with intelligent automation, data-driven decision-making, and enhanced customer relationship management. We help businesses of all sizes improve productivity and foster growth.',
    image: findImage('industry-business')
  },
  { 
    name: 'Education', 
    icon: GraduationCap,
    description: 'Personalizing the learning journey with adaptive learning platforms, automated grading systems, and intelligent content delivery. Our AI tools support educators and empower students to achieve their full potential.',
    image: findImage('industry-education')
  },
  { 
    name: 'Government', 
    icon: Landmark,
    description: 'Improving public services and operational efficiency with AI-powered data analysis, resource allocation, and smart city solutions. We assist government agencies in serving citizens more effectively and transparently.',
    image: findImage('industry-government')
  },
];

export const caseStudies = [
  {
    company: 'QuantumLeap Corp',
    title: 'Boosting ROI by 300% with Predictive Analytics',
    description: 'QuantumLeap Corp leveraged our AI to optimize their supply chain, resulting in a massive increase in efficiency and profitability.',
    challenge: 'QuantumLeap Corp faced significant challenges with inventory management, leading to overstocking of some products and stockouts of others, which hurt their bottom line.',
    solution: 'NeuZenAI deployed our Quantum Predict model to analyze historical sales data, market trends, and seasonal demand, providing highly accurate inventory forecasts.',
    results: 'The company achieved a 35% reduction in carrying costs, a 50% decrease in stockouts, and an overall 300% return on their investment within the first year.',
    image: findImage('case-study-1'),
    link: '#',
  },
  {
    company: 'InnovateHealth',
    title: 'Revolutionizing Patient Care with AI-Powered Diagnostics',
    description: 'InnovateHealth implemented our diagnostic tools, reducing misdiagnosis rates by 40% and improving patient outcomes.',
    challenge: 'Diagnostic errors in medical imaging were leading to delayed treatments and poor patient outcomes. Radiologists were overwhelmed with the volume of images needing review.',
    solution: 'Our AI-powered image analysis tool was integrated into their existing PACS system. The tool flags potential anomalies in scans for radiologists to review, prioritizing critical cases.',
    results: 'This led to a 40% reduction in diagnostic errors, a 60% faster turnaround time for scan interpretations, and a significant improvement in patient survival rates for critical conditions.',
    image: findImage('case-study-2'),
    link: '#',
  },
  {
    company: 'SecureNet',
    title: 'Enhancing Cybersecurity with Proactive Threat Detection',
    description: 'SecureNet integrated our AI to monitor and neutralize threats in real-time, preventing major data breaches.',
    challenge: 'SecureNet was struggling to keep up with the increasing volume and sophistication of cyber threats, with their existing systems being reactive rather than proactive.',
    solution: 'We implemented our Nexus Intelligence platform to continuously monitor network traffic for anomalous behavior. The system uses machine learning to identify and neutralize zero-day threats in real-time.',
    results: 'The implementation resulted in a 95% reduction in successful security breaches and saved the company millions in potential damages and regulatory fines.',
    image: findImage('case-study-3'),
    link: '#',
  },
   {
    company: 'RetailGiant',
    title: 'Personalizing Shopping Experiences at Scale',
    description: 'RetailGiant used our recommendation engines to create personalized customer journeys, increasing sales by 25%.',
    challenge: 'With millions of customers and products, RetailGiant found it difficult to provide a truly personalized shopping experience, leading to low engagement and conversion rates.',
    solution: 'Our Aura Automations engine was used to create a hyper-personalized recommendation system that analyzes user behavior in real-time to suggest relevant products across the website and email campaigns.',
    results: 'RetailGiant saw a 25% increase in average order value, a 30% rise in customer retention, and a significant boost in overall online sales.',
    image: findImage('blog-4'), // Using a blog image as placeholder
    link: '#',
  },
];

export const services = [
    {
        icon: BrainCircuit,
        title: "Custom AI Development",
        description: "Bespoke AI models and solutions tailored to your unique business challenges and goals."
    },
    {
        icon: Bot,
        title: "AI Chatbot Solutions",
        description: "Intelligent, human-like chatbots for customer service, lead generation, and internal support."
    },
    {
        icon: BarChart,
        title: "Data Science & Analytics",
        description: "Unlock the power of your data with advanced analytics to drive informed decision-making."
    },
];

export const blogPosts = [
    {
        slug: 'the-future-of-ai-in-business',
        title: 'The Future of AI in Business: Trends to Watch',
        description: 'Explore the upcoming trends in artificial intelligence and how they are set to revolutionize the business landscape.',
        date: 'October 26, 2023',
        image: findImage('blog-1'),
    },
    {
        slug: 'ethical-ai-navigating-the-complexities',
        title: 'Ethical AI: Navigating the Complexities of Bias and Fairness',
        description: 'A deep dive into the importance of ethical considerations in AI development and deployment.',
        date: 'October 15, 2023',
        image: findImage('blog-2'),
    },
    {
        slug: 'getting-started-with-machine-learning',
        title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
        description: 'Our comprehensive guide to help you take your first steps into the world of machine learning.',
        date: 'September 30, 2023',
        image: findImage('blog-3'),
    },
     {
        slug: 'how-ai-is-transforming-software-development',
        title: 'How AI is Transforming Software Development',
        description: 'From code generation to automated testing, AI is changing the way we build software. Learn how you can leverage it.',
        date: 'September 12, 2023',
        image: findImage('blog-4'),
    }
];

export const teamMembers = [
    { name: "Dr. Evelyn Reed", role: "Founder & CEO", image: findImage('avatar-1') },
    { name: "Marcus Chen", role: "Chief Technology Officer", image: findImage('avatar-2') },
    { name: "Jasmine Patel", role: "Head of AI Research", image: findImage('avatar-3') },
];

export const jobOpenings = [
    {
        department: "Engineering",
        roles: [
            { title: "Senior AI Engineer", location: "Remote", type: "Full-time" },
            { title: "Frontend Developer (React)", location: "New York, NY", type: "Full-time" },
            { title: "Cloud Infrastructure Specialist", location: "Remote", type: "Contract" },
        ]
    },
    {
        department: "Data Science",
        roles: [
            { title: "Lead Data Scientist", location: "San Francisco, CA", type: "Full-time" },
            { title: "Machine Learning Researcher", location: "Remote", type: "Full-time" },
        ]
    },
    {
        department: "Product",
        roles: [
            { title: "Product Manager, AI Platforms", location: "New York, NY", type: "Full-time" },
        ]
    }
];

export const techStack = [
    { name: "Python", icon: Code },
    { name: "TensorFlow", icon: Cpu },
    { name: "PyTorch", icon: Cpu },
    { name: "scikit-learn", icon: BarChart },
    { name: "Google Cloud", icon: Cloud },
    { name: "AWS", icon: Server },
    { name: "Docker", icon: Database },
    { name: "Kubernetes", icon: Share2 },
];

export const clients = [
    { name: "QuantumLeap", logo: "/logos/quantumleap.svg" },
    { name: "InnovateHealth", logo: "/logos/innovatehealth.svg" },
    { name: "SecureNet", logo: "/logos/securenet.svg" },
    { name: "RetailGiant", logo: "/logos/retailgiant.svg" },
    { name: "FinanceForward", logo: "/logos/financeforward.svg" },
    { name: "EduVantage", logo: "/logos/eduvantage.svg" },
];
