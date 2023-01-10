import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [],
})
export class DataBindingComponent {
  titulo: string = 'Data Binding Interpolation';
  showContentDataBinding: boolean = true;
  textTwoWayBinding: string =
    'El two-way data binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nosotros modificamos el valor de una propiedad en la vista el valor también se actualiza en el modelo de datos.';

  toggleContentDataBinding() {
    this.showContentDataBinding = !this.showContentDataBinding;
  }
}
