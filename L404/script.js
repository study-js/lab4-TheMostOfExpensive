function calculate(studentsList, studentsName){
    
        var nameCount = {};
    
       for(var i=0; i < studentsList.length; i++){
            if(nameCount[studentsList[i].name]== null){
                nameCount[studentsList[i].name] = 0;
            }

            nameCount[studentsList[i].name]++;
        }
    
        return nameCount;
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
         },
         {
          id: 6,
          name:'FindOut'

         },
         {
          id: 7,
          name:'Admin'

         }
    
        
    ];
    
    
    var names = calculate(students);

    for(name in names){
        alert(name + ": " + names[name]);
    }

    
    
    