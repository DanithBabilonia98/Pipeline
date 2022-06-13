/*
Las aplicaciones también deberán ser modeladas por medio de un esquema de
POO. El modelo deberá tener las siguientes características:
● Propiedades
- Nombre, de tipo texto, sólo lectura.
- Tamaño, de tipo número, sólo lectura.
● Funcionalidades
- Inicializar: Inicia la aplicación
- Detener: Detiene la aplicación
Esta clase “Aplicación” deberá ser una clase abstracta */

abstract  class Application
{
    readonly name: string;
    readonly size: number;
    private status: boolean = false;

    constructor(name: string, size: number)
    {
        this.name = name;
        this.size = size;
    }

    initApp()
    {
        if(this.status)
        {
            throw new Error(`The application ${this.name} is already initiliazed`)
        }
        else
        {
            this.status = true;
            console.log(`The application ${this.name} will be initialized`);
        }
            
    }

    stopApp()
    {
        if(!this.status)
        {
            throw new Error(`The application ${this.name} is already stopped`)
        }
        else
        {
            this.status = false;
            console.log(`The application ${this.name} will be stoped`);
        }
    }

}