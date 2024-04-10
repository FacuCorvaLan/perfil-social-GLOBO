window.onload = iniciar;
let listaComentarios = document.getElementById("lista-comentarios");

function iniciar(){
let btnSeguir = document.getElementById("btnFollow");
btnSeguir.addEventListener("click", clickBtnSeguir);

let btnMeGusta = document.getElementById("btnLike");
btnMeGusta.addEventListener("click", clickBtnMeGusta);

let btnComentar = document.getElementById("btnComment");
btnComentar.addEventListener("click", clickBtnComentar);
}

function clickBtnSeguir(){
    let txtFollow = document.getElementById("btnFollow");
    if (txtFollow.textContent === "Seguir"){
        txtFollow.innerHTML = "Dejar de seguir";
    }
    else{txtFollow.innerHTML = "Seguir";}
}

function clickBtnMeGusta(){
    let txtLikes = document.getElementById("spanLike");
    let cantLikes = parseInt(txtLikes.textContent);

    cantLikes = cantLikes === 0 ? cantLikes + 1 : cantLikes - 1;

    txtLikes.innerHTML = cantLikes;
}

function clickBtnComentar(){
    let userName = document.getElementById("user");
    let userComment = document.getElementById("inp");
    let message = document.getElementById("errorMessage");

    if(userName.value === ""){
        animatedMessage(message, "errorAnimation1", "Ingrese un usuario para comentar...");
    }else if(userComment.value === ""){
        animatedMessage(message, "errorAnimation1", "Ingrese un comentario...");
    }else{
        message.classList.remove("errorAnimation1");
        let fullComment = document.createElement("li");
            
        let comment = document.createElement("span");
        comment.textContent = userComment.value;


        let txtName = document.createElement("span");
        txtName.textContent = userName.value + ": ";
        txtName.style.color = "rgb(199, 125, 231)";
        txtName.style.fontWeight = "bold";
        

        fullComment.appendChild(txtName); 
        fullComment.appendChild(document.createTextNode(" "));
        fullComment.appendChild(comment);
        
        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Eliminar";
        btnDelete.classList.add("btnDelete");

        let commentContainer = document.createElement("div");
        let lineBreack = document.createElement("br");
        commentContainer.classList.add("commentDiv");
        commentContainer.appendChild(fullComment);
        commentContainer.appendChild(btnDelete);
        commentContainer.appendChild(lineBreack);
        commentContainer.appendChild(lineBreack);
        

        listaComentarios.appendChild(commentContainer);

        btnDelete.addEventListener("click", clickBtnEliminar);

        userName.value = ""; 
        userComment.value = "";
        message.textContent = "";
        txt = "";
        message.classList.remove("errorAnimation1", "errorAnimation2");  
    }
}

function animatedMessage(text, animationClass, messageText) {
    text.textContent = messageText;
    text.classList.add(animationClass);
    setTimeout(() => {
        text.classList.remove(animationClass);
    }, 2000);
}

function clickBtnEliminar(){
    let elementDelete = document.querySelector(".commentDiv");
    elementDelete.remove();
}