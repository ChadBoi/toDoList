
let totalLists = 0;

function addList(){
    $( ".container" ).append(`
    <div class="list${totalLists} list">
        <div class="list-title">List ${totalLists+1}</div>
        <div class="addListItem">Add Item</div>
        <div class="item-container">
        
        </div>
        <div class="deleteList">Delete</div>
    </div>
    `)
    totalLists++;
}