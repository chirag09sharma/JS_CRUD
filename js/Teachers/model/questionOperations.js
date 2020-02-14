var questionOperations = {
        questions:[],
add(question){
   this.questions.push(question);
},
delete(){
        return this.questions.filter(qobj=>qobj.isMarked ==false);

}, 
countMark(){
                return this.questions.filter(qobj=>qobj.isMarked).length
},
toggleMark(id){
        let questionObject =  this.search(id);
        // questionObject.isMarked = !questionObject.isMarked;
        // questionObject.toggle();
        this.search(id).toggle();
        

},
search(id){
       return this.questions.find(questionObject=>questionObject.id == id);

}, 
update(){

}, 
sort(sortType){
        if(sortType == 'sortScore'){
                return this.questions.sort((a,b)=>a.score-b.score);
        }
      
},
clearTable(){
            return this.questions.length = [];
           
}, 
searchNow(searchType, searchData){
        if(searchType == "Id"){
                var array = this.questions.filter(qobj=>qobj.id == searchData);
                if(array == ''){
                        alert("record not found");
                        return this.questions;
                }
                else{
                        return array;
                }
        }



        if(searchType == "Name"){
                var array = this.questions.filter(qobj=>qobj.name == searchData);
                if(array == ''){
                        alert("record not found");
                        return this.questions;
                }
                else{
                        return array;
                }
        }


        if(searchType == "Score"){
                var array = this.questions.filter(qobj=>qobj.score == searchData);
                if(array == ''){
                        alert("record not found");
                        return this.questions;
                }
                else{
                        return array;
                }
        }
        
}
}
