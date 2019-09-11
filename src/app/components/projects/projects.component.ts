import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = ['Todo', 'Personal page', 'CV page', 'Timeapp', 'Biobio'];
  data: {};

  constructor() {}

  ngOnInit() {
    this.data = {
      title: 'My projects',
      textOne: 'Here can you see diffrent projects I have made.',
      language: ''
    };
  }

  onChange(e) {
    switch (e) {
      case 'Todo':
        if (true) {
          this.data = {
            title: 'Todo project',
            textOne:
              'While we had Angular course in school i decided to do an project to learn more, this resulted in an todo app.',
            textTwo:
              'I started with making an Node backend Api with mogodb database. Then i used Angular to create a frontend for it.',
            language: [
              'Angular',
              'NodeJs',
              'Express',
              'Mongodb',
              'Mongoose',
              'Html',
              'Sass'
            ],
            github: ['https://github.com/KristoferDev/todo']
          };
        }
        break;
      case 'CV page':
        if (true) {
          this.data = {
            title: 'CV page',
            textOne:
              "This was an assignment in school while we where doing an react course, It's an small cv page.",
            textTwo:
              'I started with making an Node backend Api with mogodb database. Then i used Angular to create a frontend for it.',
            language: ['React', 'Redux', 'Html', 'Css'],
            github: ''
          };
        }
        break;
      case 'Personal page':
        if (true) {
          this.data = {
            title: 'CV',
            textOne:
              'While we had an Angular course in school i also did this page that you are visiting right now',
            textTwo:
              "In it's current state it's just an Angular static page, I might make an api for it in future",
            language: ['Angular', 'html', 'Sass'],
            github: ''
          };
        }
        break;
      case 'Biobio':
        if (true) {
          this.data = {
            title: 'Biobio',
            textOne:
              'This was an assignment in school while we where doing html and css course.',
            textTwo: 'Another static page where i made an fake cinema page',
            language: ['Html', 'Css', 'Js'],
            github: ''
          };
        }
        break;
      case 'Timeapp':
        if (true) {
          this.data = {
            title: 'Timeapp',
            textOne:
              'This is a project i did back in 2016, it is an App that workers can use to send in their time reports.',
            textTwo:
              'I started with the mobile view where they could fill in their reports one week at a time,',
            textThree:
              'It produced an excel sheet that got sent in an email to their payroll administrator.',
            textFour:
              'I then also built an app for their payroll administrator where she could handle all the reports,',
            textFive:
              'save them and send a new excel sheet to her mail if she lost any or needed to make any changes.',
            language: ['Php', 'Laravel', 'Sql', 'Html', 'Css', 'Jquery'],
            github: ''
          };
        }
        break;
    }
  }
  textThree;
}
