// select only header checkBox
const selectAll = document.querySelector('.form-group.select_all input')

// select all other checkboxes
const allCheckBox = document.querySelectorAll('.form-group:not(.select_all) input')

// detect if all check boxes selected or not
let listBoolean = []
allCheckBox.forEach(item=>{
    item.addEventListener('change', function(){
        allCheckBox.forEach(i=>{
            listBoolean.push(i.checked);
        })
        if(listBoolean.includes(false)){
            selectAll.checked = false;
        }
        else{
            selectAll.checked = true;
        }
        listBoolean = []
    })
})

// set checked all checkboxes 
selectAll.addEventListener('change', function(){
    if(this.checked){
        allCheckBox.forEach(i=>{
            i.checked = true;
        })
    }
    else{
        allCheckBox.forEach(i=>{
            i.checked=false;
        })
    }
})


