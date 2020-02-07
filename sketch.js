function setup () {
    createCanvas(600, 600);
}

function popArt(originX, originY, outlineColor, bgColor, wingsColor, centerColor) {
    translate(originX, originY); 
    fill(bgColor);
    noStroke();
    rect(0, 0, 200, 200);
    
    stroke(outlineColor);
    strokeWeight(15);
    line(80, 0, 200, 100);
    line(200, 100, 80, 200);
    fill(wingsColor);
    
    arc(200, 100, 180, 180, HALF_PI, PI + HALF_PI);
    arc(0, 100, 180, 180, PI + HALF_PI, HALF_PI);
    
    fill (centerColor);
    circle(100, 100, 90);
    
}

function draw() {
    popArt(0,0,'#07485C', '#567987','#F4857F','#F9C0AD');
    popArt(0,200, '#655A8C','#D8C5D9','#BF8FBC','#B099BF');
    popArt(0,200, '#07485C', '#567987','#F4857F','#F9C0AD');
    
    popArt(200,-400, '#655A8C','#D8C5D9','#BF8FBC','#B099BF');
    popArt(0,200,'#07485C', '#567987','#F4857F','#F9C0AD');
    popArt(0,200, '#655A8C','#D8C5D9','#BF8FBC','#B099BF');
    
    popArt(200,-400,'#07485C', '#567987','#F4857F','#F9C0AD');
    popArt(0,200, '#655A8C','#D8C5D9','#BF8FBC','#B099BF');
    popArt(0,200, '#07485C', '#567987','#F4857F','#F9C0AD');

}