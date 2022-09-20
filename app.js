body = document.querySelector("body")
mode = body.querySelector('header img')
console.log(mode.src)
mode.addEventListener('click',()=>{
    if(body.classList.contains("dark")){
        mode.src = "./images/icon-moon.svg"
        body.classList.replace("dark","light")
        console.log("light turned On")
    }else{
        console.log("dark turned on")
        mode.src = "./images/icon-sun.svg"
        body.classList.replace("light","dark")

    }
})
unOrderedList = document.querySelector('div ul')
console.log(unOrderedList)
var lists = Array.from(document.querySelectorAll(".todo ul li "))
console.log(body)
console.log(lists)

var close = Array.from(document.querySelectorAll('.todo img'))

close.forEach(closeItem=> closeItem.addEventListener('click', closeMe))

textInput = document.querySelector(' ul li .text-input')

textInput.addEventListener("keyup", (e) =>{
    add(e)
})
console.log(textInput)


body = document.body
console.log(body)

function closeMe(){
     console.log("closing")

    this.parentElement.remove()
  lists = Array.from(document.querySelectorAll(".todo ul li "))
 
 }

 function add(e){
        if(e.keyCode === 13){
            var value = textInput.value
     console.log(value)
            var li = document.createElement('li')
    
            li.innerHTML = 
            `
            <div class="button"></div> <p class="draggable" draggable="true">${value}</p> <img src="./images/icon-cross.svg" alt="" srcset="">    
            `
    
        unOrderedList.appendChild(li)
        textInput.value = ''
        lists.push(li)
        close.push(li.querySelector('img'))
    
    console.log(lists)
    console.log(close)

    close.forEach(closeItem=> closeItem.addEventListener('click', closeMe))
    buttons.push(li.querySelector('.button'))
    buttons.forEach(button=> button.addEventListener('click',done))
        }
 }


 var buttons = Array.from(document.querySelectorAll( "li .button"))
 console.log(buttons)
 buttons.forEach(button=> button.addEventListener('click',done))
 
 function done(){
    //  console.log("done")
    //  console.log(this.parentElement.querySelector('p'))
     var p =  this.parentElement.querySelector('p')
    if(this.style.backgroundColor == ""){
    var pContent  = p.innerHTML

       p.innerHTML = `<del>${pContent} </del>` 
        this.style.backgroundColor = 'white'
    }else{
       
     var del = this.parentElement.querySelector('p del').innerHTML
        p.innerHTML = del
     this.style.backgroundColor = ""

    }
 }


 function addEventListeners(){
     const draggables = document.querySelectorAll('.draggable')
     console.log(draggables)
     draggables.forEach(draggable=>draggable.addEventListener('dragstart',dragStart))

     const dragListItems = Array.from(document.querySelectorAll(".todo ul li "))

     dragListItems.forEach(item=>{
         item.addEventListener('dragstart',dragStart)
         item.addEventListener('dragover', dragOver)
        item.addEventListener('drop', dragDrop)
        })
        }

        let from 
  function dragStart(e){
// e.preventDefault()
e.stopPropagation()
    from = ""
    //   console.log('dragging')
    //   console.log(this.textContent)
 from = this.parentNode
  console.log(from)

    }

  function dragOver(e){
      e.preventDefault()
    //   e.stopPropagation()
  }

  function dragDrop(e){
    // e.stopPropagation()
     let to = this 
     swap(from,to)
  }

function swap(from,to){
    let fromContent = from.textContent
    let toContent  = to.textContent
let fromColor = from.querySelector('.button').style.backgroundColor
let toColor  = to.querySelector('.button').style.backgroundColor
console.log(fromColor)
console.log(toColor)
// change from value first
if(fromColor == "white"){
    console.log('yeas')
   to.querySelector('p').innerHTML = 
   `
 <del> ${fromContent} </del> 
 `
 to.querySelector('.button').style.backgroundColor = 'white'
}else{
    console.log('nooo')
    to.querySelector('.button').style.backgroundColor = ''

 to.querySelector('p').textContent = fromContent
}

if(toColor == "white"){
    from.querySelector('p').innerHTML = 
    `
  <del>${toContent} </del> 
  `
  from.querySelector('.button').style.backgroundColor = 'white'
 }else{
  from.querySelector('p').textContent = toContent
  from.querySelector('.button').style.backgroundColor = ''

 }
}
  addEventListeners()