import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { UserService } from "../services/user.service"

export const pacienteGuard = () =>{
  const userService = inject(UserService);
  const router = inject(Router);

  if(userService.estaLogado()){
    let usuario = userService.getUsuario();
    if(usuario.idPapel == 2){
      return true;
    }else{
      router.navigate(['/home']);
      return false;
    }
  }
  router.navigate(['/login']);
  return false;
}
