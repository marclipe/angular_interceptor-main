import { Animais } from './../animais';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais!: Animais;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: Animais
  ) {}

  ngOnInit(): void {
    this.usuarioService.retornaUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? ''; 
      this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
        this.animais = animais; 
      });
    });
  }
}
