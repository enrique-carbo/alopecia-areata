import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ClinimetricsComponent } from './pages/clinimetrics/clinimetrics.component';
import { DescriptionComponent } from './pages/description/description.component';
import { DlqiComponent } from './pages/dlqi/dlqi.component';
import { HomeComponent } from './pages/home/home.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { SaltComponent } from './pages/salt/salt.component';

const routes: Routes = [
  { path: 'clinimetrics', component: ClinimetricsComponent, title: 'AA - Clinimetrics' },
  { path: 'description', component: DescriptionComponent, title: 'AA - Description'},
  { path: 'recommendations', component: RecommendationsComponent, title: 'AA - Recommendations'},
  { path: '', component: HomeComponent, title: 'Alopecia - Home'},
  { path: 'salt', component: SaltComponent, title: 'AA - SALT'},
  { path: 'dlqi', component: DlqiComponent, title: 'Alopecia - DLQI'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
