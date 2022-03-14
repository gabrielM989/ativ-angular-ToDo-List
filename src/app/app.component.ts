import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-26-ativ-TodoList';

  constructor( private snackBar: MatSnackBar) {}

  openSnackBar(message:any, action:any){

    this.snackBar.open(message, action);

  }

  tarefa = ''
  itens: Array <string> = [] = this.getLocal()

  getLocal():any {
    return JSON.parse(localStorage.getItem('Local Storage') || '[]')
   }
  
   setLocal(dados: any){
     localStorage.setItem('Local Storage', JSON.stringify(dados))
   }

  @ViewChild('adicionar') /* recupera um elemento HTML ou um componente, como se fosse o getElementByID */
  ipt!: ElementRef /* o ! diz a entender que a variável pode ficar vazia */

  add(tarefas:string): void{
    this.itens.push(tarefas)
    this.ipt.nativeElement.value = ' '

    this.setLocal(this.itens)
  
  }

  remover(item:string): void{
    this.itens.splice(this.itens.indexOf(item), 1)
    this.setLocal(this.itens)

  }

  removerTudo(): void{
    this.itens.splice(0, this.itens.length)
    this.setLocal(this.itens)
    
  }

}

