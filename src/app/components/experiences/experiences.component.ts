import { Component } from '@angular/core';
import {IExperience} from "../../interface/i-experience";

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.less']
})
export class ExperiencesComponent {
  readonly experiences: IExperience[] = [
    {
      title: "IT Specialist",
      company: "iFast Capital Sdn. Bhd.",
      duration: "Sep 2022 - Present",
      description: [
        "Worked with business user to plan out system requirements on system enhancements and new developments.",
        "Provided system and application support on company's compliance learning assessment system and bond management system.",
        "Helped business user to amend data in database, for correcting user input error or system error.",
        "Developed feature enhancements for company’s bond management system and compliance learning assessment system.",
        "Developed enhancements and add-ons for external company's CRM (customer relationship management) system for creating and managing financial advisors’ website."
      ],
      techStacks: ["Application Support", "Angular", "AngularJS", "Spring Boot", "NG-ZORRO", "Tailwind CSS"]
    },
    {
      title: "Intern, IT Partnership",
      company: "iFast Capital Sdn. Bhd.",
      duration: "May - Aug 2022",
      description: [
        "Developed enhancement for company’s compliance learning and assessment system.",
        "Planned and developed new module for external company's CRM (customer relationship management) system for creating and managing financial advisors’ website."
      ],
      techStacks: ["Angular", "AngularJS", "Spring Boot", "NG-ZORRO", "Tailwind CSS"]
    },
    {
      title: "IT Security Trainee",
      company: "Condition Zebra (M) Sdn. Bhd.",
      duration: "Jan - Mar 2020",
      description: [
        "Assisted in organizing reports, verifying vulnerability assessment results.",
        "Participated in social engineering with seniors and other interns.",
        "Carried out a network security automated assessment and reporting with other interns.",
      ],
      techStacks: []
    }
  ];

}