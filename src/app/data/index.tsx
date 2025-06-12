import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpo,
  SiRedis,
  SiSolidity,
  SiCplusplus,
  SiPhp,
  SiPython,
} from "react-icons/si";

const projects = [
  {
    title: "mini crm - ai customer segmentation",
    description:
      "lightweight CRM w/ rule-based filtering + Gemini AI insights. modular backend (node, prisma, mysql), clean frontend with reusable components. bg tasks managed via bullmq + redis.",
    url: "https://github.com/susmitadas22/mini-crm",
  },
  {
    title: "trubuy - decentralized marketplace",
    description:
      "web3 product marketplace with escrow logic and loyalty rewards (ERC-20). integrated IPFS, MetaMask, and dynamic UI. smart contracts deployed via hardhat.",
    url: "https://github.com/susmitadas22/trubuy",
  },
  {
    title: "kisan mitra - crop disease alert app",
    description:
      "mobile app that detects crop diseases from photos + pushes alerts to farmers. built with react native (expo), nestjs backend, ML model in flask. focused on collaboration and community-based responses.",
    url: "https://github.com/susmitadas22/kisan-mitra",
  },
];

const skills = [
  { name: "next.js", url: "https://nextjs.org/", icon: <SiNextdotjs /> },
  { name: "react", url: "https://react.dev/", icon: <SiReact /> },
  { name: "node.js", url: "https://nodejs.org/", icon: <SiNodedotjs /> },
  {
    name: "tailwindcss",
    url: "https://tailwindcss.com/",
    icon: <SiTailwindcss />,
  },
  { name: "prisma", url: "https://www.prisma.io/", icon: <SiPrisma /> },
  {
    name: "typescript",
    url: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
  },
  { name: "mongodb", url: "https://www.mongodb.com/", icon: <SiMongodb /> },
  { name: "mysql", url: "https://www.mysql.com/", icon: <SiMysql /> },
  {
    name: "postgres",
    url: "https://www.postgresql.org/",
    icon: <SiPostgresql />,
  },
  { name: "expo", url: "https://expo.dev/", icon: <SiExpo /> },
  { name: "redis", url: "https://redis.io/", icon: <SiRedis /> },
  { name: "solidity", url: "https://soliditylang.org/", icon: <SiSolidity /> },
  { name: "c++", url: "https://isocpp.org/", icon: <SiCplusplus /> },
  { name: "php", url: "https://www.php.net/", icon: <SiPhp /> },
  { name: "python", url: "https://www.python.org/", icon: <SiPython /> },
];

export { projects, skills };
