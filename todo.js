
let totalLists = 0;

function deleteList(list){
    $(list).parent().remove();
}

function deleteItem(item){

}

function clearCompleted(list){
        for (let i = 0; i < list.length; i++){
            $(`${list}:nth-child(i)`)
        }
}

function updateTask(item){
    if ($(item).parent("editableListItem")) {
        let itemText = $(item).siblings(".itemInput").val();
        $(item).parents().eq(1).append(`
            <div class="staticListItem">
                <div class="taskText">${itemText}</div>
                <div class="updateTask" onclick="updateTask(this)"><i class="fas fa-check"></i></div>
                <div class="deleteItem" onclick="deleteItem(this)"><i class="fas fa-trash-alt"></i></div>
            </div>
        `);
    }
}





function addItem(list){
    let currentList = $(list).parent();
    let containedItems = $( currentList.children(".item-container") ).length + 1;
    $( currentList.children(".item-container")).append(`
    <div class="item${containedItems} listItem"> 
        <div class="editableListItem">
            <input class="itemInput" placeholder="edit me">
            <div class="updateTask" onclick="updateTask(this)"><i class="fas fa-check"></i></div>
            <div class="deleteItem" onclick="deleteItem()"><i class="fas fa-trash-alt"></i></div>
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


