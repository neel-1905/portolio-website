import { projectImages } from "../assets/images/projects";

export type PROJECT = {
  image: string;
  title: string;
  category: string;
  description: string;
  link?: string;
};

export const projects: PROJECT[] = [
  {
    title: "Furation Tech Official Website",
    category: "Website",
    image: projectImages.furation,
    description: "The official website of Furation Tech Solutions Pvt. Ltd.",
    link: "https://www.furation.tech/",
  },
  {
    title: "Steelora",
    category: "CMS",
    image: projectImages.steelora,
    description:
      "Steelora is the newest entrant in the luxury market backbone by the pioneer of stainless steel production. With adopting experience, in parting skills and manufacturing excellence- these describe Steelora and its existence best. Pioneer in the stainless-steel industry we are the renowned name under the Sunrise Group of Industries which is leading the stainless-steel world in the past 30 years. Transcend in quality, commitments, and pricing, we are recognized for our quality and craftsmanship which is beyond comparison. Our state of the art manufacturing facility is in Gujarat which stretches over 60 acres of land.",
    link: "https://wip.steelora.com",
  },
  {
    title: "Condo Kharido",
    category: "CMS",
    image: projectImages.condoKharido,
    description:
      "Search for new condos, upcoming projects, and browse through insightful podcasts and blogs. Let Sanjay Gupta guide you to your dream home.",
    link: "https://wip.condokharido.ca/home",
  },
  {
    title: "Fantom Play",
    category: "Admin Panel",
    image: projectImages.fantomPlay,
    description:
      "FantomPlay is a fantasy PlayTech which rewards users for playing quiz based and live tournaments based on sports events and other trivia. This Admin Panel is made for creating an updating the events that are available on the mobile application",
    link: "https://admin-dev.fantomplay.com/login",
  },
  {
    title: "Agent Rider Landing Page",
    category: "Website",
    image: projectImages.agentRider,
    description:
      "This website is the landing page for the Agent Rider mobile application which is meant for creating a real estate profile for agents and communicate with others in the field.",
    link: "https://www.agentrider.com/",
  },
  {
    title: "Aspect Sports",
    category: "Website",
    image: projectImages.aspectSports,
    description:
      "Aspect Sports website was developed for creating and online presence of the Aspect Group. They are also the owner of the ISPL team Tiigers of Kolkata.",
    link: "https://aspectsports.in/",
  },
  {
    title: "Reserve 1st: Guest Management System",
    category: "Web Application",
    image: projectImages.reserve1st,
    description:
      "Reserve1st is a guest management system developed for managing guest reservations, bookings and maintain a record of the clients for future use by the restaurant. This system allows the restaurant to keeps track of its guests and manage bookings accordingly",
    link: "https://estella.reserve1st.com/",
  },
];
