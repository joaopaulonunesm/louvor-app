import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'repertorios',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'musicas',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'musica',
    loadChildren: () => import('./musica/criacao/musica.module').then( m => m.MusicaPageModule)
  },
  {
    path: 'repertorio',
    loadChildren: () => import('./repertorio/criacao/repertorio.module').then( m => m.RepertorioPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'consulta-musica',
    loadChildren: () => import('./musica/consulta/consulta-musica.module').then( m => m.ConsultaMusicaPageModule)
  },
  {
    path: 'consulta-repertorio',
    loadChildren: () => import('./repertorio/consulta/consulta-repertorio.module').then( m => m.ConsultaRepertorioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
