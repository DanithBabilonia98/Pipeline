import Aplication from "../application";

class Photos extends Application 
{
    name: string;
    size: number;
    constructor(name: string, size: number) {
        super(name, size);
        this.name = name;
        this.size = size;
    }

    openCamera()
    {
        console.log(`The camera was opened`);
    }

    chooseCamera()
    {
        console.log(`The camera was chosen`);
    }

    openGallery()
    {
        console.log(`The gallery was opened`);
    }
}