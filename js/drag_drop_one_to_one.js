
function allowdrop(ev)
{
   ev.preventDefault();
}
function drag(ev)
{
  ev.dataTransfer.setData("image",ev.target.id);
  ev.target.style.opacity="0.4";

}

function drop(ev)
{
  ev.preventDefault();
  var data = ev.dataTransfer.getData("image");
  var element=ev.target.appendChild(document.getElementById(data));
  element.style.opacity="1";

}
function goBack()
{
  window.location.assign("file:///D:/Assignments/drag/drag_drop.html")
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
function resetPage(){
	window.location.assign("file:///D:/Assignments/drag/One_to_one_drag_drop.html");

}
