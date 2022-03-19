class Error{
    constructor(){
        window.addEventListener("offline",()=>{
            alert("you are offline .. please check your internet connection and reload this page");
        });
        document.getElementById("X").addEventListener("click",()=>{
            document.getElementById("pleaseWait").style.display = "none";
        });
}
}
onload = new Error();