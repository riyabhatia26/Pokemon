import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { ItemComponent } from './item/item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { UsersComponent } from './users/users.component';
import { MessagesComponent } from './messages/messages.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
//import { ItemDetailComponent } from './item-detail/item-detail.component';
//import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MyserviceService } from './myservice.service';

import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { FooterComponent } from './footer/footer.component';
import { CondPipe } from './cond.pipe';
import { AuthorPipe } from './author.pipe';
import { NamePipe } from './name.pipe';
import { LoginComponent } from './login/login.component';
import { WishComponent } from './wish/wish.component';
import { MylistComponent } from './mylist/mylist.component';
import { PricePipe } from './price.pipe';
import { PriceePipe } from './pricee.pipe';
import { MessageComponent } from './message/message.component';
import { SentPipe } from './sent.pipe';
import { ReceivedPipe } from './received.pipe';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
//    redirectTo: 'listings'
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path: 'listings',
    component: ListingsComponent,
    // children:[
    //   {
    //     path: 'listings/:id',
    //     component: ItemComponent
    //   }
    // ]
  },
  {
    path: 'listings/:id',
    component: ItemComponent,
    // children: [
    //   {
    //     path: 'detail',
    //     component: ItemDetailComponent
    //   },
    //   {
    //     path: 'contact',
    //     component: ContactComponent
    //   }
    // ]
  },
  {
    path: 'add',
    component: AddlistingComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'mylist',
    component: MylistComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path:'**',
    component: ErrorComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    AddlistingComponent,
    ItemComponent,
    WishlistComponent,
    UsersComponent,
    MessagesComponent,
    LogoutComponent,
    ErrorComponent,
    // ItemDetailComponent,
    // ContactComponent,
    NavbarComponent,
    SignupComponent,
    BookComponent,
    FooterComponent,
    CondPipe,
    AuthorPipe,
    NamePipe,
    LoginComponent,
    WishComponent,
    MylistComponent,
    PricePipe,
    PriceePipe,
    MessageComponent,
    SentPipe,
    ReceivedPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
