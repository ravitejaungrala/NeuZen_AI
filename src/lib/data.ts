import {
  BrainCircuit,
  Briefcase,
  DollarSign,
  HeartPulse,
  LayoutGrid,
  ShieldCheck,
  ShoppingBag,
  Bot,
  Cloud,
  BarChart,
  type LucideIcon,
  BookOpen,
  Users,
} from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

export const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Solutions' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
];

export const companyLinks = [
    { href: '/about', label: 'About Us', description: 'Learn more about our mission, vision, and team.' },
    { href: '/careers', label: 'Careers', description: 'Explore open positions and join our innovative team.' },
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
  { name: 'Finance', icon: DollarSign },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Manufacturing', icon: LayoutGrid },
  { name: 'Security', icon: ShieldCheck },
  { name: 'Business', icon: Briefcase },
];

export const caseStudies = [
  {
    company: 'QuantumLeap Corp',
    title: 'Boosting ROI by 300% with Predictive Analytics',
    description: 'QuantumLeap Corp leveraged our AI to optimize their supply chain, resulting in a massive increase in efficiency and profitability.',
    image: findImage('case-study-1'),
    link: '#',
  },
  {
    company: 'InnovateHealth',
    title: 'Revolutionizing Patient Care with AI-Powered Diagnostics',
    description: 'InnovateHealth implemented our diagnostic tools, reducing misdiagnosis rates by 40% and improving patient outcomes.',
    image: findImage('case-study-2'),
    link: '#',
  },
  {
    company: 'SecureNet',
    title: 'Enhancing Cybersecurity with Proactive Threat Detection',
    description: 'SecureNet integrated our AI to monitor and neutralize threats in real-time, preventing major data breaches.',
    image: findImage('case-study-3'),
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
        title: "Data Analytics & Insights",
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
