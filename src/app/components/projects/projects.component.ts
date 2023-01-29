import { Component } from '@angular/core';
import {IProject} from "../../interface/i-project";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
  readonly projects: IProject[] = [
    {
      name: "Sport Center Booking Managing System",
      description: "Booking Management System made with Laravel 8",
      techStack: ["Laravel", "Bootstrap"],
      link: undefined
    },
    {
      name: "LivesUnderTheSea Promotional Website",
      description: "Website Prototype",
      techStack: [],
      link: "https://www.figma.com/proto/22hkRIM7Fq6vq4PFxTgRjU/HCI-Website-Project?page-id=0%3A1&node-id=75%3A2&viewport=241%2C48%2C0.08&scaling=min-zoom&starting-point-node-id=75%3A2"
    },
    {
      name: "Pre- and Post-Pregnancy Tracking and Advisory App",
      description: "App Flow and UI Mockup on Figma",
      techStack: [],
      link: "https://www.figma.com/file/7mNJfNS7oh4OydTaEfll3e/Pre--and-Post-Pregnancy-Tracking-and-Advisory-App?node-id=76%3A12930"
    }
  ]
}
