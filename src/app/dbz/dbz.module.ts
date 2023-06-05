import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPaigeComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPaigeComponent,
    ListComponent,
    AddComponent
  ],
    exports: [
      MainPaigeComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class DbzModule { }
