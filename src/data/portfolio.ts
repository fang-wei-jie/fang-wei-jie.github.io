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
  { title: 'Tools', skills: [{ link: 'https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg', name: 'PhpStorm' }] },
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
        type: 'Current and Upcoming Projects',
        description: null,
        projects: [
          {
            name: 'Cooking something Next-level',
            description: 'a major frontend architectural revamp is underway.\nhint: A popular framework that is the natural next step for React developers.',
            info: null,
          },
          {
            name: 'Payable Payment',
            description: 'streamlining the payment of purchase bills to suppliers for a seamless experience',
            info: null,
          },
        ],
      },
      {
        type: 'Significant Projects',
        description: null,
        projects: [
          {
            name: 'Bank Feed',
            description: 'with Smart Reconciliation, a seamless bank reconciliation experience',
            info: ['Maybank integration, for both Sole Prop and non Sole Prop users'],
          },
          {
            name: 'Aging Report',
            description: 'financial document that lists unpaid customer invoices and their due dates to identify overdue payments',
            info: [
              'added ability to generate report by the month(s), in addition to day(s)',
              'fully reworked internals, to be more efficient and maintainable',
            ],
          },
        ],
      },
      {
        type: 'Participated Projects',
        description: null,
        projects: [
          {
            name: 'MyInvois Integration',
            description: "integrating Malaysia's e-invoicing platform with accounting software",
            info: null,
          },
          {
            name: 'Financing Portal',
            description: 'with Funding Societies, applying for financing directly from Bukku',
            info: null,
          },
          {
            name: 'Flow',
            description: 'flowing "Sales" from POS and e-Commerce Platform into Bukku auto-magically',
            info: null,
          },
          {
            name: 'Feature & Quota Limit Revamp',
            description: 'feature and quota limiting for different plans',
            info: null,
          },
        ],
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
