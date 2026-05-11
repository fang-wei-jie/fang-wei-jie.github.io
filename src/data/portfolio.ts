import angularLogo from '../assets/frameworks/angular.svg';
import bukkuLogo from '../assets/company_logo/Bukku.png';
import ifastLogo from '../assets/company_logo/iFAST.jpeg';
import angularJsLogo from '../assets/skills/angularJS.png';
import bootstrap3Logo from '../assets/skills/bootstrap-3.png';
import javaLogo from '../assets/skills/java.png';
import jsLogo from '../assets/skills/js.png';
import laravelLivewireLogo from '../assets/skills/laravel-livewire.png';
import ngZorroLogo from '../assets/skills/ng-zorro.png';
import phpLogo from '../assets/skills/php.png';
import springBootLogo from '../assets/skills/spring-boot.png';
import tailwindLogo from '../assets/skills/tailwind-css.png';
import typescriptLogo from '../assets/skills/typescript.png';
import vscodeLogo from '../assets/tools/vscode.svg';
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
  content: ExperienceContent[];
}

export const languages = {
  typeScript: { link: typescriptLogo, name: 'TypeScript' },
  javaScript: { link: jsLogo, name: 'JavaScript' },
  java: { link: javaLogo, name: 'Java' },
  php: { link: phpLogo, name: 'PHP' },
} satisfies Record<string, Skill>;

export const techStacks = {
  angular: { link: angularLogo, name: 'Angular' },
  angularJs: { link: angularJsLogo, name: 'AngularJS' },
  springBoot: { link: springBootLogo, name: 'Spring Boot' },
  tailwind: { link: tailwindLogo, name: 'Tailwind CSS' },
  ngZorro: { link: ngZorroLogo, name: 'NG-ZORRO' },
  laravel: { link: 'https://laravel.com/img/logomark.min.svg', name: 'Laravel' },
  bootstrap5: { link: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg', name: 'Bootstrap 5' },
  bootstrap3: { link: bootstrap3Logo, name: 'Bootstrap 3' },
  laravelLivewire: { link: laravelLivewireLogo, name: 'Laravel Livewire' },
} satisfies Record<string, Skill>;

export const tools = {
  vscode: { link: vscodeLogo, name: 'VS Code' },
  idea: { link: 'https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg', name: 'IntelliJ IDEA' },
  phpStorm: { link: 'https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg', name: 'PhpStorm' },
} satisfies Record<string, Skill>;

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Bukku',
    companyLogo: bukkuLogo,
    color: '#57b3c3',
    duration: 'Since Apr 2023',
    content: [
      {
        type: 'Current and Upcoming Projects',
        description: null,
        projects: [
          {
            name: 'MyInvois Integration',
            description: "integrating Malaysia's e-invoicing platform with accounting software",
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

export const skillGroups = [
  {
    title: 'Languages',
    skills: [languages.php, languages.typeScript, languages.javaScript, languages.java],
  },
  {
    title: 'Frameworks',
    skills: [
      techStacks.laravel,
      techStacks.angular,
      techStacks.angularJs,
      techStacks.springBoot,
      techStacks.tailwind,
      techStacks.ngZorro,
      techStacks.bootstrap5,
      techStacks.laravelLivewire,
    ],
  },
  {
    title: 'Tools',
    skills: [tools.phpStorm, tools.idea, tools.vscode],
  },
];
