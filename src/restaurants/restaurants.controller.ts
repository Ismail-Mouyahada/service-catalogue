import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Controller()
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @MessagePattern('createRestaurant')
  create(@Payload() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @MessagePattern('findAllRestaurants')
  findAll() {
    return this.restaurantsService.findAll();
  }

  @MessagePattern('findOneRestaurant')
  findOne(@Payload() id: number) {
    return this.restaurantsService.findOne(id);
  }

  @MessagePattern('updateRestaurant')
  update(@Payload() updateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantsService.update(updateRestaurantDto.id, updateRestaurantDto);
  }

  @MessagePattern('removeRestaurant')
  remove(@Payload() id: number) {
    return this.restaurantsService.remove(id);
  }
}
