class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log("My name is " + this.name);

    }
}

class Professor extends Person {

    teaches;

    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduceSelf() {
        console.log(`Y name is ${this.name} and I teach ${this.teaches}`)
    }

    grade() {
        const grade = Math.floor(Math.random() * (5 - 1) + 1)
        return grade;
    }

}

let prof = new Professor("prof1", "sub1");

prof.introduceSelf();
console.log(prof.grade());
console.log(prof.grade());

class Student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name}. I am in year ${this.#year}`);
    }

    canStudyArchery() {
        if (this.#year > 1) {
            return true
        }
        return false;
    }
}

let student = new Student("Stud1", 1)

student.introduceSelf();
console.log(student.canStudyArchery());


let student2 = new Student("Stud2", 2)


student2.introduceSelf();
console.log(student2.canStudyArchery());