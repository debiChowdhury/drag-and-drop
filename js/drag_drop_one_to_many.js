	function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
		ev.target.style.cursor='pointer';
}

function removeNode(node) {
        node.parentNode.removeChild(node);
      }

      function drop(ev) {
        ev.preventDefault();
				ev.target.style.cursor='pointer';
        var data = ev.dataTransfer.getData("text");
        var isLeft = 'drag1' == data || "drag2" == data || "drag3"== data;
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "img" + ev.target.id;
       // clean target space if needed
        if (isLeft) {
          if (ev.target.nodeName == 'IMG') {
            ev.target.parentNode.appendChild(nodeCopy);
            removeNode(ev.target);
          }
          else
            ev.target.appendChild(nodeCopy);
        }
        else {
          if (ev.target.nodeName != 'IMG') {
            removeNode(document.getElementById(data));
            ev.target.appendChild(nodeCopy);
          }
        }
        ev.stopPropagation();
        return false;
      }
	  function goBack()
{
  window.location.assign("file:///D:/Assignments/drag/drag_drop.html")
}
function resetPage(){
	window.location.assign("file:///D:/Assignments/drag/One_to_many_drag_drop.html");

}
function check()
{
for(j=0;j<3;j++){
  for(var i=1;i<=3;i++){
    if(document.getElementById("div"+i).innerHTML!==""){
      dropObj1 = document.getElementById("div"+i);
      dragObjAns = parseInt(dropObj1.getElementsByTagName('img')[j].attributes.answer.value);
      var dropObjCorrectAns=parseInt(document.getElementById("div"+i).attributes.correct_answer.value);
    }
  if(dragObjAns === dropObjCorrectAns){
    dropObj1.style.borderColor = "green";
    console.log("sucess");

  }
  else{
      dropObj1.style.borderColor = "red";
    console.log("not");
  }
 }
}

}
