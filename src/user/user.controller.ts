/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    console.log('reg++++', this.register);
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.userService.create({
      name,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const user = await this.userService.findOne({ where: { email } });

    if (!user) {
      throw new BadRequestException('invalid credentials');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });
    // return jwt;
    return {
      message: 'success',
    };
  }

  @Get('user')
  // @UseGuards(AuthGuard)
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      // console.log('cookie+++', cookie);

      const data = await this.jwtService.verifyAsync(cookie);
      console.log('data+++', data);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.userService.findOne({
        where: { id: data['id'] },
      });
      console.log('user+++', user);

      const { password, ...result } = user;

      return result;
      // return { username: user.name };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'success',
    };
  }
}
