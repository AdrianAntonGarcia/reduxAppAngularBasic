import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';
import { AppState } from 'src/app/app.reducers';
@Component({
    selector: 'app-nieto',
    templateUrl: './nieto.component.html',
    styles: [
    ]
})
export class NietoComponent implements OnInit {
    contador: number;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store.select('contador').subscribe(cont=>{
            console.log(cont);
            this.contador = cont;
        })
    }

    reset() {
        this.store.dispatch(actions.reset());
    }
}
