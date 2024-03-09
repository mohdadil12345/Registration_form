import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  username : string  = "";
  email : string = "";
  password : string = ""

  handle_signup() {
    // console.log(this.username, this.email, this.password)

  let user = {
    username :this.username,
    email :this.email,
    password :this.password,
  }

  if (this.username && this.email && this.password) {
    alert("Form submitted");
    console.log(user)

    let lsdata = localStorage.getItem("user_data")

    if(lsdata){
      let user_array = JSON.parse(lsdata)
      user_array.push(user)

      localStorage.setItem("user_data", JSON.stringify(user_array))
    }else{

      localStorage.setItem("user_data", JSON.stringify([user]))
    }


    this.username = ""
    this.email = ""
    this.password = ""


  } else {
    alert("Form not valid");
  }



  }

}
