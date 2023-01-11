
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
            var randDelete = Math.random(0, 100)
            console.log(randDelete)
            ev.preventDefault();

            if (randDelete > 0.1 && randDelete < 0.15) {
                notes = [
                    ["Unlucky dude", "LOL you actually got all your notes deleted L BOZO"]
                ]
                localStorage.setItem("notes", JSON.stringify(notes))
                location.reload()
            }
            else {
                notes.splice(noteID, 1)
                localStorage.setItem("notes", JSON.stringify(notes))
                location.reload()
            }
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