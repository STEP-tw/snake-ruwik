const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  eatItself:function(){
    let headPosition = snake.getHead();
    let body = snake.getBody();
    return body.some((bodyPosition)=>{
      return bodyPosition.isSameCoordAs(headPosition)
    });
  },
  isOutOfArea:function(length,width){
    let headPosition = snake.getHead();
    return (!headPosition.isInArea(length,width));
  }
}
