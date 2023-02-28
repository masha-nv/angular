import { Component, Inject, OnInit } from '@angular/core';
import { WINDOW } from 'src/_config/config';
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
  bunny = originalBunnyPos;
  result!: boolean;

  constructor(){}

  ngOnInit(): void {
    this.initAlgo()
  }

  async initAlgo() {
    this.arr = Array(LENGTH).fill(0).map(el => ({isBunny: false, isI: false}));
    this.result = await findBunny(this.bunny, this.arr);
  }



}
