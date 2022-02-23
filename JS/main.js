
var tarefas = []
var datas = []

function create() {

    let div = document.createElement("div");
    const dclass = div.setAttribute("class","box2");      
  
    let p = document.createElement("p");
    const pclass = p.setAttribute("class","txt");
    var value = document.getElementById("text").value;
    var textNode = document.createTextNode(value);
    const pId = p.setAttribute("id","taskTxt"); 

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const checkboxId = checkbox.setAttribute("id","checkbox");
    const checkboxClass = checkbox.setAttribute("class","checks");

    var main = document.getElementById("box");
    
    main.appendChild(div);
    div.appendChild(p);
    p.appendChild(textNode);
    div.appendChild(checkbox);

    tarefas.push(value)
    
    
    const meses = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var d = new Date()
    let day = " Today is " + meses[d.getMonth()] + " " + d.getDate()  + ", " + d.getFullYear(); 



    document.getElementById("qtdTask").innerHTML = day

    var taskJSON = JSON.stringify(tarefas);
    localStorage.setItem("task_list", taskJSON);

}

onload = () => {

    if (localStorage.getItem("task_list")) {
    tarefas = JSON.parse(localStorage.getItem("task_list"));
    }
   
    tarefas.forEach((tarefa) => {
      let div = document.createElement("div");
      const dclass = div.setAttribute("class", "box2");

      let p = document.createElement("p");
      const pclass = p.setAttribute("class", "txt");

      var textNode = document.createTextNode(tarefa);
      const pId = p.setAttribute("id", "taskTxt");
    
      let checkbox = document.createElement("input");  
      checkbox.type = "checkbox";

      checkbox.setAttribute("onclick", "clickBox()");
      checkbox.setAttribute("id", "checkbox");
      checkbox.setAttribute("class", "checks");
 
      var main = document.getElementById("box");
   
      main.appendChild(div);
      div.appendChild(p);
      p.appendChild(textNode);
      div.appendChild(checkbox);

    
    });
  };

