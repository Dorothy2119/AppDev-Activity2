import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contactlist = [
    {id: 1, name: 'Liza Espadero Avestruz', email: 'lizaavestruz09@gmail.com'  ,number: '09247563839'},
    {id: 2, name: 'Hugo Avestruz', email: 'hugoavestruz@gmail.com'  ,number: '09194237031'},
    {id: 3, name: 'Cheradee Espadero Avestruz', email: 'avestruzcheradee@gmail.com'  ,number: '09563748236'},
    {id: 4, name: 'Ismael Espadero Avestruz', email: 'avestruzismael@gmail.com'  ,number: '09774465605'},
    {id: 5, name: 'Zaira Astorga', email: 'zairaastorga@gmail.com'  ,number: '09125670253'},
    {id: 6, name: 'Mary Jane Alas Balais', email: 'maryjanebalais@gmail.com'  ,number: '09262348541'},
    {id: 7, name: 'Mark Jason Bustillo', email: 'markjasonbustillo@gmail.com'  ,number: '09549372174'},
    {id: 8, name: 'Cherry Lyn Avestruz', email: 'cherrylynavestruz@gmail.com'  ,number: '09257834925'},
    {id: 9, name: 'Erwin Astorga', email: 'erwinastorga28@gmail.com'  ,number: '09562839534'},
    {id: 10, name: 'Laila Bustillo', email: 'lailabustillo19@gmail.com'  ,number: '09275627482'},
  ]

  constructor() {}

}

