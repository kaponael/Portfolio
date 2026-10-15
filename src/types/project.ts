import type { StaticImageData } from "next/image";
import type { ProjectLink } from "./project-link";

export type Project = {
  title: string;
  type: string;
  image: StaticImageData;
  links: ProjectLink[];
};
