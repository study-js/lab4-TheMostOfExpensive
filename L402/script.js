function calculate(studentsList, studentsName){
    var count = 0;

    for(var i=0; i < studentsList.length; i++){
        if(studentsList[i].name == studentsName){
            count++;
        }
    }

    return count;
}


var students = [
    {
        id: 1,
        name: 'eduard'
    },
    {
     id: 2,
     name:'Giorgi'
    },
    {
     id: 3,
     name:'Giorgi2'
     },
     {
   
      id: 3,
      name: 'Vaxo'



     }
];

var name = prompt('შეიყვანეთ სახელი:');


var filteredCount = calculate(students, name);
alert (filteredCount);
