import type { SkillGroup } from "@/types/skill-group";
import htmlLogo from "@/svgs/html.svg";
import cssLogo from "@/svgs/css.svg";
import javascriptLogo from "@/svgs/javascript.svg";
import typescriptLogo from "@/svgs/typescript.svg";
import sqlLogo from "@/svgs/sql.svg";
import csharpLogo from "@/svgs/csharp.svg";
import tailwindLogo from "@/svgs/tailwindcss.svg";
import vueLogo from "@/svgs/vuejs.svg";
import laravelLogo from "@/svgs/laravel.svg";
import nextLogo from "@/svgs/nextjs.svg";
import reactLogo from "@/svgs/reactjs.svg";
import vscodeLogo from "@/svgs/vscode.svg";
import gitLogo from "@/svgs/git.svg";
import figmaLogo from "@/svgs/figma.svg";
import unityLogo from "@/svgs/unity.svg";
import illustratorLogo from "@/svgs/illustrator.svg";
import photoshopLogo from "@/svgs/photoshop.svg";
import lightroomLogo from "@/svgs/lightroom.svg";
import premiereLogo from "@/svgs/premierepro.svg";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "SQL", logo: sqlLogo },
      { name: "C#", logo: csharpLogo },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Vue.js", logo: vueLogo },
      { name: "Laravel", logo: laravelLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "React", logo: reactLogo },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "VS Code", logo: vscodeLogo },
      { name: "Git", logo: gitLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Unity", logo: unityLogo },
    ],
  },
  {
    id: "adobe",
    title: "Adobe",
    skills: [
      { name: "Illustrator", logo: illustratorLogo },
      { name: "Photoshop", logo: photoshopLogo },
      { name: "Lightroom", logo: lightroomLogo },
      { name: "Premiere Pro", logo: premiereLogo },
    ],
  },
];
