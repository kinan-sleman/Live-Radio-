class Volume{
    constructor(){
        this.audio = document.getElementById("audio");
        this.volumeRange = document.getElementById("volumeRange");
        this.RateRange = document.getElementById("RateRange");
        this.audio.volume = 50/100;
        this.audio.playbackRate = 100 / 100
        this.volumeRange.addEventListener("change",()=>{
            this.audio.volume = this.volumeRange.value / 100;
        });
        this.RateRange.addEventListener("change",()=>{
            this.audio.playbackRate = this.RateRange.value / 100; 
        });
    }   
}
onload = new Volume();