import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { arrElement } from "../algorithm";

@Component({
    selector: 'array-element',
    templateUrl: './array-element.component.html',
    styleUrls: ['./array-element.component.scss']
})

export class ArrayElementComponent implements arrElement {
    @Input()
    val!: number;

    @Input()
    isActive: boolean = false;

    @Input()
    isPrevious: boolean = false;

    constructor() {}


    getActiveClass() {
        return {'active': this.isActive, 'previous': this.isPrevious}
    }
}