document.getElementById('get-h1')
.addEventListener('click',function(event){
    event.target.style.color = 'red'
    event.target.style.backgroundColor = 'pink'
    event.target.style.textDecoration = 'underline'

   const deco = document.createElement('h1')
   deco.innerText = 'Mark'

   const beco = document.getElementById('body')
   const rebo = beco.appendChild(deco)

   console.log(rebo)


})
