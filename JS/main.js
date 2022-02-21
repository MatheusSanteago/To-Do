
var tarefas = [];

function create() {

    const x = document.createElement("div");
    let box = x.setAttribute("class","box2");

    let check = document.createElement("input", "checkbox");
    check.type = "checkbox";
    let cs = check.setAttribute("class","checks");
    let ci = check.setAttribute("id","checkbox");
    x.appendChild(check)
    
    const p = document.createElement("p");
    let input = document.getElementById("text").value;
    let text = document.createTextNode(input);
    let txt = p.setAttribute("class","txt");
    p.appendChild(text);

    x.appendChild(p) ;
    let main = document.getElementById("box");
    main.appendChild(x);

    tarefas.push(input)
    console.log(tarefas);
}



function done() {
    let checkbox = document.getElementById("checkbox");
    let text = document.getElementsByClassName("txt");

    if (checkbox.checked == true) {
       
    } else {
      
    }
    
}