
const dialog = document.getElementById('myDialog');
const 
function openDialog(event){
    dialog.style.display ="flex";
    dialog.style.flexDirection ="column";
    dialog.style.gap = 1 + "rem";
    event.preventDefault(); // Prevent form submission
    dialog.showModal();
    console.log("modal is open!")
}

function closeDialog(){
    dialog.close();
    dialog.style.display ="none";
}
