import type { Project } from "@/types/project";
import vioexelixiImage from "@/images/vioexelixi.webp";
import escapeImage from "@/images/escape.webp";
import uibsImage from "@/images/uibs.webp";
import pathImage from "@/images/unity.webp";
import deliveranceImage from "@/images/deliverance.webp";
import greenieImage from "@/images/greenie2.webp";
import sarahKeinImage from "@/images/Sarak.webp";
import lissImage from "@/images/liss.webp";
import portfolioImage from "@/images/portfolio.webp";

export const projects: Project[] = [
  {
    title: "Portfolio",
    type: "Website",
    image: portfolioImage,
    links: [
      { label: "Website", href: "https://elkapshub.com/" },
      { label: "Figma", href: "https://www.figma.com/design/68J0mBv8VNzgOqLQ5qXGVT/Portfolio-redesign-?node-id=0-1&t=hoFprR5PRYA3OaiF-1" },
    ],
  },
  {
    title: "Vioexelixi Chem Lab",
    type: "Website",
    image: vioexelixiImage,
    links: [
      { label: "Website", href: "https://vioekseliksi.netlify.app/" },
      { label: "GitHub", href: "https://github.com/John-Nik/Vioekseliksi-website" },
    ],
  },
  {
    title: "Espace",
    type: "Website",
    image: escapeImage,
    links: [
      { label: "Website", href: "https://nimble-crisp-05420a.netlify.app/" },
      { label: "GitHub", href: "https://github.com/kaponael/escape" },
    ],
  },
  {
    title: "UIBS/University Project",
    type: "University project",
    image: uibsImage,
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=2W6lYNC7hJU" },
    ],
  },
  {
    title: "PATH",
    type: "VR game",
    image: pathImage,
    links: [
      { label: "Instagram", href: "https://www.instagram.com/path.vr_game/" },
      { label: "YouTube", href: "https://www.youtube.com/watch?v=xw5J1QXvKzI" },
    ],
  },
  {
    title: "Deliverance",
    type: "Video project",
    image: deliveranceImage,
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=hUfqJgp1XHg" },
    ],
  },
  {
    title: "Greenie",
    type: "UI / UX design",
    image: greenieImage,
    links: [
      { label: "Figma", href: "https://www.figma.com/design/L70r7UlguU4PqM6c7Y3nK5/Greenie-Project" },
    ],
  },
  {
    title: "Sarah Kein",
    type: "Video project",
    image: sarahKeinImage,
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=YkVBH9gXgac" },
    ],
  },
  {
    title: "Liss",
    type: "UI / UX design",
    image: lissImage,
    links: [
      { label: "Figma", href: "https://www.figma.com/design/jXp9RyCK5spYYwnUCHyqQB/LISS?node-id=0-1&t=q4X1ljjOYR6pglFr-1" },
      { label: "Instagram", href: "https://www.instagram.com/lissproject2023/" },
    ],
  },
];
