import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'splitCaps'
})

export class SplitCapsPipe implements PipeTransform {

  transform(value: string) {
    if (value) {
      return value.split(/(?=[A-Z])/).join(' ')
    }
    return value
  }

}
