import Application from "./applications/application";

export class Smartphone {
    readonly model: string;
    readonly os: string;
    appsInstalled: Map<string, Application>;
    appsOpened: Map<string, Application>;
    private status: boolean;
    constructor(
        model: string,
        os: string,
        status: boolean,
        appsInstalled: Map<string, Application>,
        appsOpened: Map<string, Application>) {
        this.model = model;
        this.os = os;
        this.status = status;
        this.appsInstalled = new Map<string, Application>();
        this.appsOpened = new Map<string, Application>();
    }

    onSmartphone(): void {
        if (!this.status) {
            this.status = true;
        } else {
            throw new Error("The smartphone is already on");
        }
    }

    ofSmartphone(): void {
        if (this.status) {
            this.status = false;
        } else {
            throw new Error("The smartPhone is already off");
        }
    }

    installApp(app: Application) {
        if (!this.status)
        {
        if (this.appsInstalled.has(app.name))
            console.log(`The application ${app.name} is already installed`);
        else {
            this.appsInstalled.set(app.name, app);
            console.log(`The application ${app.name} was installed`);
        }
    }
    else 
    {
        throw new Error("Turn on your smartphone")
    }
    }

    openApp(app: Application) {
        if (!this.status) {
            if (this.appsInstalled.has(app.name)) {
                this.appsOpened.set(app.name, app);
                console.log(`The application ${app.name} was opened`);
            }
            else
                console.log(`The application ${app.name} is not installed`);
        }
        else 
        {

            throw new Error("The smartphone is off, turn on please!")
            }


    }

    closeApp(app: Application) {
        if (this.appsOpened.has(app.name)) {
            this.appsOpened.delete(app.name);
            console.log(`The application ${app.name} was closed`);
        }
        else
            console.log(`The application ${app.name} is not opened`);

    }

    uninstallApp(app: Application) {
        if (this.appsInstalled.has(app.name)) {
            this.appsInstalled.delete(app.name);
            console.log(`The application ${app.name} was uninstalled`);
        }
        else
            console.log(`The application ${app.name} is not installed`);

    }
}


