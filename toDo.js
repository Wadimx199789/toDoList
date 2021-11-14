let list = [];
let id = 0;

function addPost(post,priority){
    id+=1;
    let obj = {};
    obj.id = id;
    obj.name = post;
    obj.status = "To Do";
    obj.priority = priority;
    list.push(obj);
}

function showByPriority(){
    let high =[];
    let low = [];

    list.forEach((item)=>{
        if(item.priority==='high'){
            high.push(item.name);
        }
        else if(item.priority==='low'){
            low.push(item.name);
        }
    });
    let result = "high: "+ high.join(",") +"\n "+ "low :"+low.join(",")+"\n ";
    console.log(result);

}
function deletePost(post){
    id-=1;
    list = list.filter(item=>item.name!==post);
}

function changeStatus(post,status){
    list = list.map(function(item){
        if(item.name===post){
            item.status=status;
        }
        return item;
    })
}
function changePriority(post,prioryty){
    list = list.map(function(item){
        if(item.name===post){
            item.priority=prioryty;
        }
        return item;
    })
}

addPost("сделать покушать",'high');
changeStatus("сделать покушать","Done");
changePriority("сделать покушать","low");
showByPriority();

