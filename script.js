// var box = document.querySelector('#box')
// // Or You can also use 
// // var idbox = document.getElementById('box')

// box.addEventListener( 'mouseleave',function(){  // click , dblclick ,mouseenter,mouselave.
//     console.log('event performed');
// } )

// To select body : there are 2 ways:-
//   1. document.queryselector('body')
//   2. document.body


// var chutki  = document.querySelector('img');
// var msg = document.querySelector('h2 span');
// var body = document.body



// chutki.addEventListener('mouseenter',function(){
//     msg.innerHTML="Chutki Se Door Hoja! 😡😡😡"
//     body.style.backgroundColor="red"
// })

// chutki.addEventListener('mouseleave',function(){
//     msg.innerHTML="Good ab Door hi rehna!😤😤😤"
//     body.style.backgroundColor="black"
    
// })


// var main = document.querySelector('#main')


// using Eventlister aap kisi v event ki details nikal sakte hai.
// main.addEventListener('wheel',function(dets){   //more : on scrolling : wheel,
//     // console.log("Hello");
//     console.log(dets); // funtion value is passed which gives all the info about event depending on event , eg: mouse move , click , dblclick , mouseenter,mouseleave : all points details will be told based on the enterance and left of the pointer of mouse.
// })

// main.addEventListener('mousemove',function(def){
    //     console.log("Hey");
    // console.log(def); // give loaction points and details of pointer
    // })
    // scrolling wheel
    // main.addEventListener('wheel',function(delt){
        //     // console.log("Hey");
        //     console.log(delt);
        // key-down
        // main.addEventListener('keydown',function(delt){ more : 'keypress'
        //     console.log("Hey");
        //     // console.log(delt);
        // })
        
        // jab bhi hum koi function run krte h , we can know its event 


var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')

main.addEventListener('mousemove',function(dets){
    // console.log(dets.x);

    cursor.style.left= dets.x + "px";
    cursor.style.top= dets.y + "px";
    

})