var name_of_student_array = []; 

function submit() {
  var student1 = document.getElementById("name_of_student_1").value; 
  var student2 = document.getElementById("name_of_student_2").value; 
  var student3 = document.getElementById("name_of_student_3").value; 
  var student4 = document.getElementById("name_of_student_4").value; 
  
  name_of_student_array.push(student1);
  name_of_student_array.push(student2);
  name_of_student_array.push(student3);
  name_of_student_array.push(student4);
  
  console.log (name_of_student_array); 
  
  document.getElementById ("displayname"). innerHTML = name_of_student_array; 
  
  document.getElementById ("submit_button"). style.display = "none";
  document.getElementById ("sort_button"). style.display = "inline-block";
}

function sort_names(){
  name_of_student_array.sort();
  console.log (name_of_student_array);
  document.getElementById ("displayname"). innerHTML = name_of_student_array;
}