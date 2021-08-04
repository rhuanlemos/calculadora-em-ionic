import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // variavel para receber o valor da tela
  // declaracao explicita para string
  valor:string="0";

  memoria:string="0";
  operacao:string="";

  ckNumero(numero:string){
    if(this.valor.length<8){
    /*
     A variavel numero recebe o 
     valor botao que foi acionado
    */
    if (this.valor=="0") {
      this.valor=numero;
    }
    else {
      //this.valor=this.valor+numero;
      this.valor+=numero;
    }
  }
}

  ckPonto() {
    if (!this.valor.includes(".")) {
      this.valor+=".";
    }
  }

  calcular () {
    if (this.operacao == "=")  {
      this.memoria="0";
      this.operacao="";  
    } else if (this.operacao == "/") {
      /// este if não tem else
      if (this.valor != "0") {
        let aux=( parseFloat(this.memoria) / parseFloat(this.valor) );
        this.valor = aux.toString();
      }
    } else {
      // este else é do -> else if (this.operacao == "/") {
      let aux=eval(this.memoria+this.operacao+this.valor);
      this.valor = aux.toString();
    } 
  }

  ckCalculo(op) {
    if (this.operacao != "") {
      this.calcular();
    }
    this.memoria=this.valor;
    this.operacao=op;
    if (op != "=") {
      this.valor="0"; 
    } else {
      this.memoria="0";
      this.operacao="";
    }
}

  limpar() {
    this.valor="0";
    this.memoria="0";
    this.operacao="";
  }

  apagar() {
    this.valor=this.valor.substring(0,this.valor.length-1);
    if (this.valor.length==0) this.valor="0";
  }

  
  constructor() {}

}