// Ejercicio 1

//El carro es un objeto:


// Chasis -> vestidura, ensamblado

const construirChasis = async (carro, tiempo) => {

    const vestir = (carro, tiempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.chasis.vestidura) {
                    carro.chasis.vestidura = true;
                    console.log("Vestidura instalada al chasis")
                    resolve(carro);
                }
                else {
                    reject("El chasis ya tiene vestidura");
                }
            }, tiempo);

        });
    }
    const ensamblar = (carro, tiempo) => {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (!carro.chasis.ensamblado) {
                    carro.chasis.ensamblado = true
                    console.log("Chasis ensamblado")
                    resolve(carro);
                }
                else {
                    reject("El chasis ya fue ensamblado");
                }
            }, tiempo);
        });

    }

    try {
        const chasisVestido = await vestir(carro, tiempo);
        return await ensamblar(chasisVestido, tiempo)
    }
    catch (error) {
        console.error("El chasis esta en mal estado")
    }

}



// Carroceria -> ensamblar puertas, colocar vidrios, lijar, pintar -> Colocar en el chasis

const construirCarroceria = async (carro, ventanas, color, tiempo) => {


    const ponerPuertas = (carro, tiempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.carroceria.puertas) {
                    carro.carroceria.puertas = true;
                    console.log("Poner puertas")
                    resolve(carro);
                }
                else {
                    reject("No se pudieron poner las puertas");
                }
            }, tiempo);

        });
    }
    const colocarVentanas = (carro, ventanas, tiempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.carroceria.ventanas == 0 && ventanas > 0) {
                    carro.carroceria.ventanas = ventanas;
                    console.log("Ventanas puestas")
                    resolve(carro);
                }
                else {
                    reject("No se pudieron poner las ventanas");
                }
            }, tiempo);

        });
    }
    const lijar = (carro, tiempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.carroceria.lijada) {
                    carro.carroceria.lijada = true;
                    console.log("Carroceria lijada")
                    resolve(carro);
                }
                else {
                    reject("La carroceria no se pudo lijar");
                }
            }, tiempo);

        });
    }
    const pintar = (carro, color, tiempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.carroceria.color == "") {
                    carro.carroceria.color = color;
                    console.log("El carro se pinto de color", color)
                    resolve(carro);
                }
                else {
                    reject("La carroceria no se pudo pintar");
                }
            }, tiempo);

        });
    }
    const instalarLlantas = (carro, tiempo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.carroceria.llantas == 0) {
                    carro.carroceria.llantas = 4;
                    console.log("Llantas puestas")
                    resolve(carro);
                }
                else {
                    reject("No se pudieron poner las llantas");
                }
            }, tiempo);

        });
    }

    try {
        const puertaspuestas = await ponerPuertas(carro, tiempo)
        const ventanasColocadas = await colocarVentanas(puertaspuestas, ventanas, tiempo)
        const carroceriaLijada = await lijar(carro, tiempo)
        const carroceriaPintada = await pintar(carro, color, tiempo)
        return await instalarLlantas(carro, tiempo)
    } catch (error) {
        console.error("Paso un error a la hora de fabricar carroceria", error)
    }

   


}

// Preparar para venta -> inflar llantas, colocar llantas, colocar gasolina, colocar aceite
// Mandar a la agencia -> lavar, -> Se sube a la madrina -> Se inicia el viaje

const prepararParaEnviar = async (carro, tiempo) =>
{

    const ponerGasolina = (carro, tiempo) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.gasolina == 0) {
                    carro.gasolina = 1;
                    console.log("Tanque lleno")
                    resolve(carro);
                }
                else {
                    reject("No se pudo llenar el tanque");
                }
            }, tiempo);

        });
    }
    const ponerAceite = (carro, tiempo) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (carro.aceite == 0) {
                    carro.aceite = 1;
                    console.log("Niveles de aceite correctos")
                    resolve(carro);
                }
                else {
                    reject("Hay fallas en el contenedor de aceite");
                }
            }, tiempo);

        });

    }
    const lavarAuto = (carro, tiempo) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!carro.limpio) {
                    carro.limpio = true;
                    console.log("Carro limpio!")
                    resolve(carro);
                }
                else {
                    reject("Carro no se pudo lavar");
                }
            }, tiempo);

        });

    }

    try{

        const tanqueLleno = await ponerGasolina(carro, tiempo);
        const aceiteListo = await ponerAceite(tanqueLleno, tiempo);
        return await lavarAuto(aceiteListo, tiempo);

    }catch(error)
    {
        console.error("No se pudo alistar el coche para enviarlo", error)
    }
   
    
   
  
}




// Recibir en la agencia -> Recepción del carro, colocar en la exhibición

const exhibirCocheEnAgencia = async (carro, tiempo) =>
{
        const transladarAgencia = (carro, tiempo) =>
        {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (carro.locacion == "Fabrica") {
                        carro.locacion = "Agencia";
                        console.log("El coche ya está en la agencia");
                        resolve(carro);
                    }
                    else {
                        reject("El coche no se pudo transladar");
                    }
                }, tiempo);
    
            });
        }

        const agregarAInventario = (carro, tiempo) =>
        {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (!carro.inventariado) {
                        carro.inventariado = true;
                        console.log("Carro en inventario")
                        resolve(carro);
                    }
                    else {
                        reject("Carro no se puede inventariar");
                    }
                }, tiempo);
    
            });
    

        }

        const exhibirCoche = (carro, tiempo) =>
        {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (!carro.exhibido) {
                        carro.exhibido = true;
                        console.log("Carro en venta al publico!")
                        resolve(carro);
                    }
                    else {
                        reject("Aun no se puede poner en venta");
                    }
                }, tiempo);
    
            });
    

        }

        const agenciado = await transladarAgencia(carro, tiempo);
        const inventariado = await agregarAInventario(agenciado, tiempo);
        return await exhibirCoche(inventariado, tiempo);
       
}



const construirCoche = async (numero_coche, tiempo) =>
{

    const carro1 = {
        chasis: {
            vestidura: false,
            ensamblado: false
        },
        carroceria: {
            puertas: false,
            ventanas: 0,
            lijada: false,
            color: "",
            llantas: 0,
        },
        gasolina: 0,
        aceite: 0,
        limpio: false,
        locacion: "Fabrica",
        inventariado: false,
        exhibido: false
    }; 
    const chasisListo = await construirChasis(carro1, tiempo);
    const carroceriaLista = await construirCarroceria(chasisListo, 4, "rojo", tiempo);
    const carroListoParaEnviar = await prepararParaEnviar(carroceriaLista, tiempo);
    const cocheEnVenta = await exhibirCocheEnAgencia(carroListoParaEnviar, tiempo)
    console.log(`El coche #${numero_coche}`, carro1);

}

const fabricaDeCoches = async (numeroCoches) =>
{
    let time = 20;
    for(let i = 1; i <= numeroCoches; i++)
    {   
        //Lo hice pensando en que el tiempo se más largo para los primeros  que
        //se envian a construir
        construirCoche(i, (time*100));
        time--;
    }
    
}

fabricaDeCoches(20);
