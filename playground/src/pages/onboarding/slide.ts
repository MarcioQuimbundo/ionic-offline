export class Slide {
    public img: string;
    public title: string;
    public msg: string;
    constructor(
        img: string,
        title: string,
        msg: string
    ) {
        this.img = img;
        this.title = title;
        this.msg = msg;
    }
}
