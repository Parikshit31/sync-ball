var sync_ball;
var database,position;

function setup(){

    database = firebase.database();
    createCanvas(500,500);

    sync_ball = createSprite(250,250,10,10);
    sync_ball.shapeColor = "red";

    var sync_ball_position = database.ref('ball/position')
    sync_ball_position.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref('ball/position').set({
    
    'x' : position.x+x,
    'y' : position.y+y
})

}
s
function readPosition(data){
    position = data.val()
    sync_ball.x = position.x ;
     sync_ball.y = position.y ;
}

function showError(){
    console.log("error writing into database")
}
