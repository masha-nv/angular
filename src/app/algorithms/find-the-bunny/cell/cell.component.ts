import { Component, Input, OnInit } from '@angular/core'

export interface ICell {
  isBunny: boolean,
  isI: boolean
}

@Component({
  selector: 'app-cell',
  styleUrls: ['./cell.component.scss'],
  templateUrl: './cell.component.html'
})

export class CellComponent implements OnInit, ICell {
  @Input('isI') isI!: boolean
  @Input('isBunny') isBunny!: boolean

  ngOnInit(): void {

  }
}
