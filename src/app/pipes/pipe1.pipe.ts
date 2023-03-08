import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gerarUsuario'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('-- value --')
    const resp = value.split('@')
    console.log(resp)
    return resp[0];
  }

}
