function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student();
let student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (!("marks" in this.marks)) {
    this.marks.push(...marksToAdd);
  } else {
    return 0;
  }
};

Student.prototype.getAverage = function () {
  if ("marks" in this.marks) {
    let sum = 0;

    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }

    return sum / this.marks.length;
  } else if (!("marks" in this.marks) || "marks" in this.marks === 0) {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
