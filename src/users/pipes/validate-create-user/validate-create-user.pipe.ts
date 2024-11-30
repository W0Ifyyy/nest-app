import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside validatecreateuserpipe');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(value.age + ' is not a number!');
      throw new HttpException(
        'Invalid Data Type for property age. Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      console.log(parseAgeToInt + ' is a number. Returning...');
      return { ...value, age: parseAgeToInt };
    }
  }
}