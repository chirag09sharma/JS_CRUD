class Questions {
    constructor(id, name, optionA, optionB, optionC, optionD, Rans, score){
        this.id = id;
        this.name = name;
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD =  optionD;
        this.Rans = Rans;
        this.score = score;
        this.isMarked = false; //flagging
    }
    toggle(){
       this.isMarked = !this.isMarked;
    }
}