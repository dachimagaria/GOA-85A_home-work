let company = {
    name: "TechVision",
    founded: 2010,

    headquarters: {
        country: "Georgia",
        city: "Tbilisi",

        address: {
            street: "Chavchavadze",
            building: {
                number: 25,
                floors: 8,

                departments: {
                    firstFloor: {
                        name: "Reception",
                        employees: 4
                    },

                    fifthFloor: {
                        name: "Development",
                        employees: 35,

                        manager: {
                            name: "Giorgi",
                            age: 32,

                            contact: {
                                email: "giorgi@techvision.com",
                                phone: "555123456"
                            }
                        }
                    }
                }
            }
        }
    },

    projects: {
        project1: {
            name: "Website",
            budget: 15000,

            team: {
                leader: "Nika",
                members: 8,

                technology: {
                    frontend: "React",
                    backend: "Node.js",
                    database: "MongoDB"
                }
            }
        },

        project2: {
            name: "Mobile App",
            budget: 25000,

            team: {
                leader: "Ana",
                members: 12,

                technology: {
                    frontend: "React Native",
                    backend: "Python",
                    database: "PostgreSQL"
                }
            }
        }
    }
};

// გამოტანა
// 1
console.log(company.name);
console.log(company.founded);

// 2
console.log(company.headquarters.city);
console.log(company.headquarters.country);

// 3
console.log(company.headquarters.address.building.number);
console.log(company.headquarters.address.building.floors);

// 4
console.log(company.headquarters.address.building.departments.firstFloor.name);
console.log(company.headquarters.address.building.departments.firstFloor.employees);

// 5
console.log(company.headquarters.address.building.departments.fifthFloor.name);
console.log(company.headquarters.address.building.departments.fifthFloor.employees);

// 6
console.log(company.headquarters.address.building.departments.fifthFloor.manager.name);
console.log(company.headquarters.address.building.departments.fifthFloor.manager.age);

// 7
console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.email);
console.log(company.headquarters.address.building.departments.fifthFloor.manager.contact.phone);

// 8
console.log(company.projects.project1.name);
console.log(company.projects.project1.budget);
console.log(company.projects.project1.team.leader);

// 9
console.log(company.projects.project2.team.members);
console.log(company.projects.project2.team.technology.database);

// 10
console.log(company.projects.project2.team.technology.frontend);
console.log(company.projects.project2.team.technology.backend);
console.log(company.projects.project2.team.technology.database);


//შეცვლა 

// 11
company.name = "TechWorld";

// 12
company.headquarters.city = "Batumi";

// 13
company.headquarters.address.building.number = 40;
company.headquarters.address.building.floors = 10;

// 14
company.headquarters.address.building.departments.firstFloor.employees = 7;

// 15
company.headquarters.address.building.departments.fifthFloor.name = "Software Development";

// 16
company.headquarters.address.building.departments.fifthFloor.manager.age = 35;

// 17
company.headquarters.address.building.departments.fifthFloor.manager.contact.phone = "599123456";

// 18
company.projects.project1.budget = 20000;

// 19
company.projects.project2.team.leader = "Giorgi";
company.projects.project2.team.members = 15;

// 20
company.projects.project1.team.technology.frontend = "Vue.js";
company.projects.project1.team.technology.database = "MySQL";
