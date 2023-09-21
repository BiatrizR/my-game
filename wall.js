//1.criar a classe chamando class e nome da classe com letra Maíscula.
class Wall{

    //função/metódo constructor, para criar e definir propriedades de objeto
    //como forma, propriedades: largura, altura x e y, o objeto é identificado pela palavra **this**
    constructor(x, y, w, h){

        //escrever as configurações do objeto e adicionar a forma tbm
        let options = {
            isStatic:true,
            stiffness:2 

        };
        
        this.body = Bodies.rectangle(x, y, w, h, options);

        this.w = w;
        this.h = h;
        
        World.add(world, this.body);

    }
//explicar que: função/método show para exibir o desenho
    //obs.: dentro da classe não precisa da palavra function
    display() {

        //criar variável  que vai armazenar a posição do corpo
        var pos = this.body.position;
    ///  Matter.Body.rotate(this.body,angle)
    
        //colocar itens que serão utilizados apenas para alguns objetos como cor 
        push();
        //a partir de que ponto o desenho começa
        rectMode(CENTER);
        stroke(255);
        
        
        //para sos retangulos rodarem usar o translate
        translate(pos.x,pos.y);
    
        rect(pos.x, pos.y, this.w, this.h);
      //rect(0, 0, this.w, this.h);
    
    
        pop();
 }
}