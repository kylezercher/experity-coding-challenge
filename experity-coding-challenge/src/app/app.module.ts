import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { EventCreatorComponent } from './event-creator/event-creator.component';
import { EventSubmitterComponent } from './event-submitter/event-submitter.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventCreatorComponent,
    EventSubmitterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
