import Application from '../application';

class Message extends Application
{   
    name: string;
    size: number;
    addressee: string;
    message: string;
    type: string;
    constructor(
        name: string, 
        size: number, 
        message: string, 
        type:string,
        addressee: string) {
        super(name, size);
        this.name = name;
        this.size = size;
    }

    writeMessage()
    {
        console.log('The message  was written');
    }

    openMessage()
    {
        console.log('The message was opened');
    }

    deleteMessage()
    {
        console.log('The message was deleted');
    }
}