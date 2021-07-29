const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

const text = document.querySelector('#text')
const searchbtn = document.querySelector('#search')
const resetbtn = document.querySelector('#reset')
const originaltext = text.innerText

function toggle(){
  author.innerHTML = 630610728 + length.value
}
btn_toggle.addEventListener('click', function(){
  if(author.innerHTML === "630610728 NATKAMONLAK INTARAMANON"){
    var x = parseInt("630610728")
    author.innerHTML = x+5
  }
  else{
    author.innerHTML = "630610728 NATKAMONLAK INTARAMANON"
  }
})

function isMore(){
  if(text.innerText.length > 5){
    console.log(text.innerText)
  }
}


// searchbtn.addEventListener('click', searching)
isMore()

function resetinput(){
  length.value = 5
  color.value = "#FF0000"
  text.innerText = originaltext
}
resetbtn.addEventListener('click', resetinput)
