function Player(firstname, lastname, age) {
   this.firstname = firstname;
   this.lastname = lastname;
   this.age = age;
}

Player.prototype.show = function () {
   console.log(this.firstname, ' ', this.lastname, ' (', this.age, ')');
};

const player1 = new Player('John', 'Doe', 22);
const player2 = new Player('Adam', 'Lul', 22);
player1.show();
player2.show();
player1.firstname = 'Andrej';
player1.show();

function Person(age) {
   this.age = age;
}

Person.prototype.showAge = function () {
   alert(this.age);
};

function Student(firstname, lastname, age, grade) {
   this.firstname = firstname;
   this.lastname = lastname;
   this.age = age;
   this.grade = grade;
   this.showGrade = function () {
      console.log(this.grade);
   };
}

Student.prototype = Object.create({ ...Player.prototype, ...Person.prototype });
// Student.prototype = Object.create(Person.prototype);

const student1 = new Student('Mathew', 'Some', 14, 5);
student1.show();
student1.showGrade();
student1.showAge();
