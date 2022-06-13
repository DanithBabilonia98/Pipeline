import Application from "../application";

class Music extends Application {
    name: string;
    size: number;
    constructor(name: string, size: number) {
        super(name, size);
        this.name = name;
        this.size = size;
    }

    searchMusic()
    {
        console.log(`The song ${this.name} was found`);
        
    }

    playMusic()
    {
        console.log(`The song ${this.name} is playing`);
    }

    AddPlaybackS()
    {
        console.log(`The song ${this.name} is added to the playback `);
    }

    RemovePlaybackS()
    {
        console.log(`The song ${this.name} is removed from the playback `);
    }
}