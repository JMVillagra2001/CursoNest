import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController],
  providers: [AppService, ProductsService, CategoriesService],
})
export class AppModule {}
