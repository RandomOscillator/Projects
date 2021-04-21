window.onload = function(){
    let newtask = document.getElementById('newtask');
    let addtask = document.getElementById('addtask');
    let todolist = document.getElementById('todolist')

    addtask.onclick= function(){
        let li =document.createElement('li');
        li.innerText = newtask.value
        let xbtn = document.createElement('button');
        xbtn.innerText="DEL";
        xbtn.onclick =function (event) {
            event.target.parentElement.remove()
          }

          let upbtn = document.createElement('button')
          upbtn.innerText = 'UP'
          upbtn.onclick = function(event){
              //event.target= the up button
              //event.target.parentElement = the <> item
              //event.target.parentElement.parentElement is the todolist

              event.target.parentElement.parentElement.insertBefore(
                  event.target.parentElement,//insert this element
                  event.target.parentElement.previousElementSibling//before its previous element
              
              )

          }

          let dnbtn = document.createElement('button')
          dnbtn.innerText = 'DWN'
          dnbtn.onclick = function(event){
              //event.target= the up button
              //event.target.parentElement = the <> item
              //event.target.parentElement.parentElement is the todolist

              event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,//before its previous element

                  event.target.parentElement//insert this element
              
              )

          }

          let taskSpan = document.createElement('span')
          taskSpan.innerText = newtask.value

        li.appendChild(xbtn);
        li.appendChild(upbtn);
        li.appendChild(dnbtn);

        todolist.appendChild(li)
        newtask.value="";
    }
}