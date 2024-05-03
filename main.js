
const dialog = document.getElementById('myDialog');
const mainContentBx = document.querySelector(".contentbx");
const mainImgBx = document.querySelector(".imgbx");
function openDialog(event){
    mainContentBx.style.display = "none";
    mainImgBx.style.display = "none";
    dialog.style.display ="flex";
    dialog.style.flexDirection ="column";
    dialog.style.gap = 1 + "rem";
    event.preventDefault(); // Prevent form submission
    dialog.showModal();
    console.log("modal is open!")
}

function closeDialog(){
    mainContentBx.style.display = "flex";
    mainImgBx.style.display = "flex";
    dialog.close();
    dialog.style.display ="none";
}
