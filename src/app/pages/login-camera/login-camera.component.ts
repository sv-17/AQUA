import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'login-camera',
  templateUrl: 'login-camera.component.html',
  styleUrls: ['login-camera.component.css'],
})
export class LoginCamera {
  rawhm5x: string = ' '
  rawgv44: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
