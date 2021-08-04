import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  valor: string = "0";

  memoria: string = "0";
  operacao: string = "";

  ckNumero(numero: string) {
    if (this.valor.length < 8) {

      if (this.valor == "0") {
        this.valor = numero;
      }
      else {
        this.valor += numero;
      }
    }
  }

  ckPonto() {
    if (!this.valor.includes(".")) {
      this.valor += ".";
    }
  }

  calcular() {
    if (this.operacao == "=") {
      this.memoria = "0";
      this.operacao = "";
    } else if (this.operacao == "/") {
      if (this.valor != "0") {
        let aux = (parseFloat(this.memoria) / parseFloat(this.valor));
        this.valor = aux.toString();
      }
    } else {
      let aux = eval(this.memoria + this.operacao + this.valor);
      this.valor = aux.toString();
    }
  }

  ckCalculo(op) {
    if (this.operacao != "") {
      this.calcular();
    }
    this.memoria = this.valor;
    this.operacao = op;
    if (op != "=") {
      this.valor = "0";
    } else {
      this.memoria = "0";
      this.operacao = "";
    }
  }

  limpar() {
    this.valor = "0";
    this.memoria = "0";
    this.operacao = "";
  }

  apagar() {
    this.valor = this.valor.substring(0, this.valor.length - 1);
    if (this.valor.length == 0) this.valor = "0";
  }


  constructor() { }

}