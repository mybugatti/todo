import { BrowserModule } from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHeightLightDirective } from './my-height-light.directive';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import {TodoService} from "./todo.service";


const appRoutes: Routes = [
  { path: 'todo', component: TodoAppComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyHeightLightDirective,
    HomeComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[TodoService],


  /*
  providers:[
    {
      provide: LOCALE_ID,
      deps: [SettingsService],      //some service handling global settings
      useFactory: (settingsService) => settingsService.getLanguage()  //returns locale string
    }
  ],
  //providers: [provide(LOCALE_ID, {useClass:SettingsService})],
  /*
  providers: [
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (SettingsService) => SettingsService.getLanguage(),
    }
  ],*/

  bootstrap: [AppComponent]
})
export class AppModule {


}
