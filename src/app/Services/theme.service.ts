import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  renderer: Renderer2;
  actualTheme: boolean;
  themes = [ 
    "th1-light", "th1-dark",
    "th2-light", "th2-dark",
    "light-theme", "dark-theme",
  ];

  temas = [
    { nombre: 'tema 1',
      light: ["th1-light", ""],
      dark: ["th1-dark", ""]
    },
    { nombre: 'tema 2',
      colores: ["th2-light","th2-dark"]
    },
    { nombre: 'basico',
      colores: ["light-theme","dark-theme"]
    },
  ]

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  getTemas():any{
    return this.temas;
  }

  enableth1_Dark(){
    this.deleteClass();
    this.renderer.addClass(this.document.body, 'th1-dark');
  }

  enableth1_Light(){
    this.deleteClass();
    this.renderer.addClass(this.document.body, 'th1-light');
  }

  enableth2_Dark(){
    this.deleteClass();
    this.renderer.addClass(this.document.body, 'th2-dark');
  }

  enableth2_Light(){
    this.deleteClass();
    this.renderer.addClass(this.document.body, 'th2-light');
  }

  deleteClass(){
    for(let i:number=0; i<this.themes.length; i++){
      this.renderer.removeClass(this.document.body, this.themes[i]);
    }
  }

  isLight():boolean{
    let boody:any = document.getElementById("boody");
    if(boody.classList.contains("th1-light")) return true;
    if(boody.classList.contains("th1-dark")) return false;
    if(boody.classList.contains("th2-light")) return false; //<-
    if(boody.classList.contains("th2-dark")) return false;

    return true;
  }
}
