import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GetUserService {
  execute() {
    return {
      name: 'Vitor Ribeiro',
      email: 'vitor3g@gmail.com',
      avatarURL: 'https://github.com/vitor3g.png',
    }
  }
}
