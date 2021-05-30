/*class Chain{
    constructor(bodyA, bodyB){
       var options={
       bodyA:bodyA, 
       bodyB:bodyB,
       stiffness:1,
       length:5
       }
      this.chain=Constraint.create(options);
      World.add(world,this.chain)
    }
    display(){
        var pointA= this.chain.bodyA.position
        var pointB= this.chain.bodyB.position
        strokeWeight(5)
        stroke("red")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}
*/
//attaching point with movable body
class Chain{
    constructor(bodyA, pointB){
       var options={
       bodyA:bodyA, 
       pointB:pointB,
       stiffness:0.9,
       //length:10
       }
       this.pointB= pointB
      this.chain=Constraint.create(options);
      World.add(world,this.chain)
    }
    display(){
        var pointA= this.chain.bodyA.position
        var pointB= this.pointB
        push();
        strokeWeight(5)
        stroke("red")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
    }
}