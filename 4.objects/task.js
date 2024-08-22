function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.marksToAdd = function (...marks) {
  this.marks = marks;
  if (Student.marks === true && marks.length > 0) return marksToAdd();
};

Student.prototype.getAverage = function () {
  for (let i = 0; i < marks.length; i++) {
    let sum = 0;
    let average = (sum + marks[i]) / Student.marks.length;

    if (marks.length === 0 && marks.length === false) {
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
