'use strict'

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.marks = new Array(10);
        this.attendance = new Array(25);
    }

    getAge() {
        return new Date().getFullYear() - Number(this.birthYear);
    }

    getAverageMark() {
        const filteredMarks = this.marks.filter(mark => mark !== undefined); // use only filled
        if (filteredMarks.length === 0) return 0;
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
        const firstEmptyIndex = this.marks.findIndex(el => el === undefined);
        const markNumber = Number(mark);
        if (markNumber >= 0 && markNumber <= 100) {
            if (firstEmptyIndex > -1) {
                this.marks[firstEmptyIndex] = markNumber;
            } else {
                console.error("Cannot add more records. The array limit has been reached."); // + markNumber + " " + firstEmptyIndex
            }
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

export default Student;
