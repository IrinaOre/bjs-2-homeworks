function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
  if (Student.marks === true) {
    return addMarks();
  } else if (Student.excluded === true) {
    return delete this.marks;
  } else {
    return addMarks(...marks);
  }
};

Student.prototype.getAverage = function () {
  for (let i = 0; i < Student.marks.length; i++) {
    let sum = 0;
    let average = (sum + marks[i]) / Student.marks.length;

    if (Student.marks.length === 0 && Student.marks.length === false) {
      return 0;
    } else {
      return average;
    }
  }
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
