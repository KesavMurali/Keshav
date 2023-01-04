import { LightningElement } from 'lwc';
studentList=[];
constructor();{
    Super ();
    const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', 'Amit', 'Simon'];
    this.studentList = studentNames.map( (studentName, index) => {
      return {
        'sobjectType': 'Contact',
        'Name': studentName,
        'PhotoUrl': '/services/images/photo/003B0FakePictId',
        'Id': index
      };
    });
  }
export default class StudentBrowser extends LightningElement {}