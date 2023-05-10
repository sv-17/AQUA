import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LoginCamera } from './login-camera.component'

const routes = [
  {
    path: '',
    component: LoginCamera,
  },
]

@NgModule({
  declarations: [LoginCamera],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LoginCamera],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginCameraModule {}
