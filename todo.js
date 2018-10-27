
let totalLists = 0;

function deleteList(list){
    $(list).parent().remove();
}

function clearCompleted(list){
        for (let i = 0; i < list.length; i++){
            $(`${list}:nth-child(i)`)
        }
}

function addItem(list){
    console.log("item added");
    let currentList = $(list).parent();
    console.log(currentList);
    let containedItems = $( currentList.children(".item-container") ).length + 1;
    $( currentList.children(".item-container")).append(`
    <div class="${currentList}item${containedItems} listItem"> 
        <div class="editableListItem">
            <input class="" placeholder="edit me">
            <div class="updateTask" onclick="updateTask()"></div>
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


