import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './components/detail-article/detail-article.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BouttonActionComponent } from './components/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtStockComponent } from './pages/page-mvt-stock/page-mvt-stock.component';
import { DetailMvtstockArticleComponent } from './components/detail-mvt-stock-article/detail-mvtstock-article.component';
import { DetailMvtStockComponent } from './components/detail-mvt-stock/detail-mvt-stock.component';
import { DetailCltFrsComponent } from './components/detail-clt-frs/detail-clt-frs.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fourniseur/page-fournisseur/page-fournisseur.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './components/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { DetailCmdComponent } from './components/detail-cmd/detail-cmd.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    PageMvtStockComponent,
    DetailMvtstockArticleComponent,
    DetailMvtStockComponent,
    DetailCltFrsComponent,
    PageClientComponent,
    PageFournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    DetailCmdComponent,
    PageCmdCltFrsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
