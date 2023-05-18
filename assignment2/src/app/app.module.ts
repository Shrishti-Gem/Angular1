
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { UsersRoutingModule } from './users-routing/users-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { RouterModule ,RouterOutlet} from '@angular/router';


@NgModule({
  declarations: [AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports:[RouterModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }