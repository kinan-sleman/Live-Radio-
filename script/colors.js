class Colors{
    constructor(){
        this.FooterElement();
        document.body.style.width = screen.width + "px";
        document.body.style.height = screen.height + "px";
        var color1 = document.getElementById("color1");
        if(localStorage.getItem("BodyColor") == null ){
            document.body.style.background = "#FF512F";
            document.body.style.background = "-webkit-linear-gradient(to right, #DD2476, #FF512F)";
            document.body.style.background = "linear-gradient(to right, #DD2476, #FF512F)";
        }else{
            this.ChangeColor(localStorage.getItem("BodyColor"));
        }
        color1.addEventListener("click",()=>{
            this.ChangeColor("color1");
        });
        var color2 = document.getElementById("color2");
        color2.addEventListener("click",()=>{
            this.ChangeColor("color2");
        });
        var color3 = document.getElementById("color3");
        color3.addEventListener("click",()=>{
            this.ChangeColor("color3");
        });
        var color4 = document.getElementById("color4");
        color4.addEventListener("click",()=>{
            this.ChangeColor("color4");
        });
        
        var color5 = document.getElementById("color5");
        color5.addEventListener("click",()=>{
            this.ChangeColor("color5");
        });
        var color6 = document.getElementById("color6");
        color6.addEventListener("click",()=>{
            this.ChangeColor("color6");
        });
    }
    FooterElement(){
        var footer = document.getElementById("footer");
        footer.style.width = screen.width + "px";
        footer.style.height = "60px";
        footer.style.transform = "translateY(" + screen.height + "px)";
        footer.style.backgroundColor = "rgb(206 86 86 / 0%)";
    }
    ChangeColor(color){
        // switch (color) {
        //     case "color1":
        //         document.body.style.background = "#FF512F";
        //         document.body.style.background = "-webkit-linear-gradient(to right, #DD2476, #FF512F)";
        //         document.body.style.background = "linear-gradient(to right, #DD2476, #FF512F)";
        //         localStorage.setItem("BodyColor","color1");
        //         break;
        //     case "color2":
        //         document.body.style.background = " #1A2980";
        //         document.body.style.background = "-webkit-linear-gradient(to right, #26D0CE, #1A2980)";
        //         document.body.style.background = "linear-gradient(to right, #26D0CE, #1A2980)";
        //         localStorage.setItem("BodyColor","color2");
        //         break;
        //     case "color3":
        //         document.body.style.background = " #DD5E89";
        //         document.body.style.background = "-webkit-linear-gradient(to right, #F7BB97, #DD5E89)";
        //         document.body.style.background = "linear-gradient(to right, #F7BB97, #DD5E89)";
        //         localStorage.setItem("BodyColor","color3");
        //         break;
        //     case "color4":
        //         document.body.style.background = " #cc2b5e";
        //         document.body.style.background = "-webkit-linear-gradient(to right, #753a88, #cc2b5e)";
        //         document.body.style.background = "linear-gradient(to right, #753a88, #cc2b5e)";
        //         localStorage.setItem("BodyColor","color4");
        //         break;
        //     case "color5":
        //         document.body.style.background = "#0f0c29";
        //         document.body.style.background = "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)";
        //         document.body.style.background = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";
        //         localStorage.setItem("BodyColor","color5");
        //         break;
        //     case "color6":
        //         document.body.style.background = "#2193b0";
        //         document.body.style.background = "-webkit-linear-gradient(to right, #6dd5ed, #2193b0)";
        //         document.body.style.background = "linear-gradient(to right, #6dd5ed, #2193b0)";
        //         localStorage.setItem("BodyColor","color6");
        //         break;
        //     }  
        if(color == "color1"){
            document.body.style.background = "#FF512F";
            document.body.style.background = "-webkit-linear-gradient(to right, #DD2476, #FF512F)";
            document.body.style.background = "linear-gradient(to right, #DD2476, #FF512F)"; 
        }else if(color == "color2"){
            document.body.style.background = " #1A2980";
            document.body.style.background = "-webkit-linear-gradient(to right, #26D0CE, #1A2980)";
            document.body.style.background = "linear-gradient(to right, #26D0CE, #1A2980)";
        }else if(color == "color3"){
            document.body.style.background = " #DD5E89";
            document.body.style.background = "-webkit-linear-gradient(to right, #F7BB97, #DD5E89)";
            document.body.style.background = "linear-gradient(to right, #F7BB97, #DD5E89)";
        }else if(color == "color4"){
            document.body.style.background = " #cc2b5e";
            document.body.style.background = "-webkit-linear-gradient(to right, #753a88, #cc2b5e)";
            document.body.style.background = "linear-gradient(to right, #753a88, #cc2b5e)";
        }else if(color == "color5"){
            document.body.style.background = "#0f0c29";
            document.body.style.background = "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)";
            document.body.style.background = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";
        }else if(color == "color6"){
            document.body.style.background = "#2193b0";
            document.body.style.background = "-webkit-linear-gradient(to right, #6dd5ed, #2193b0)";
            document.body.style.background = "linear-gradient(to right, #6dd5ed, #2193b0)";
        }
        localStorage.setItem("BodyColor",color);
    }
}
onload = new Colors();