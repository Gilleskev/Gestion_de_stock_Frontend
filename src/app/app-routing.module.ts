import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtStockComponent } from './pages/page-mvt-stock/page-mvt-stock.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fourniseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';


export const routes: Routes = [] = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscription',
    component:  PageInscriptionComponent
  },
   {
    path:  '',
    component: PageDashboardComponent,
    children:[
      {
        path:'statistiques',
        component: PageStatistiquesComponent,
      },
      {
        path: 'articles',
        component: PageArticleComponent,
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,
      },
      {
        path: 'mvtstock',
        component: PageMvtStockComponent,
      },
      {
        path: 'clients',
        component: PageClientComponent,
      },
      {
        path: 'nouveauclient',
        component: NouveauCltFrsComponent,
      },
      {
        path: 'commandesclient',
        component: PageCmdCltFrsComponent
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path: 'nouveaufournisseur',
        component: NouveauCltFrsComponent
      },
      {
        path: 'commandesfournisseur',
        component: PageCmdCltFrsComponent
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
