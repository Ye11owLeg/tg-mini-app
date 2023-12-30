import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { Component } from '@angular/core';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', component: ShopComponent, pathMatch: 'full'},
  {path: 'feedback', component: FeedbackComponent },
   {path: 'product/:id', component: ProductComponent},
];
