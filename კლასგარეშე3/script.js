const cookie =
document.getElementById("cookie");


const counter =
document.getElementById("cookies");


const comboText =
document.getElementById("combo");


const canvas =
document.getElementById("fx");


const ctx =
canvas.getContext("2d");


canvas.width=innerWidth;
canvas.height=innerHeight;



let cookies=0;

let combo=0;

let power=1;


let particles=[];



class Particle{

constructor(x,y){

this.x=x;

this.y=y;

this.size=
Math.random()*10+3;


this.speedX=
(Math.random()-0.5)*15;


this.speedY=
(Math.random()-0.5)*15;


this.life=1;


this.color=
[
"orange",
"yellow",
"white"
]
[
Math.floor(Math.random()*3)
];


}



update(){

this.x+=this.speedX;

this.y+=this.speedY;

this.life-=0.03;

}



draw(){

ctx.globalAlpha=this.life;

ctx.fillStyle=this.color;

ctx.beginPath();

ctx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);

ctx.fill();

ctx.globalAlpha=1;

}

}



function burst(x,y){

for(let i=0;i<70;i++){

particles.push(
new Particle(x,y)
);

}

}



function loop(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


particles.forEach((p,i)=>{


p.update();

p.draw();


if(p.life<=0)
particles.splice(i,1);


});


requestAnimationFrame(loop);

}


loop();





cookie.onclick=()=>{


cookies+=power;

combo++;


counter.innerText=cookies;

comboText.innerText=combo;



cookie.classList.add("hit");



let rect=
cookie.getBoundingClientRect();


burst(
rect.left+100,
rect.top+100
);



let text=document.createElement("div");


text.className="float";

text.innerHTML=
"+"+power;


text.style.left=
rect.left+"px";


text.style.top=
rect.top+"px";


document.body.appendChild(text);



setTimeout(()=>{

text.remove();

},1000);



setTimeout(()=>{

cookie.classList.remove("hit");

},150);



};





// Upgrade system


let upgrade=
document.getElementById("upgrade");


let cost=50;


upgrade.onclick=()=>{


if(cookies>=cost){


cookies-=cost;

power++;

cost*=2;


counter.innerText=cookies;


document.getElementById("cost")
.innerText=cost;


}

};