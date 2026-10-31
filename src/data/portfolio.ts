import angularLogo from '../assets/frameworks/angular.svg';
import bukkuLogo from '../assets/company_logo/Bukku.png';
import ifastLogo from '../assets/company_logo/iFAST.jpeg';
import angularJsLogo from '../assets/skills/angularJS.png';
import bootstrap5Logo from '../assets/skills/bootstrap-5.png';
import ideaLogo from '../assets/skills/IDEA.png';
import javaLogo from '../assets/skills/java.png';
import jsLogo from '../assets/skills/js.png';
import ngZorroLogo from '../assets/skills/ng-zorro.png';
import phpLogo from '../assets/skills/php.png';
import springBootLogo from '../assets/skills/spring-boot.png';
import tailwindLogo from '../assets/skills/tailwind-css.png';
import typescriptLogo from '../assets/skills/typescript.png';
import type { ImageMetadata } from 'astro';

export type PortfolioImage = ImageMetadata | string;

export interface Skill {
  link: PortfolioImage;
  name: string;
}

export interface ExperienceProject {
  name: string;
  description: string;
  info: string[] | null;
}

export interface ExperienceContent {
  type: string | null;
  description: string[] | null;
  projects: ExperienceProject[] | null;
}

export interface Experience {
  title: string;
  company: string;
  companyLogo: ImageMetadata;
  color: string;
  duration: string;
  skills: ExperienceSkillGroup[];
  content: ExperienceContent[];
}

export interface ExperienceSkillGroup {
  title: string;
  skills: Skill[];
}

const bukkuSkills: ExperienceSkillGroup[] = [
  {
    title: 'Language',
    skills: [
      { link: phpLogo, name: 'PHP' },
      { link: typescriptLogo, name: 'TypeScript' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { link: 'https://laravel.com/img/logomark.min.svg', name: 'Laravel' },
      { link: 'https://cdn.simpleicons.org/nextdotjs/000000', name: 'NextJS' },
      { link: 'https://cdn.simpleicons.org/antdesign/0170FE', name: 'Ant Design' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { link: 'https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg', name: 'PhpStorm' },
      { link: 'https://cdn.simpleicons.org/claude', name: 'Claude' },
    ],
  },
];

const ifastSkills: ExperienceSkillGroup[] = [
  {
    title: 'Language',
    skills: [
      { link: javaLogo, name: 'Java' },
      { link: typescriptLogo, name: 'TypeScript' },
      { link: jsLogo, name: 'JavaScript' },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { link: springBootLogo, name: 'Spring Boot' },
      { link: angularLogo, name: 'Angular' },
      { link: angularJsLogo, name: 'AngularJS' },
      { link: tailwindLogo, name: 'Tailwind CSS' },
      { link: ngZorroLogo, name: 'NG-ZORRO' },
      { link: bootstrap5Logo, name: 'Bootstrap 5' },
    ],
  },
  { title: 'Tools', skills: [{ link: ideaLogo, name: 'IntelliJ IDEA' }] },
];

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Bukku',
    companyLogo: bukkuLogo,
    color: '#57b3c3',
    duration: 'Since Apr 2023',
    skills: bukkuSkills,
    content: [
      {
        type: 'Core Platform & Feature Engineering',
        description: null,
        projects: [
          {
            name: 'Payable Payment & Flow',
            description: 'Developed automated purchase bill payment functionality and multi-channel sales synchronisation across POS and e-commerce channels, helping reduce manual data entry in accounting workflows.',
            info: null,
          },
          {
            name: 'Feature & Quota System Revamp',
            description: 'Contributed to revamping plan-based feature controls and usage limits to support subscription tiering and upselling capabilities.',
            info: null,
          },
          {
            name: 'Aging Report Engine Overhaul',
            description: 'Contributed to refactoring the aging report architecture to expand range-scoping capabilities while improving computational performance and maintainability.',
            info: null,
          },
        ],
      },
      {
        type: 'Fintech & Regulatory Integrations',
        description: null,
        projects: [
          {
            name: 'MyInvois Integration',
            description: "Developed integration with Malaysia's LHDN e-invoicing platform to support regulatory compliance for accounting users.",
            info: null,
          },
          {
            name: 'Maybank M2U Biz Bank Feed',
            description: 'Developed automated bank feed functionality alongside Smart Reconciliation to streamline bank transaction matching.',
            info: null,
          },
          {
            name: 'Financing Portal',
            description: 'Contributed to the development of an embedded SME financing application portal in partnership with Funding Societies.',
            info: null,
          },
        ],
      },
      {
        type: 'Architecture, Migration & AI Adoption',
        description: null,
        projects: [
          {
            name: 'React to Next.js Migration',
            description: 'Contributed to migrating the frontend application from client-rendered React to Next.js, while continuing to develop new features and enhancements across the application.',
            info: null,
          },
          {
            name: 'AI Tooling Task Force',
            description: 'Participated as one of three core engineers evaluating LLM capabilities, including Claude and ChatGPT, and contributing to the evaluation and establishment of AI-assisted development workflows within the engineering organisation.',
            info: null,
          },
        ],
      },
      {
        type: 'API Documentation & Developer Support',
        description: [
          'Maintain Bukku’s public API documentation (OpenAPI specifications), updating the documented contract alongside API changes.',
          'Work with external developers and integration partners to adapt the API to their business workflows and practices: answering technical questions, recommending how to structure integrations, and troubleshooting issues by verifying behaviour against the API source.',
        ],
        projects: [],
      },
    ],
  },
  {
    title: 'Software Engineer, IT Specialist',
    company: 'iFAST',
    companyLogo: ifastLogo,
    color: '#014656',
    duration: 'Sep 2022 - Feb 2023',
    skills: ifastSkills,
    content: [
      {
        type: null,
        description: [
          'Worked with business user to plan out system requirements on system enhancements and new developments.',
          "Provided system and application support on company's compliance learning assessment system and bond management system.",
          'Helped business user to amend data in database, for correcting user input error or system error.',
          "Developed feature enhancements for company's bond management system and compliance learning assessment system.",
          "Developed enhancements and add-ons for external company's CRM (customer relationship management) system for creating and managing financial advisors' website.",
        ],
        projects: null,
      },
    ],
  },
  {
    title: 'Intern, IT Partnership',
    company: 'iFAST',
    companyLogo: ifastLogo,
    color: '#014656',
    duration: 'May 2022 - Aug 2022',
    skills: ifastSkills,
    content: [
      {
        type: null,
        description: [
          "Developed enhancement for company's compliance learning and assessment system.",
          "Planned and developed new module for external company's CRM (customer relationship management) system for creating and managing financial advisors' website.",
        ],
        projects: null,
      },
    ],
  },
];
