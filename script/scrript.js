// class Player 
class Player{
    constructor(){
        this.main = document.getElementById("main");
        this.img = document.getElementById("img");
        this.main.style.height = screen.height-500+ "px"; 
        if(screen.width <= 500){
            this.main.style.width = screen.width + "px";
        }
        this.content = document.getElementById("content");
        this.content.style.height = screen.height-350 + "px";
        document.getElementById("body").style.width = screen.width + "px";
        document.getElementById("body").style.height = screen.height + "px";
    }
}
// class audio player
class Audioplayer{
    constructor(){
        this.radio_title = document.getElementById("radio_title");
        this.audio = document.getElementById("audio");
        this.play_pause_button = document.getElementById("play_pause_button");
        this.next_button = document.getElementById("next_button");
        this.back_button = document.getElementById("back_button");        
        this.radio_Source = [];
        this.radio_Source[0] = "http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.radio_Source[1] = "http://radioliveb.rtv.gov.sy:8008/RadioSouryana";
        this.radio_Source[2] = "http://radioshamfm.grtvstream.com:8400/stream?type=http&nocache=54016";
        this.radio_Source[3] = "http://ninarfm.grtvstream.com:8896/stream?type=http&nocache=2903"       
        this.radio_Source[4] = "https://stream.almadinafm.com/;stream.mp3"
        this.radio_Source[5] = "http://185.4.87.79:8000/stream.mp3"
        this.radio_Source[6] = "http://radio.farah.fm:8000/;?type=http&nocache=53"
        this.radio_Source[7] = "http://streaming.inet.sy:8000/melodyfm"
        this.radio_Name = [];
        this.radio_Name[0] = "Radio Sawt AlShabab 89.9 FM - Damasco / Syria";
        this.radio_Name[1] = "Radio Souryana, 88.3 FM, Dimashq, Syria";
        this.radio_Name[2] = "Sham FM, 92.3 FM, Dimashq, Syria";
        this.radio_Name[3] = "Ninar FM, 88.3 FM, Halab, Syria";
        this.radio_Name[4] = "Radio Almadina FM 101.5 FM / Damascus Syria";
        this.radio_Name[5] = "Arabesque FM, 102.3 FM, Dimashq, Syria";
        this.radio_Name[6] = "Farah FM, 97.3 FM, Dimashq, Syria";
        this.radio_Name[7] = "Melody FM, 97.9 FM, Dimashq, Syria";
        this.pleaseWait = document.getElementById("pleaseWait");
        this.Hide_pleaseWait();
        this.play_pause_button.addEventListener("click",()=>{
        this.play_pause();
        });
        this.back_button.addEventListener("click",()=>{
             this.back_music();
        });
        this.next_button.addEventListener("click",()=>{
            this.next_music();
        });
        this.counter = 0;
        this.load_music();
    }
    play_pause(){
        if(this.play_pause_button.getAttribute("src") == "../img/play.png"){
        this.play_pause_button.setAttribute("src","../img/pause.png");
        this.audio.play();
        if(this.audio.networkState == 2){
            this.Show_pleaseWait();
        }
        this.audio_Event();
        }else{
            this.play_pause_button.setAttribute("src","../img/play.png");
            this.audio.pause();
            this.Hide_pleaseWait();
        }
        this.audio_Event();
    }
    back_music(){
        this.Show_pleaseWait();
        if(this.counter > 0){
            this.counter--;
        }else{
            this.counter = this.radio_Source.length - 1;
        }
        localStorage.setItem("position",this.counter);
        this.audio_Event();
        this.keep_play();
    }
    next_music(){
        this.Show_pleaseWait();
        if(this.counter < this.radio_Source.length - 1){
            this.counter++;
        }else{
            this.counter = 0;
        }
        localStorage.setItem("position",this.counter);
        this.audio_Event();
        this.keep_play();
    }
    audio_Event(){
        this.audio.addEventListener("loadeddata",()=>{
            this.Hide_pleaseWait();
        });
    }
    Show_pleaseWait(){
        this.pleaseWait.style.display = "inline";
    }
    Hide_pleaseWait(){
        this.pleaseWait.style.display = "none";
    }
    load_music(){
        if(localStorage.getItem("position")!=null){
            this.counter = localStorage.getItem("position");
        }
        this.audio.setAttribute("src",this.radio_Source[this.counter]);
        this.radio_title.innerHTML = this.radio_Name[this.counter];
        this.audio_Event();
    }
    keep_play(){
        if(this.play_pause_button.getAttribute("src") == "../img/play.png"){
            this.play_pause_button.setAttribute("src","../img/pause.png");
        }
        this.load_music();
        this.audio.play();
        this.audio_Event();
    }
}
onload = new Audioplayer();    
onload = new Player();