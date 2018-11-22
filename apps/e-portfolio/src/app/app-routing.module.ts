import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { PicturesComponent } from './components/pictures/pictures.component';

const routes: Routes = [
  {
    path: 'video',
   component: VideoComponent
  },
  {
    path: 'pictures',
   component: PicturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
