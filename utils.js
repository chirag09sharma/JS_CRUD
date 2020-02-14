function* autoIncrement(){
    var  num = 0;
    while(true){
    num++;
    yield num;
    }
    }