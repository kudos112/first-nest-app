import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('first-nest-app')
export class FirstNestAppController {
  @Get()
  findAll() {
    return 'This is my first nest app';
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return `First nest app with Id #${id}`;
  }

  @Post()
  firstPost(@Body() body: object): object {
    return {
      ...body,
      note: "this is your first time! I'm forgiving you",
      about: "I'm a new bud don't send too much data",
    };
  }

  @Post('/with')
  postWithSelectedBody(@Body('name') body): object {
    return {
      body,
      note: "this is your first time! I'm forgiving you",
      about: "I'm a new bud don't send too much data",
    };
  }

  @HttpCode(HttpStatus.CONFLICT)
  @Post('/custom-status-code')
  postWithCustomStatusCode(@Body() body): object {
    return {
      ...body,
    };
  }

  @Post('/express-response')
  postWithExpressResponse(@Res() response) {
    return response.status(401).send('not authorized for this');
  }

  @Patch(':id')
  update(@Param('id') id: String, @Body() body, @Res() response) {
    return response.status(401).send({ id, body });
  }

  @Delete(':id')
  delete(@Param('id') id: String, @Res() response) {
    return response.status(401).send({ success: `${id} deleted successfully` });
  }
}
