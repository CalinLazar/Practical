// [SNAKE]> PARENT > HEAD

class Snake {
  // when creating a new snake -> attach a head to it
  constructor(x, y, dir = "right") {
    //Snake elements
    this.children = [];
    this.children.push(new Headers(x,y,dir))

    if(this.dir == "up"){
      this.children.push(new Body(x,y +1, dir))
      this.children.push(new Tail(x, y+2, dir))
    }

    else if(this.dir == "down"){
      this.children.push(new Body(x,y - 1, dir))
      this.children.push(new Tail(x, y - 2, dir))
    }

    else if(this.dir == "left"){
      this.children.push(new Body(x,y + 1, dir))
      this.children.push(new Tail(x, y +2 , dir))
    }

    else if(this.dir == "right"){
      this.children.push(new Body(x,y - 1, dir))
      this.children.push(new Tail(x, y- 2, dir))
    }
      
  }

  move() {
   this.children.reverse()

    this.children.forEach( (s,i) => {
        if(i == this.children.length - 1){
         if(s.dir == "up") {s.y--} 
         if(s.dir == "right"){ s.x++}
         if(s.dir == "down") {s.y++} 
         if(s.dir == "left"){ s.x--}
        }else {
         s.x = this.children[i + 1].x
         s.y = this.children[i + 1].y
        }
    })
    this.children.reverse()
  }

  // when rendering the snake - also render the head
  render() {
    let html = ``;
    for (let i = 0; i < this.children.length; i++) {
      html += this.children[i].render();
    }
    return html;
  }
}



