function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Ann", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function () {
  if (this.marks in Student) {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length;
  } else {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
