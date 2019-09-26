import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = ['Todo', 'Todo server', 'Angular CV', 'Cinema', 'React CV', 'Timeapp', 'Webbshop', 'Cms'];
  data: {
    title: string,
    textOne: string,
    textTwo: string,
    textThree: string,
    textFour: string,
    textFive: string,
    language: Array<string>,
    gitTextOne: string,
    githubOne: string,
    image: string
  };

  constructor() {}

  ngOnInit() {
    this.data = {
      title: 'A selection of my projects.',
      textOne: '',
      textTwo: '',
      textThree: '',
      textFour: '',
      textFive: '',
      language: [],
      gitTextOne: '',
      githubOne: '',
      image: ''
    };
  }

  onChange(e) {
    switch (e) {
      case 'Todo':
        if (true) {
          this.data = {
            title: 'Todo Angular',
            textOne:
              'While we had an Angular course in school, I decided to do a project to learn more, this resulted in a todo app.',
            textTwo:
              'I started with making a Node backend Api with mogodb database. Then I used Angular to create a front-end for it.',
            textThree: '',
            textFour: '',
            textFive: '',
            language: [
              'Angular',
              'Html',
              'Sass', 'Bootstrap'
            ],
            gitTextOne: 'Link to ',
            githubOne: 'https://github.com/KristoferDev/todo',
            image: 'assets/img/todo.png'
          };
        }
        break;
        case 'Todo server':
        if (true) {
          this.data = {
            title: 'Todo server',
            textOne:
              'While we had an Angular course in school, I decided to do a project to learn more, this resulted in a todo app.',
            textTwo:
              'I started with making a Node backend Api with mogodb database. Then I used Angular to create a front-end for it.',
            textThree: '',
            textFour: '',
            textFive: '',
            language: [
              'NodeJs',
              'Express',
              'Api',
              'Json',
              'Mongodb',
              'Mongoose'
            ],
            gitTextOne: 'Link to ',
            githubOne: 'https://github.com/KristoferDev/todo-server',
            image: 'assets/img/todo.png'
          };
        }
        break;
      case 'Angular CV':
        if (true) {
          this.data = {
            title: 'Angular CV',
            textOne:
              'While we had an Angular course in school, I also did this page that you are visiting right now.',
            textTwo:
              "In its current state, it's an Angular page.",
            textThree: '',
            textFour: '',
            textFive: '',
            language: ['Aws', 'Angular', 'Responsive', 'Html', 'Sass', 'Bootstrap'],
            gitTextOne: 'Link to ',
            githubOne: 'https://github.com/KristoferDev/cv',
            image: 'assets/img/angular-cv.png'
          };
        }
        break;
        case 'Cinema':
        if (true) {
          this.data = {
            title: 'Cinema site',
            textOne:
              "This was an assignment in school where we used html/css to build a Cinema site",
            textTwo: '',
            textThree: '',
            textFour: '',
            textFive: '',
            language: ['Html', 'Css', 'Js'],
            gitTextOne: 'Link to ',
            githubOne: 'https://github.com/KristoferDev/bio',
            image: 'assets/img/cinema.jpg'
          };
        }
        break;
        case 'React CV':
        if (true) {
          this.data = {
            title: 'React CV',
            textOne:
              "This was an assignment in school while we were doing an reacts course, It's a CV page.",
            textTwo: '',
            textThree: '',
            textFour: '',
            textFive: '',
            language: ['React', 'Redux', 'Html', 'Css'],
            gitTextOne: 'Link to ',
            githubOne: 'https://github.com/KristoferDev/react-cv',
            image: 'assets/img/react-cv.png'
          };
        }
        break;
      case 'Timeapp':
        if (true) {
          this.data = {
            title: 'Timeapp',
            textOne:
              'This is a project I did back in 2016, it is an App that workers can use to send in their time reports. ',
            textTwo:
              'I started with the mobile view where they could fill in their reports one week at a time, ',
            textThree:
              'It produced an excel sheet that got sent in an email to their payroll administrator. ',
            textFour:
              'I then also built an app for their payroll administrator where they could handle all their reports, ',
            textFive:
              'And send a new excel sheet to their mail if they lost any or needed to make any changes.',
            language: ['Php', 'Laravel', 'Sql', 'Html', 'Css', 'Jquery'],
            gitTextOne: 'No github yet.',
            githubOne: '',
            image: ''
          };
        }
        break;
        case 'Webbshop':
        if (true) {
          this.data = {
            title: 'Webbshop',
            textOne:
              'This is one of my future projects that I am planing to do.',
            textTwo: 
              'More info will come here in the near future.',
            textThree: '',
            textFour: '',
            textFive: '',
            language: ['Aws', 'React', 'Node.js', 'Api', 'Json', 'Mongodb', 'Mongoose', 'Html', 'Css'],
            gitTextOne: 'No github yet.',
            githubOne: '',
            image: ''
          };
        }
        break;
        case 'Cms':
        if (true) {
          this.data = {
            title: 'Cms',
            textOne:
              'This is one of my future projects that I am planing to do.',
            textTwo: 
              'More info will come here in the near future',
            textThree: '',
            textFour: '',
            textFive: '',
            language: ['Aws', 'Angular', 'Node.js', 'Api', 'Json', 'Mongodb', 'Mongoose', 'Html', 'Css'],
            gitTextOne: 'No github yet.',
            githubOne: '',
            image: ''
          };
        }
        break;
    }
  }
  textThree;
}
