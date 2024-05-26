const button=document.getElementById('addbtn')
const card=document.getElementById('addcard')
const bodynote=document.getElementById('bodynote')
const savenotes=()=>{
    const notes=document.querySelectorAll(".note textarea")
    console.log(notes)
    const data=[];
    notes.forEach((note)=>{
        data.push(note.value)
    })
    localStorage.setItem("notes",JSON.stringify(data))
}
button.addEventListener('click',()=>{
    addnote()
})

const addnote = (text = "") => {
    const note=document.createElement("div")
    note.classList.add("note")
    note.innerHTML=`
    <div class="tool h-6 w-full flex justify-around items-center mx-5  text-black"><i id="save" class="save cursor-pointer fa-solid fa-floppy-disk "></i><i id="trash" class="trash cursor-pointer fa-solid fa-trash mr-10 lg1:mr-12 lg3:mr-7"></i></div>
    <textarea placeholder="Enter your text" id="addcard" class="addcard pl-2 bg-slate-200 h-44 w-[135px] lg1:h-84 lg1:w-72 lg3:w-64 lg2:ml-6 xl:ml-2 border-2 border-slate-600 rounded-xl overflow-scroll">${text}</textarea>
    `
    note.querySelector('.trash').addEventListener('click',()=>{
        note.remove()
        savenotes()
    })
    note.querySelector('.save').addEventListener('click',(e)=>{
        e.preventDefault()
        savenotes()
    })
    bodynote.appendChild(note)
    savenotes()
}
(()=>{
    const lsnotes=JSON.parse(localStorage.getItem("notes"));
    lsnotes.forEach((lsnote)=>{
        addnote(lsnote)
    })
})()