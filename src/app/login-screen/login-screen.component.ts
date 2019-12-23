import { Component } from "@angular/core";
import { LoginService } from "../shared/login.service";

@Component({
  selector: "app-login-screen",
  templateUrl: "./login-screen.component.html",
  styleUrls: ["./login-screen.component.css"]
})
export class LoginScreenComponent {
  constructor(private LoginService: LoginService) {}

  /*////////////////////////////////////////////////////////////////////////
/////// ТЗ:
///////  1. Нужно стилизовать компонент (стили приписывать в login-screen-component.css)
///////  2. Нужно сделать провеврку на то что длинна имени, введенного в поле будет больше 3 (код писать тут, в помеченном месте)
  ////////////////////////////////////////////////////////////////////////*/

  onLogin(name: string): void {
    // ТУТ ДЕЛАТЬ ПРОВЕРКИ (на вход поступает строка, которую польщтватель вводит в поле ввода)
    if(name.length < 4 || name.length > 20)
       alert('В логине должен быть от 4 до 20 символов!'); 
    else if(parseInt(name.substr(0, 1)))
      alert('Логин должен начинаться с буквы!');
    else this.LoginService._login(name);
   
  }
}
