import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("DashBoard")
    }
    
    async getHtml() {
        return `
        <h1> DashBoard </h1>
        <p> 2021.08.11 I'm coding at starbucks ... ☕️ </p>
        <p>
            <a href="/posts" data-link> let's view recent posts </a>
        </p>
        `;
    }
}