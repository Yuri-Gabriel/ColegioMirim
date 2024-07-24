/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Device } from './entities/device.entity';
import { updateDeviceDto } from './dto/updateDevice.dto';
import { createDeviceDto } from './dto/createDevice.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getAllDevices(): Array<Device> {
    return this.appService.getAllDevices();;
  }

  @Post('/registerDevice')
  registerDevice(@Body() device: createDeviceDto): object {
    return this.appService.registerDevice(device);
  }

  @Put('/updateDevice')
  updateDevice(@Body() device: updateDeviceDto): object {
    return this.appService.updateDevice(device);
  }

  @Delete('/deleteDevice')
  deleteDevice(@Body() id: number): object {
    return this.appService.deleteDevice(id);
  }
}
