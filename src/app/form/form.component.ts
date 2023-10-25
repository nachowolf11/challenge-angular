import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

form = {
  name:'',
  email:'',
  cellphone:''
}

isModalOpen = signal(false);

onSubmit(){
  this.isModalOpen.set(true);
}

onCloseModal(){
  this.isModalOpen.set(false);
}
}
