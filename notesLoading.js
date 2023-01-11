
var notes = JSON.parse(localStorage.getItem("notes")) || [];


// creates new notes onclick
function newNote() {
    var newNote = document.createElement("div")
    var newNoteTitle = document.createElement("div")

    newNote.classList.add("note")
    newNoteTitle.classList.add("note-title")

    newNoteTitle.textContent = "New Note"

    newNote.appendChild(newNoteTitle)
    document.querySelector(".note-area").appendChild(newNote)

    notes.push(["New-Note", "Write Stuff Here..."])
    console.log(notes)
    localStorage.setItem("notes", JSON.stringify(notes))

    location.reload()
}

//creates a help note when help button pressed:
function createHelpNote() {
    notes.unshift(["Help Note", `To create a note click "New Note", this will create a note block, click the note block to enter the edit area (where you are right now).

The top box of the edit area is the title, it will be displayed in the note block in the note selection area (where you where before here).

To save the note click the Save button or Back Button.

If you enjoy burning your eyes you can click the Light Mode button to switch between dark and light mode.

In the note selection area if you (right click for pc) (hold click for mobile) it will delete the note, currently there is no undo so BEWARE.

And if you want to see more of my content click the Davedude101 button, (the frog doesn't bite, at least i think so).
    `])
    localStorage.setItem("notes", JSON.stringify(notes))
    location.reload()

}

// rhythmically adds notes from local storage
function localStorageGetNotes() {
    notes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(notes)
    for (let i = 0; i < notes.length; i++) {
        var newNote = document.createElement("div")
        var newNoteTitle = document.createElement("div")
    
        newNote.classList.add("note")
        newNote.id = i
        newNoteTitle.classList.add("note-title")

        newNote.addEventListener("click", function() {
            var noteID = i
            // code for when the note is clicked:
            localStorage.setItem("currentNoteId", noteID)
            window.open("note.html", "_self")
            
            console.log(noteID, notes[noteID])
        })
        newNote.addEventListener('contextmenu', (ev) => {
            // code for when the note is right clicked:
            var noteID = i
            ev.preventDefault();

            notes.splice(noteID, 1)
            localStorage.setItem("notes", JSON.stringify(notes))
            location.reload()
        });
        newNoteTitle.textContent = (notes[i])[0]
    
        newNote.appendChild(newNoteTitle)
        document.querySelector(".note-area").appendChild(newNote)
    }
}

// starts above function on window load
window.onload = function() {
    localStorageGetNotes()
    notes = JSON.parse(localStorage.getItem("notes")) || [];
    console.log(notes)
}