const slider1 = document.querySelector('#glide1');
if(slider1){
    new Glide(slider, {
        type:"carousel",
        startAt:0,
        autoplay: 3000,
        gap:0,
        hoverpause:true,
        preView: 1,
        AnimationDuration: 800,
        AnimationTimingFunc:"linear",


    }).mount()
}
