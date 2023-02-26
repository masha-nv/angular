import { Component, OnInit } from '@angular/core';
import { findBunny } from './algorithm';
import { ICell } from './cell/cell.component';

const LENGTH = 10
const originalBunnyPos = Math.floor(Math.random()*LENGTH);
@Component({
  selector: 'app-find-bunny',
  templateUrl: './find-bunny.component.html',
  styleUrls: ['./find-bunny.component.scss']
})
export class FindBunnyComponent implements OnInit{
  arr: ICell[] = Array(LENGTH).fill(0).map(el => ({isBunny: false, isI: false}))
  bunny = originalBunnyPos
  ngOnInit(): void {
    this.initAlgo()
  }

  async initAlgo() {
    await findBunny(this.bunny, this.arr);
  }

}
