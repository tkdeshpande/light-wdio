const x= {
    v1:4,
    v2:5,
    v3:function(){return this.v1 + this.v2;}
};

console.log(x.v3());