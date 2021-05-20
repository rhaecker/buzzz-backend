import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { HostService } from './host.service';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';

@Controller('host')
export class HostController {
  constructor(private readonly hostService: HostService) {}

  @Post()
  async create(@Body() createHostDto: CreateHostDto) {
    return await this.hostService.create(createHostDto).catch(err => {
      throw new HttpException({
        message: err.message
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    });
  }

  @Get()
  findAll() {
    return this.hostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hostService.findOne(id);
  }

  @Get('email/:email')
  checkEmail(@Param('email') email: string) {
    // true = email is taken.
    return this.hostService.checkIfEmailIsTaken(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHostDto: UpdateHostDto) {
    return this.hostService.update(id, updateHostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hostService.remove(id);
  }
}
