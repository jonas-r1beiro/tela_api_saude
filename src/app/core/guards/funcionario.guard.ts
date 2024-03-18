import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { UserService } from "../services/user.service"

export const funcionarioGuard = () =>{
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.estaLogado()){
    let usuario = userService.getUsuario();
    if(usuario.sub == "Funcionario"){
      return true;
    }else{
      router.navigate(['/menu-paciente']);
      return false;
    }
  }
  router.navigate(['/login']);
  return false;
}
