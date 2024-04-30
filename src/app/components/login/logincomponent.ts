import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class loginComponent 
{

  public loginForm !: FormGroup

  constructor(private formBuilder: FormBuilder,private http:HttpClient, private router: Router){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
 login()
 {
     this.http.get<any>('http://localhost:3000/employeeData')
     .subscribe(response=>{
     const theUser = response.find((details:any)=>
      details.email === this.loginForm.value.email && details.password === this.loginForm.value.password);
  
    const  theAdmin =response.find((details:any)=>
     details.email === this.loginForm.value.email && details.password === this.loginForm.value.password);
  
    if (theUser.email === "david@gmail.com" && theUser.password === "1236"){
        this.loginForm.reset()
        this.router.navigate(["/dashboard"])
      
      }else if(theUser){
         this.loginForm.reset()
         this.router.navigate(["/emp-dashboard"])
      }else{
        alert("User not found")
      }
    
      },err=>{
       alert("Something went wrong");
    })
 }
}
