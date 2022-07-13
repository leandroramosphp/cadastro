import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { CadastroService } from '../cadastro.service';

export interface CarteirinhaDoConvenio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  providers: [CadastroService],
})
export class CadastroComponent implements OnInit {
  dataCadastro: any = [];

  nome: string | undefined;

  formulario: FormGroup | undefined;

  sobrenome!: string;
  dataDeNascimento: string | undefined;
  genero: string | undefined;
  cpf: number | undefined;
  rg: number | undefined;
  UfDoRg: string | undefined;
  email: string | undefined;
  celular: number | undefined;
  telefoneFixo: number | undefined;
  convenio: number | undefined;
  carteirinhaDoConvenio: CarteirinhaDoConvenio[] = [
    { value: '1', viewValue: 'Amil' },
    { value: '2', viewValue: 'Unimed' },
    { value: '3', viewValue: 'Bradesco' },
  ];
  validadeDaCarteirinha: string | undefined;
  value: any | [];
  currentInput: any;
  formBuilder: any;

  constructor(private cadastroService: CadastroService) {}

  ngOnInit(): void {
    this.cadastroService.obterTodos().subscribe((lista: any) => {
      this.dataCadastro.push(lista);
    });
  }

  onSubmitTemplateBased(value: any): string {
    const cadastro = {
      name: this.nome,
      sobrenome: this.sobrenome,
      dataDeNascimento: this.dataDeNascimento,
      genero: this.genero,
      cpf: this.cpf,
      rg: this.rg,
      UfDoRg: this.UfDoRg,
      email: this.email,
      celular: 11986778106,
      telefoneFixo: 11986778106,
      convenio: 'Amil',
      carteirinhaDoConvenio: 23435454324,
      validadeDaCarteirinha: '20240509',
    };

    this.cadastroService.inserirCadastro(cadastro).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
      window.location.reload();
    });
    console.log('salvou');
    this.cadastroService.obterTodos().subscribe((lista: any) => {
      this.dataCadastro.push(lista);
    });
    return 'aqui';
  }

  isValidCPF(cpf: string) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

  botaoSalvar(event: any): string {
    return 'aquiu!!!!!!!';
  }
}
