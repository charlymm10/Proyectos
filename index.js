let a=2, b=5, r, s="Resultado= "
r=a+b


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
console.log(promedio(8,9,8,9,10))