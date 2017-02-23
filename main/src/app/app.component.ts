import { Component } from '@angular/core';
import { AppSandbox } from './app.sandbox';

@Component({
    selector: 'app-root',
    template: `
    <h1>Consuming application</h1>
    <h2>Some Logic</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      At beatae deleniti dolor dolores ea facere, ipsum modi odit, 
      porro quasi quod reprehenderit sunt veritatis? Aperiam eum id rem ut voluptas.
    </p>
    <p>I can call stuff from tasks module through my sandbox</p>
    <button (click)="doStuff()">do stuff</button>
    <tasks></tasks>
`
})
export class AppComponent {
    constructor(private sb: AppSandbox) {
    }

    doStuff(): void {
        this.sb.doStuff();
    }
}
