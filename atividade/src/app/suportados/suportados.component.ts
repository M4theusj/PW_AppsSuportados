import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suportados',
  imports: [],
  templateUrl: './suportados.component.html',
  styleUrl: './suportados.component.css'
})
export class SuportadosComponent {
  constructor(private router:Router) {

  }

  sair(){
    this.router.navigate(['/login'])
  }
  home(){
    this.router.navigate(['/home'])
  }

  
}
