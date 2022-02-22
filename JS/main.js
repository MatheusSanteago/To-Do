
var tarefas = []

function create() {
   // DIV 
   let div = document.createElement("div")
   const dclass = div.setAttribute("class","box2")       
   // TEXTO 
   let p = document.createElement("p")
   const pclass = p.setAttribute("class","txt")
   var value = document.getElementById("text").value;
   var textNode = document.createTextNode(value)
   const pId = p.setAttribute("id","taskTxt"); 
   // CHECKBOX
   let checkbox = document.createElement("input")
   checkbox.type = "checkbox";
   const attFunction = checkbox.setAttribute("onclick","clickBox()")
   const checkboxId = checkbox.setAttribute("id","checkbox")
   const checkboxClass = checkbox.setAttribute("class","checks")
   // MAIN
   var main = document.getElementById("box")
   // CHILD'S 
   main.appendChild(div)
   div.appendChild(p)
   p.appendChild(textNode)
   div.appendChild(checkbox)
   // PUSH FOR ARRAY
   tarefas.push(value)
   var taskJSON = JSON.stringify(tarefas)
   
}

   function clickBox() {
       var checkBox = document.getElementById("checkbox")
       var texto = document.getElementById("taskTxt")

       if (checkBox.checked == true) {
           texto.style.textDecoration = "line-through";
       } else {
           texto.style.textDecoration = "none";
       }  
   }
