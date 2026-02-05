'use strict'

class Student {
  firstName = null;
  lastName = null;
  birthYear = null;
  marks = [];
  attendance = new Array(25);
  constructor (firstName, lastName, birthYear) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.marks = [];
      this.attendance = new Array(25);
  }
  getAge() {
    return new Date().getFullYear() - Number(this.birthYear);
  }

  getAverageMark(){
    const filteredMarks = this.marks.filter(mark => mark !== undefined); // use only filled
    return filteredMarks.reduce((sum, currentValue) => sum + currentValue, 0) / filteredMarks.length;
  }

  present() {
  const firstEmptyIndex = this.attendance.findIndex(el => el === undefined);
  if (firstEmptyIndex > -1) {
    this.attendance[firstEmptyIndex] = true;
  } else {
    console.error("Cannot add more records. The array limit has been reached.") //  + " " + firstEmptyIndex
  }
}
absent() {
  const firstEmptyIndex = this.attendance.findIndex(el => el === undefined);
  if (firstEmptyIndex > -1) {
    this.attendance[firstEmptyIndex] = false;
  } else {
    console.error("Cannot add more records. The array limit has been reached.") //  + " " + firstEmptyIndex
  }
}
mark(mark) {

  const markNumber = Number(mark);
  if (markNumber >= 0 && markNumber <= 100) {
    this.marks.push(Number(mark));
  } else {
    console.error("Cannot add the mark. Invalid input."); // + markNumber
  }
}
summary() {
  const averageMark = this.getAverageMark();
  const filteredAttendance = this.attendance.filter(el => el !== undefined); // use only filled
  const averageAttendance = filteredAttendance.reduce((sum, currentValue) => sum + currentValue, 0) / filteredAttendance.length;

  // console.log('Average mark: ' + averageMark);
  // console.log('Average attendance: ' + averageAttendance);
  // console.log(this.marks);
  // console.log(this.attendance);

  if (averageMark > 90 && averageAttendance > 0.9) {
    return 'Ух ти, який молодчинка!';
  } else if ((averageMark <= 90 && averageAttendance > 0.9) || averageMark > 90 && averageAttendance <= 0.9) {
    return 'Нормально, але можна краще';
  } else {
    return 'Редька!';
  }
}
}

const student1 = new Student('Ronnie', 'Coleman', 2020);
for (let i = 0; i < 25; i++) {
  Math.random() > 0.5 ? student1.present() : student1.absent();
  student1.mark(Math.floor(Math.random() * 100));
}
console.log(student1.summary());
console.log(student1.getAge());
console.log(student1.firstName);
console.log(student1.lastName);
console.log('-------------------')


const student2 = new Student('Michael', 'Jackson', 2026);
for (let i = 0; i < 22; i++) {
  Math.random() > 0.5 ? student2.present() : student2.absent();
  student2.mark(Math.floor(Math.random() * 120));
}
console.log(student2.summary());
console.log(student2.getAge());
console.log(student2.firstName);
console.log(student2.lastName);
console.log('-------------------')

const student3 = new Student('Billie', 'Jean', 2000);
for (let i = 0; i < 27; i++) {
  Math.random() > 0.1 ? student3.present() : student3.absent();
  student3.mark(Math.floor(Math.random() * 100));
}
console.log(student3.summary());
console.log(student3.getAge());
console.log(student3.firstName);
console.log(student3.lastName);
