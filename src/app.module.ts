import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusModule } from './menus/menus.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MenusModule, RestaurantsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
