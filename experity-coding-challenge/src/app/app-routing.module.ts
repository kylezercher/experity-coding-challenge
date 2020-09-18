import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { EventSubmitterComponent } from './event-submitter/event-submitter.component';
import { EventCreatorComponent } from './event-creator/event-creator.component';

const routes: Routes = [
  { path: "", component: EventSubmitterComponent },
  { path: "event-submit", component: EventSubmitterComponent },
  { path: "event-creator", component: EventCreatorComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
