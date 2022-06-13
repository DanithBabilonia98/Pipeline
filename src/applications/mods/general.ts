import Application from '../application';

class GeneralApplication extends Application {
    name: string;
    size: number;
    constructor(name: string, size: number) {
        super(name, size);
        this.name = name;
        this.size = size;
    }

}