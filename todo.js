
let totalLists = 0;

function deleteList(list){
    $(list).parent().remove();
}

function clearCompleted(list){
        for (let i = 0; i < list.length; i++){
            $(`${list}:nth-child(i)`)
        }
}


function addList(){
    $( ".container" ).append(`
    <div class="list${totalLists} list">
        <div class="list-title">List ${totalLists+1}</div>
        <div class="addListItem">Add Item</div>
        <div class="item-container">
        
        </div>
        <div class="clearCompleted" onclick="clearCompleted(this)"><span>Clear Completed</span></div>
        <div class="deleteList" onclick="deleteList(this)"><span>Delete List</span></div>
    </div>
    `)
    totalLists++;
}

function addItem(list){

}