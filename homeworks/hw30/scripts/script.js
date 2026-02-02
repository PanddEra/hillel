'use strict'

function Student(fullName, birthYear) {
    const nameArray = fullName.split(' ');
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
    this.birthYear = birthYear;
    this.attendance = new Array(10);
    this.marks = new Array(10);

}

Student.prototype.getAge = function () {
    return new Date().getFullYear() - this.birthYear;
}
Student.prototype.getAverageMark = function () {
    return this.marks.reduce((sum, currentValue) => sum + currentValue, 0) / this.marks.length;
}
Student.prototype.present = function () {
    const firstEmptyIndex = this.attendance.findIndex(el => el === undefined);
    if (firstEmptyIndex > -1) {
        this.attendance[firstEmptyIndex] = true;
    } else {
        console.error("Cannot add more records. The array limit has been reached.") //  + " " + firstEmptyIndex
    }
}
Student.prototype.absent = function () {
    const firstEmptyIndex = this.attendance.findIndex(el => el === undefined);
    if (firstEmptyIndex > -1) {
        this.attendance[firstEmptyIndex] = false;
    } else {
        console.error("Cannot add more records. The array limit has been reached.") //  + " " + firstEmptyIndex
    }
}
Student.prototype.mark = function (mark) {
    const firstEmptyIndex = this.marks.findIndex(el => el === undefined);
    const markNumber = Number(mark);
    if (markNumber >= 0 && markNumber <= 10) {
        if (firstEmptyIndex > -1) {
            this.marks[firstEmptyIndex] = markNumber;
        } else {
            console.error("Cannot add more records. The array limit has been reached."); // + markNumber + " " + firstEmptyIndex
        }
    } else {
        console.error("Cannot add the mark. Invalid input."); // + markNumber
    }
}
Student.prototype.summary = function () {
    const averageMark = this.getAverageMark();
    const averageAttendance = this.attendance.reduce((sum, currentValue) => sum + currentValue, 0) / this.attendance.length;

    // console.log('Average mark: ' + averageMark);
    // console.log('Average attendance: ' + averageAttendance);
    // console.log(this.marks);
    // console.log(this.attendance);

    if (averageMark > 9 && averageAttendance > 0.9) {
        return 'Ух ти, який молодчинка!';
    } else if ((averageMark <= 9 && averageAttendance > 0.9) || averageMark > 9 && averageAttendance <= 0.9) {
        return 'Нормально, але можна краще';
    } else {
        return 'Редька!';
    }
}

const student1 = new Student('Ronnie Coleman', 2020);
for (let i = 0; i < 10; i++) {
    Math.random() > 0.5 ? student1.present() : student1.absent();
    student1.mark(Math.floor(Math.random() * 10));
}
console.log(student1.summary());
console.log(student1.getAge());
console.log(student1.firstName);
console.log(student1.lastName);
console.log('-------------------')

const student2 = new Student('Michael Jackson', 2026);
for (let i = 0; i < 11; i++) {
    Math.random() > 0.5 ? student2.present() : student2.absent();
    student2.mark(Math.floor(Math.random() * 15));
}
console.log(student2.summary());
console.log(student2.getAge());
console.log(student2.firstName);
console.log(student2.lastName);
console.log('-------------------')

const student3 = new Student('Billie Jean', 2000);
for (let i = 0; i < 8; i++) {
    Math.random() > 0.1 ? student3.present() : student3.absent();
    student3.mark(Math.floor(Math.random() * 10));
}
console.log(student3.summary());
console.log(student3.getAge());
console.log(student3.firstName);
console.log(student3.lastName);

