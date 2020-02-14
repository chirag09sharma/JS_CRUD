window.addEventListener('load', init);
var counter;
function init(){   
      
        bindEvents();
        updateCounts();
        counter = autoIncrement();
        ss();
        

}
const ss = () =>document.querySelector("#id").innerText = counter.next().value;
  

function bindEvents(){
   document.querySelector('#add').addEventListener('click', addQuestion);
   document.querySelector('#delete').addEventListener('click', deleteMarked);
   document.querySelector("#save").addEventListener('click', save);
   document.querySelector("#load").addEventListener('click', load);
   document.querySelector("#deltable").addEventListener('click', deleteTable);
   document.querySelector("#clear").addEventListener('click', clearAll);
   document.querySelector("#search").addEventListener('click', searchClassToggle);
   document.querySelector("#searchbutton").addEventListener('click', searchQuestion);
   document.querySelector("#sort").addEventListener('click', sortClassToggle);
   document.querySelector("#sortnow").addEventListener('click', sortQuestion);
   document.querySelector("#saveToServer").addEventListener("click", saveToServer);
   


}
function addQuestion(){
        var questionObject = new Questions();
    // console.log(questionObject);
           for(let key in questionObject){
             if(key=='isMarked'){
               continue;
             }
             if (key == 'id') {
              questionObject[key] = document.querySelector('#' + key).innerText;
              continue;
          }
                    questionObject[key] = document.querySelector("#"+key).value;
                  }
                  // console.log(questionObject);
                  questionOperations.add(questionObject);
                  printQuestion(questionObject);
                  updateCounts();
                  clearAll();
                  ss();
}
function printQuestion(questionObject){
    var tbody = document.querySelector("#questions");
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
      if(key=='isMarked'){
        continue;
      }
    //   if (key == 'id') {
    //     questionObject[key] = document.querySelector('#' + key).innerText;
    //     continue;
    // }
      let td = tr.insertCell(index);
      td.innerText = questionObject[key];
      index++;
    }
    let td = tr.insertCell(index);
    let id = questionObject.id;
    td.appendChild(createIcon('https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png', id));
    td.appendChild(createIcon('https://image.flaticon.com/icons/png/128/61/61456.png'));
    
}

function createIcon(path, id){
  var img = document.createElement("img");
  img.src = path;
  img.className = 'size';
  // img.id = id;
  img.setAttribute('qid', id);
  img.addEventListener('click', toggleMark);
  return img;
   
}

function toggleMark(){
  let id = this.getAttribute('qid');
  console.log("Question id is", id)
  questionOperations.toggleMark(id);
  // console.log("You click on ", this);
  let tr = this.parentNode.parentNode;
  // tr.className = "alert-danger";
  tr.classList.toggle("alert-danger");
  // if(tr.className){
  //   tr.className = "";
  // }
  // else{
  //   tr.className = "alert-danger";
  // }
  updateCounts();
}
  function updateCounts(){
  document.querySelector("#total").innerText = questionOperations.questions.length;
  document.querySelector("#mark").innerText = questionOperations.countMark();
  document.querySelector("#unmark").innerText =  questionOperations.questions.length - questionOperations.countMark(); 

}
 
function deleteMarked(){
  var arr = questionOperations.delete();
  printTable(arr);

}
function printTable(arr){
  document.querySelector("#questions").innerHTML = "";
  arr.forEach(printQuestion);
  updateCounts();
}

function save(){
  if(localStorage){
          var arr = questionOperations.questions;
          var json = JSON.stringify(arr);
          console.log(arr);
          console.log(json);
          localStorage.questions = json;
          alert("Record saved");
  }
  else{
  alert("your browser is outdated");
  }

}

function load(){
  if(localStorage){
    if(localStorage.questions){
      var arrayofObjects= JSON.parse(localStorage.questions);
      for(let obj of arrayofObjects){
        let questionObject = new Questions(obj.id, obj.name, obj.optionA, obj.optionB, obj.optionC, obj.optionD,obj.Rans,obj.score);
        questionOperations.questions.push(questionObject);
    }
      // questionOperations.questions = JSON.parse(localStorage.questions);
      printTable(questionOperations.questions)
    }
    else {
      alert('Nothing to load');

    }
  }
  else{
    alert("your browser is outdated");
  }

}
function clearAll(){
     document.querySelectorAll('.clear').forEach(field=>field.value = " ");
     document.querySelector("#name").focus();
     updateCounts();  




}
  
function deleteTable(){
  var arr = questionOperations.clearTable();
 
  printTable(arr);
  console.log("Arr is ", arr);

}
  
function searchClassToggle(){
  // console.log("search is called");
  document.querySelector("#hide").classList.toggle('d-block');
 
}
function searchQuestion(){
          var searchType = document.querySelector("#type").value;
          var searchData = document.querySelector("#data").value;

          if(searchType == "" || searchData == ""){
            alert("Enter valid details to search");
          }
          else{
            var searchArray = questionOperations.searchNow(searchType, searchData);
           printTable(searchArray);
          }
        
}
function sortClassToggle(){
  document.querySelector("#hidden").classList.toggle('d-block');
}
function sortQuestion(){
  // console.log("sort is called");
    var sortType = document.querySelector("#sorttype").value;
    // console.log("Sortype is ", SortType);
    if(sortType == ''){
      alert("Please select from drop box");
    }
    else{
      // alert("Please wait......");
      var sortArray = questionOperations.sort(sortType);
      printTable(sortArray);
    }
              
}
function saveToServer(){

  
}
   
   
   
   
   
   
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*
   var questionObject = new Question();
   var myid =  document.querySelector('#id').value;
    questionObject.id = myid;
   var name =  document.querySelector('#name').value;
   var optionA =  document.querySelector('#optionA').value;*/


