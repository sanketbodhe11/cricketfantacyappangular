import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/frontpage/login-page/login-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { FrontpageComponent } from './pages/frontpage/frontpage.component';
import { ContestComponent } from './pages/contest/contest.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'register-page', component: RegisterPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'team-page', component: TeamPageComponent },
  { path: 'contest-page', component: ContestComponent },
  { path: 'leaderboard-page', component: LeaderboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
