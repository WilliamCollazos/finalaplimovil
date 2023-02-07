export class Task {
    id?: string|null|undefined;
    title: string|null;
    status: string;

    constructor() {
        this.title = "";
        this.status = "";
    }
}