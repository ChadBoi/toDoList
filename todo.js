
let totalLists = 0;

function deleteList(list){
    $(list).parent().remove();
}

function deleteItem(item){
    $(item).parents(".listItem").remove();
}

function toggleComplete(item){
    if ($(item).parents(".listItem").data("complete") === false){
        $(item).parents(".listItem").data("complete", true);
        $(item).css("color", "green");
    }
    else if($(item).parents(".listItem").data("complete") === true){
        $(item).parents(".listItem").data("complete", false);
        $(item).css("color", "black");
    }
}

function clearCompleted(list){

    let currentList = $(list).siblings(".item-container");
    let listLength = $(currentList).children().length;
    for (let i = 0; i < listLength; i++){
        if($(currentList).children(`.item${i}`).data("complete")){
            $(currentList).children(`.item${i}`).remove();
        }
    }
}

function updateTask(item){
    if ($(item).parent(".editableListItem").length) {
        let itemText = $(item).siblings(".itemInput").val();
        $(item).parents().eq(1).append(`
            <div class="staticListItem">
                <div class="taskText">${itemText}</div>
                <div class="updateTask" onclick="updateTask(this)"><i class="fas fa-edit"></i></div>
                <div class="markComplete" onclick="toggleComplete(this)"><i class="far fa-check-square"></i></div>
                <div class="deleteItem" onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></div>
            </div>
        `);
        $(item).parent().remove();
    }
    else{
        $(item).parents().eq(1).append(`<div class="editableListItem">
            <input class="itemInput" placeholder="${$(this).siblings(".taskText").text()}">
            <div class="updateTask" onclick="updateTask(this)"><i class="fas fa-check"></i></div>
            <div class="deleteItem" onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></div>
        </div>`);
        $(item).parent().remove();
    }
}





function addItem(list){
    let containedItems = $( list ).siblings(".item-container").children().length;
    $( list).siblings(".item-container").append(`
    <div class="item${containedItems} listItem" data-complete="false"> 
        <div class="editableListItem">
            <input class="itemInput" placeholder="edit me">
            <div class="updateTask" onclick="updateTask(this)"><i class="fas fa-check"></i></div>
            <div class="deleteItem" onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></div>
        </div>
    </div>
    `);
}

function addList(){
    $( ".container" ).append(`
    <div class="list${totalLists} list">
        <div class="list-title">List ${totalLists+1}</div>
        <div class="addListItem" onclick="addItem(this)">Add Item</div>
        <div class="item-container">
        
        </div>
        <div class="clearCompleted" onclick="clearCompleted(this)"><span>Clear Completed</span></div>
        <div class="deleteList" onclick="deleteList(this)"><span>Delete List</span></div>
    </div>
    `);
    totalLists++;
}


