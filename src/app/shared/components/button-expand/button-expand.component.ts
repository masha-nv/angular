import { Component, QueryList, ViewChildren } from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-button-expand',
  templateUrl: './button-expand.component.html',
  styleUrls: ['./button-expand.component.scss']
})
export class ButtonExpandComponent {
  @ViewChildren(MatExpansionPanel) expansionPanels!: QueryList<MatExpansionPanel>
  @ViewChildren(MatButtonToggle) matButtonToggle!: QueryList<MatButtonToggle>

  constructor() {}

  onButtonClick(evt: MatButtonToggleChange) {
    const {tabIndex} = evt.source
    this.expansionPanels.forEach((panel: MatExpansionPanel, idx: number) => {
      if (idx === tabIndex) {
        panel.expanded ?  panel.close() : panel.open()
      }
    })
  }
}
