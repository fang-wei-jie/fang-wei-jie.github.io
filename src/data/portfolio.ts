export interface Skill {
  link: string;
  name: string;
}

export interface Project {
  name: string;
  description: string;
  techStacks: Skill[];
  link?: string;
  linkName?: string;
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
  companyLogo: string;
  color: string;
  duration: string;
  content: ExperienceContent[];
}

export const languages = {
  typeScript: { link: '/assets/skills/typescript.png', name: 'TypeScript' },
  javaScript: { link: '/assets/skills/js.png', name: 'JavaScript' },
  java: { link: '/assets/skills/java.png', name: 'Java' },
  php: { link: '/assets/skills/php.png', name: 'PHP' },
} satisfies Record<string, Skill>;

export const techStacks = {
  angular: { link: '/assets/frameworks/angular.svg', name: 'Angular' },
  angularJs: { link: '/assets/skills/angularJS.png', name: 'AngularJS' },
  springBoot: { link: '/assets/skills/spring-boot.png', name: 'Spring Boot' },
  tailwind: { link: '/assets/skills/tailwind-css.png', name: 'Tailwind CSS' },
  ngZorro: { link: '/assets/skills/ng-zorro.png', name: 'NG-ZORRO' },
  laravel: { link: 'https://laravel.com/img/logomark.min.svg', name: 'Laravel' },
  bootstrap5: { link: 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg', name: 'Bootstrap 5' },
  bootstrap3: { link: '/assets/skills/bootstrap-3.png', name: 'Bootstrap 3' },
  laravelLivewire: { link: '/assets/skills/laravel-livewire.png', name: 'Laravel Livewire' },
} satisfies Record<string, Skill>;

export const tools = {
  vscode: { link: '/assets/tools/vscode.svg', name: 'VS Code' },
  figma: { link: '/assets/tools/Figma-Icon.svg', name: 'Figma' },
  idea: { link: 'https://resources.jetbrains.com/storage/products/company/brand/logos/IntelliJ_IDEA_icon.svg', name: 'IntelliJ IDEA' },
  phpStorm: { link: 'https://resources.jetbrains.com/storage/products/company/brand/logos/PhpStorm_icon.svg', name: 'PhpStorm' },
} satisfies Record<string, Skill>;

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Bukku',
    companyLogo: '/assets/company_logo/Bukku.png',
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
    companyLogo: '/assets/company_logo/iFAST.jpeg',
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
    companyLogo: '/assets/company_logo/iFAST.jpeg',
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
  {
    title: 'IT Security Trainee',
    company: 'Condition Zebra',
    companyLogo: '/assets/company_logo/ConditionZebra.png',
    color: '#b02024',
    duration: 'Jan 2020 - Mar 2020',
    content: [
      {
        type: null,
        description: [
          'Assisted in organizing reports, verifying vulnerability assessment results.',
          'Participated in social engineering with seniors and other interns.',
          'Carried out a network security automated assessment and reporting with other interns.',
        ],
        projects: null,
      },
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Sport Center Booking Managing System',
    description: 'Booking Management System',
    techStacks: [techStacks.laravel, techStacks.laravelLivewire, techStacks.bootstrap5],
    link: 'https://neweracollege365-my.sharepoint.com/:v:/g/personal/fangweijie1327_e_newera_edu_my/EYiHka8btGpPupwtSNqwHfMBcrc0sMl30CHDKVEHqpnjnQ?e=1mfXAo',
    linkName: 'Demo Video',
  },
  {
    name: 'LivesUnderTheSea Promotional Website',
    description: 'Website Prototype',
    techStacks: [tools.figma],
    link: 'https://www.figma.com/proto/22hkRIM7Fq6vq4PFxTgRjU/HCI-Website-Project?page-id=0%3A1&node-id=75%3A2&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=75%3A2',
  },
  {
    name: 'Pre- and Post-Pregnancy Tracking and Advisory App',
    description: 'App Flow and UI Mockup',
    techStacks: [tools.figma],
    link: 'https://www.figma.com/file/7mNJfNS7oh4OydTaEfll3e/Pre--and-Post-Pregnancy-Tracking-and-Advisory-App?node-id=76%3A12930',
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
