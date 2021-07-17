import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  DEFAULT_LIMIT = 30;

  transform(value: String, limit?: number) {
    if (!value)
      return null;

    let actualLimit = (limit) ? limit : this.DEFAULT_LIMIT;
    return value.substr(0, actualLimit) + "...";
  }

}
