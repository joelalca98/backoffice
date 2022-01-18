import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importamos la nuevas rutas
import {PhotoListComponent} from './components/photo-list/photo-list.component' 
import {PhotoFormComponent} from './components/photo-form/photo-form.component'
import {PhotoPreviewComponent} from './components/photo-preview/photo-preview.component'

//Creamos todas las rutas del localhost4200
const routes: Routes = [
{
  path: 'photos',
  component: PhotoListComponent
},

{
  path: 'photos/new',
  component: PhotoFormComponent
},
{
  path: 'photos/:id',
  component: PhotoPreviewComponent
},

//Cuando visite la ruta principal, me redirecciona a /photos (priemra ruta)
{
  path: '',
  redirectTo: '/photos',
  pathMatch: 'full'
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
