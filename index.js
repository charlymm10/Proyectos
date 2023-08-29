//let a=2, b=5, r, s="Resultado= "
//r=a+b
//console.log(r=a+b)

const persona ={
    nombre:"charly",
    apellidopaterno:"mayorga",
    apellidomaterno:"piedra",
    semestre:7
}
const fruta=["naranja", "manzana", "platano", "tomate", 2, true, 123.55,new Date(), {
    nombre:"charly",
    apellidopaterno:"mayorga",
    apellidomaterno:"piedra",
    semestre:7
}]

//console.log(fruta[7])

function promedio(u1,u2,u3,u4,u5){
    let prom =(u1+u2+u3+u4+u5)/5
    return prom
}
//console.log(promedio(8,9,8,9,10))

const producto = {
  nombre: 'manzana',
  categoria: 'frutas',
  precio: 1.99,
  nutrientes : {
   carbohidratoss: 0.95,
   grasas: 0.3,
   proteina: 0.2
 }
}  
//console.log(producto); 

let m="manzana" , c=5, p=1.99, s="precio de 5 manzanas= "
m=c*p
//console.log(s,m);

function Persona(nombre, edad, profesion) {
   return {
    nombre: nombre,
    edad: edad,
    profesion: profesion
  };
}
const juan = new Persona('Juan', 30, 'ingeniero');
//console.log(juan)