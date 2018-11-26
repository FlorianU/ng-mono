import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent, PicturesComponent, VideoComponent } from '@e-portfolio/components';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pictures' },
  { path: 'video', component: VideoComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    })
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
