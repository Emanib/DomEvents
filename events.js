

const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');
const content4 = document.getElementById('content-4');
const counterTwo = document.getElementById('counter');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const li1 = document.getElementById('btn1');
const li2 = document.getElementById('btn2');
const li3 = document.getElementById('btn3');  
const li4 = document.getElementById('btn4');


btn1.addEventListener('click',function(){
    li2.classList.remove('active');
    li1.classList.add('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content1.classList.add('active');
    
});


btn2.addEventListener('click',function(){
    li1.classList.remove('active');
    li2.classList.add('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    content1.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content2.classList.add('active');
});

btn3.addEventListener('click',function(){
    li2.classList.remove('active');
    li3.classList.add('active');
    li1.classList.remove('active');
    li4.classList.remove('active');
    content2.classList.remove('active');
    content1.classList.remove('active');
    content4.classList.remove('active');
    content3.classList.add('active');
    
});
btn4.addEventListener('click',function(){
    li2.classList.remove('active');
    li4.classList.add('active');
    li3.classList.remove('active');
    li1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content1.classList.remove('active');
    content4.classList.add('active');
   
});

window.addEventListener('keypdown', (key) => {
        if (Event.key == '1' ) {
            li2.classList.remove('active');
            li1.classList.add('active');
            li3.classList.remove('active');
            li4.classList.remove('active');
            content2.classList.remove('active');
            content3.classList.remove('active');
            content4.classList.remove('active');
            content1.classList.add('active');}
        
        else if (Event.key == '2' ) {
            li1.classList.remove('active');
            li2.classList.add('active');
            li3.classList.remove('active');
            li4.classList.remove('active');
            content1.classList.remove('active');
            content3.classList.remove('active');
            content4.classList.remove('active');
            content2.classList.add('active');
        }
        else if (Event.key == '3' ) {
            content2.classList.remove('active');
            content1.classList.remove('active');
            content4.classList.remove('active');
            content3.classList.add('active');
            li2.classList.remove('active');
            li3.classList.add('active');
            li1.classList.remove('active');
            li4.classList.remove('active');
           ;
        }
        else if( Event.key == '4' ) {
            content2.classList.remove('active');
            content3.classList.remove('active');
            content1.classList.remove('active');
            content4.classList.add('active');
            li2.classList.remove('active');
            li4.classList.add('active');
            li3.classList.remove('active');
            li1.classList.remove('active');
         
        }

    });
