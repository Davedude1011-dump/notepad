var notes = JSON.parse(localStorage.getItem("notes"))
var noteID = localStorage.getItem("currentNoteId")

var title = (notes[noteID])[0]
var content = (notes[noteID])[1]

document.querySelector(".note-title-area").value = title
document.querySelector(".note-text-area").value = content

function save() {
    notes[noteID][0] = document.querySelector(".note-title-area").value
    notes[noteID][1] = document.querySelector(".note-text-area").value

    console.log(notes)
    localStorage.setItem("notes", JSON.stringify(notes))
}