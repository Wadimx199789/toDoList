const list = {}
function addTask(task) {
    list[task] = "To Do";
}
function showList() {
    let ToDo = [];
    let InProgress = [];
    let Done = [];
    sortTasks(ToDo,InProgress,Done);
    let resultString = "ToDo: "+ ToDo.join(",") +"\n "+ "Done :"+Done.join(",")+"\n " + "In Progress:" + InProgress.join(",");
    console.log(resultString);
}
function deleteTask(task) {
    delete list[task];
}
function changeStatus(taskName, status) {
    list[taskName] = status;
}
function sortTasks(toDo,inProgress,done){
    for(key in list){
        if(list[key]==="To Do"){
            toDo.push(key);
        }
        else if(list[key]==="Done"){
            done.push(key);
        }
        else if(list[key]==="In Progress"){
            inProgress.push(key);
        }
    }
    if (inProgress.length == 0) {
        inProgress.push('-');
      }
      if (done.length == 0) {
        done.push('-');
      }
      if (toDo.length == 0) {
        toDo.push('-');
      }
    
}
addTask("сходить в магазин");
addTask("забрать брата");
changeStatus("сходить в магазин","Done");
showList();