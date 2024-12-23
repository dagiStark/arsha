import { Activity, Scan, Album, Radio } from "lucide-react";
import portfolio1 from "../assets/img/masonry-portfolio/masonry-portfolio-1.jpg";
import portfolio2 from "../assets/img/masonry-portfolio/masonry-portfolio-2.jpg";
import portfolio3 from "../assets/img/masonry-portfolio/masonry-portfolio-3.jpg";
import portfolio4 from "../assets/img/masonry-portfolio/masonry-portfolio-4.jpg";
import portfolio5 from "../assets/img/masonry-portfolio/masonry-portfolio-5.jpg";
import portfolio6 from "../assets/img/masonry-portfolio/masonry-portfolio-6.jpg";
import portfolio7 from "../assets/img/masonry-portfolio/masonry-portfolio-7.jpg";
import portfolio8 from "../assets/img/masonry-portfolio/masonry-portfolio-8.jpg";
import portfolio9 from "../assets/img/masonry-portfolio/masonry-portfolio-9.jpg";

import team1 from "../assets/img/team/team-1.jpg";
import team2 from "../assets/img/team/team-2.jpg";
import team3 from "../assets/img/team/team-3.jpg";
import team4 from "../assets/img/team/team-4.jpg";

import testimonial1 from "../assets/img/testimonials/testimonials-1.jpg";
import testimonial2 from "../assets/img/testimonials/testimonials-2.jpg";
import testimonial3 from "../assets/img/testimonials/testimonials-3.jpg";
import testimonial4 from "../assets/img/testimonials/testimonials-4.jpg";
import testimonial5 from "../assets/img/testimonials/testimonials-5.jpg";

export const navbarLinks = [
  {
    name: "Home",
    path: "hero",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Team",
    path: "team",
  },
  {
    name: "Pricing",
    path: "pricing",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const aboutItems = [
  {
    id: 1,
    description:
      "We strive to deliver exceptional solutions with creativity and expertise.",
  },
  {
    id: 2,
    description:
      "Our mission is to innovate and exceed expectations in every project.",
  },
  {
    id: 3,
    description: "We value teamwork, integrity, and a passion for excellence.",
  },
];

export const skillItems = [
  {
    name: "HTML",
    percentage: 90,
  },
  {
    name: "CSS",
    percentage: 70,
  },
  {
    name: "JavaScript",
    percentage: 80,
  },
  {
    name: "PhotoShop",
    percentage: 60,
  },
];

export const serviceItems = [
  {
    title: "Web Design",
    description:
      "Creating visually appealing and user-friendly website layouts.",
    icon: Activity,
  },
  {
    title: "Web Development",
    description: "Building responsive, robust, and scalable web applications.",
    icon: Album,
  },
  {
    title: "BOT Development",
    description:
      "Developing intelligent bots to automate tasks and improve efficiency.",
    icon: Radio,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging user interfaces for seamless experiences.",
    icon: Scan,
  },
];

export const portfolioItems = [
  {
    img: portfolio1,
    category: "app",
  },
  {
    img: portfolio2,
    category: "card",
  },
  {
    img: portfolio3,
    category: "web",
  },

  {
    img: portfolio4,
    category: "app",
  },
  {
    img: portfolio5,
    category: "card",
  },
  {
    img: portfolio6,
    category: "web",
  },
  {
    img: portfolio7,
    category: "app",
  },
  {
    img: portfolio8,
    category: "card",
  },
  {
    img: portfolio9,
    category: "web",
  },
];

export const teamMembers = [
  {
    img: team1,
    name: "John Doe",
    designation: "CEO",
    description: "Leading the company with strategic vision and innovation.",
  },
  {
    img: team2,
    name: "Jane Smith",
    designation: "CTO",
    description:
      "Driving technological advancements and ensuring robust solutions.",
  },
  {
    img: team3,
    name: "Mark Johnson",
    designation: "COO",
    description: "Overseeing operations to ensure efficiency and excellence.",
  },
  {
    img: team4,
    name: "Emily Davis",
    designation: "CFO",
    description: "Managing financial strategies to achieve sustainable growth.",
  },
];

export const pricingCards = [
  {
    title: "Basic",
    price: 0,
    description: "Perfect for individuals getting started with basic features.",
    features: [
      "Access to essential tools",
      "Basic analytics and reporting",
      "Community support",
      "Limited customization options",
      "Up to 5 projects",
    ],
  },
  {
    title: "Pro",
    price: 29,
    description: "Designed for professionals who need advanced functionality.",
    features: [
      "All Basic features included",
      "Advanced analytics and insights",
      "Priority customer support",
      "Customizable templates",
      "Unlimited projects",
    ],
  },
  {
    title: "Enterprise",
    price: 49,
    description: "Comprehensive features tailored for large-scale businesses.",
    features: [
      "All Pro features included",
      "Dedicated account manager",
      "Team collaboration tools",
      "API access and integrations",
      "Custom enterprise solutions",
    ],
  },
];


export const testimonialItems = [
  {
    id: 1,
    name: "John Doe",
    designation: "Co-Founder & CEO",
    description:
      "This team transformed our vision into reality with exceptional expertise and creativity.",
    img: testimonial1,
    rating: 5,
  },
  {
    id: 2,
    name: "Jena Karlis",
    designation: "Store Owner",
    description:
      "Their attention to detail and dedication have greatly improved my business operations.",
    img: testimonial2,
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Wilsson",
    designation: "HR",
    description:
      "A fantastic experience! They delivered outstanding results, surpassing all expectations.",
    img: testimonial3,
    rating: 5,
  },
  {
    id: 4,
    name: "Matt Brandon",
    designation: "Freelancer",
    description:
      "Highly professional and incredibly talented, they made the process smooth and enjoyable.",
    img: testimonial4,
    rating: 5,
  },
  {
    id: 5,
    name: "John Larsor",
    designation: "Entrepreneur",
    description:
      "Their innovative solutions have significantly enhanced my business growth and success.",
    img: testimonial5,
    rating: 5,
  },
];


export const frequentQuestions = [
  {
    title: "What services do you offer?",
    description:
      "We offer a wide range of services, including web design, development, UI/UX design, and bot development tailored to meet your needs.",
  },
  {
    title: "How long does it take to complete a project?",
    description:
      "The timeline depends on the project's complexity and requirements. Typically, projects take between 2 to 6 weeks to complete.",
  },
  {
    title: "Do you provide post-launch support?",
    description:
      "Yes, we offer ongoing maintenance and support to ensure your product continues to perform optimally after launch.",
  },
  {
    title: "What is your pricing structure?",
    description:
      "Our pricing is flexible and depends on the project scope. We provide customized quotes after an initial consultation.",
  },
  {
    title: "Can you work with tight deadlines?",
    description:
      "Yes, we can accommodate tight deadlines without compromising quality. Please share your requirements, and we’ll do our best to meet them.",
  },
];

export const contactLinks = {
  usefulLinks: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/",
    },
    {
      label: "Services",
      path: "/",
    },
    {
      label: "Terms of Service",
      path: "/",
    },
  ],
  serviceLinks: [
    {
      label: "Web Design",
      path: "/",
    },
    {
      label: "Web Development",
      path: "/",
    },
    {
      label: "Product Management",
      path: "/",
    },
    {
      label: "Marketing",
      path: "/",
    },
  ],
};
