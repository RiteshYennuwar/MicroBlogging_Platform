import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FeaturedBlogsComponent } from './featured-blogs/featured-blogs.component';
import { CategoriesComponent } from './categories/categories.component';
import { LatestBlogsComponent } from './latest-blogs/latest-blogs.component';



@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailsComponent,
    FeaturedBlogsComponent,
    CategoriesComponent,
    LatestBlogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LatestBlogsComponent
  ]
})
export class BlogsModule { }
