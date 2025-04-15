class Employee {

    static employeeCount = 0; // Static Methods
    constructor(name) {
        this.name = name
        Employee.employeeCount++;
    }
    static getEmployeeCount(){
        return Employee.employeeCount;
    }
}

const employee1 = new Employee("Alice")
const employee2 = new Employee("Bob")
console.log(Employee.getEmployeeCount());
