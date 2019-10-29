//ellipse(203, 197, 277, 309);

background(100,149,237);
fill(54, 42, 42);
textSize(30);
text("EyeCam", 10, 30);
textSize(20);
text("Contacts that give you picture perfect vision!", 10, 87);

var x= 200;
var y= 270;
var w= 150;
var h= 150;

//face
fill(234, 255, 0);
ellipse(x,y,w,h);
//eyes
fill(250, 245, 250);
ellipse(x-35,y-20 ,w*(4/15),h*(1/6));
ellipse(x+35, y-20,w*(4/15),h*(1/6));
strokeWeight(10);
point(x-35, y-20);
point(x+35, y-20);
//mouth
strokeWeight(1);
fill(255, 0, 0);
arc(x, y+ 30, 70, 40, 0, 180);

//eyebrows
line(x-50,y-40,x-5,y-60);
line(x+50,y-40,x+5,y-60);

//textbox
fill(39, 61, 1560);
rect(100,100,200,50);
fill(5, 5, 5);
textSize(15);
text("I can't believe my eyes!", 125,120);
strokeWeight(5);
line(200,153,x,y-80);

//left textcircle
strokeWeight(1);
fill(39, 61, 156);
ellipse(50,150,90,90);
fill(5, 5, 5);
textSize(20);
text("Only $900", 7,160);

//right textcircle
fill(39, 61, 156);
ellipse(350,150,90,90);
fill(5, 5, 5);
textSize(20);
text("Get It ", 320,140);
text("Now!!!", 320,160);
