import { SwaggerOptions } from './interface/swagger-options.interface';

export const swaggerConfig: SwaggerOptions = {
  title: 'shopping online application',
  description: 'Apis application service',
  version: '1.0',
  tags: [
    'ApplicationController',
    'AuthController',
    'AccountController',
    'AccountTypeController',
    'AddressController',
    'ActiveController',
    'BasketController',
    'ColorController',
    'CapacityController',
    'ProductController',
    'ProductBrandController',
    'ProductColorController',
    'ProductImageController',
  ],
};
