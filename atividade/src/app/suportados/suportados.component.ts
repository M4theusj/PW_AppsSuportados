import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suportados',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './suportados.component.html',
  styleUrls: ['./suportados.component.css']
})
export class SuportadosComponent {
  formularioCreate: FormGroup;
  formularioActions: FormGroup;

  apps: { id: number; nome: string; descricao: string }[] = [];
  nextId = 1;

  popupVisible = false;
  popupData: { nome: string; descricao: string; id: number } | null = null;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formularioCreate = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(1)]],
      descricao: ['', [Validators.required, Validators.minLength(1)]]
    });

    this.formularioActions = this.fb.group({
      id: [null, [Validators.required, Validators.min(1)]]
    });
  }

  sair() {
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/home']);
  }

  create() {
    if (this.formularioCreate.valid) {
      const novoApp = {
        id: this.nextId++,
        nome: this.formularioCreate.value.nome,
        descricao: this.formularioCreate.value.descricao
      };
      this.apps.push(novoApp);
      this.formularioCreate.reset();
    }
  }

  read() {
    if (this.formularioActions.valid) {
      const id = this.formularioActions.value.id;
      const app = this.apps.find(a => a.id === id);
      if (app) {
        this.popupData = app;
        this.popupVisible = true;
      }
    }
  }

  delete() {
    if (this.formularioActions.valid) {
      const id = this.formularioActions.value.id;
      this.apps = this.apps.filter(app => app.id !== id);
      this.formularioActions.reset();
    }
  }

  closePopup() {
    this.popupVisible = false;
    this.popupData = null;
  }
}
