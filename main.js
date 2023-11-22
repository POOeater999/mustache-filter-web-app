function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
    
}

noseX = 0
noseY = 0

function setup() {
    canvas = createCanvas(300,300) ;
    canvas.center() ;
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded) ;
    poseNet.on('pose',gotPoses)

}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results)
        noseX = results[0].pose.nose.x -25
        noseY = results[0].pose.nose.y

    }
}

function modelLoaded(){
    console.log("posenet is loaded")
}

function draw() {
    image(video,0,0,300,300)
    image(mustache,noseX,noseY,50,20)
    

    
}

function snap() {
 save("picture.png")

}