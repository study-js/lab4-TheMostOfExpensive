function calculate(studentsList, studentsName){

    var differentNmames = [];

   for(var i=0; i < studentsList.length; i++){
        if(differentNmames.indexOf(studentsList[i].name) == -1){
            differentNmames.push(studentsList[i].name);
        }
    }

    return differentNmames;
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
     name:'Giorgi'
     },
     {
   
      id: 4,
      name: 'Vaxo'
     },
     {
      id: 5,
      name:'Vipove'
     }

    
];


var names = calculate(students);
alert (names);

