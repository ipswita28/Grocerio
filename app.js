console.log('Hello this is my notes work!');
shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    shownotes();
})
// Function to show elements from localStorage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="NoteCard my-2 mx-2 card" id="bol" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">List ${index + 1}</h5>
            <p class="card-text" > ${element}</p>
            <button  id="${index}" onclick="DeleteNote(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
    </div>`;
    });
    let notesElm =document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Write in "Create Note" section above to add notes.`;
      }
}
document.querySelector('#notes').addEventListener('click', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},151)`;
    console.log('You triggered mouse move event')
})
// Function to delete a note
function DeleteNote(index){
    console.log('I am Deleting',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();
}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    // console.log('Input Event Fired!',inputVal);
    let NoteCards=document.getElementsByClassName('NoteCard');
    Array.from(NoteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
