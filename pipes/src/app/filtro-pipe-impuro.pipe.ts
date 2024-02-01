import { Pipe, PipeTransform } from '@angular/core';

import { FiltroArrayPipe } from './filtro-array.pipe';

@Pipe({
  name: 'filtroPipeImpuro',
  pure: false
})
export class FiltroPipeImpuroPipe extends FiltroArrayPipe {

}
