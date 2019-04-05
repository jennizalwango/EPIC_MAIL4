
function AddUsers() {
  document.getElementById("AddUsers").style.display = "block"
  document.getElementById("CreateGroups").style.display = "none"
  document.getElementById("DeleteGroups").style.display = "none"
  document.getElementById("DeleteUserFromGroups").style.display = "none"
  document.getElementById("ChangeGroupName").style.display = "none"
}

function CreateGroups() {
  document.getElementById("CreateGroups").style.display = "block"
  document.getElementById("AddUsers").style.display = "none"
  document.getElementById("DeleteGroups").style.display = "none"
  document.getElementById("DeleteUserFromGroups").style.display = "none"
  document.getElementById("ChangeGroupName").style.display = "none"
}

function DeleteGroups(){
  document.getElementById("ChangeGroupName").style.display = "none"
  document.getElementById("CreateGroups").style.display = "none"
  document.getElementById("AddUsers").style.display = "none"
  document.getElementById("DeleteGroups").style.display = "block"
  document.getElementById("DeleteUserFromGroups").style.display = "none"
}

function DeleteUserFromGroups(){
  document.getElementById("ChangeGroupName").style.display = "none"
  document.getElementById("CreateGroups").style.display = "none"
  document.getElementById("AddUsers").style.display = "none"
  document.getElementById("DeleteGroups").style.display = "none"
  document.getElementById("DeleteUserFromGroups").style.display = "block"
}

function EditGroup(){
  document.getElementById("CreateGroups").style.display = "none"
  document.getElementById("AddUsers").style.display = "none"
  document.getElementById("DeleteGroups").style.display = "none"
  document.getElementById("DeleteUserFromGroups").style.display = "none"
  document.getElementById("ChangeGroupName").style.display = "block"
}