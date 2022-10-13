import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modallogin',
  templateUrl: './modallogin.component.html',
  styleUrls: ['./modallogin.component.css']
})
export class ModalloginComponent implements OnInit {

 form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

   this.form= this.formBuilder.group({

    password:['', [Validators.required, Validators.minLength(8 ), Validators.maxLength(12 )]],
    email:['', [Validators.required, Validators.email]],

   })

    }

  ngOnInit(): void {}

   get Password(){
     return this.form.get("password");
   }

  get Mail(){
    return this.form.get("email");
  }
   get PasswordValid(){
     return this.Password?.touched && !this.Password?.valid;
   }

   get MailInvalid() {
     return this.Mail?.touched && !this.Mail?.valid; 
   }

   onLogin (event: Event){
     event.preventDefault;

    //  if (this.form.valid){
    //    alert("todo salio bien ¡Enviar formulario!") 
    // }else{
    //    this.form.markAllAsTouched();
    //    alert("todo salio mal no ¡Enviar formulario!")
    // }
   }

}
   