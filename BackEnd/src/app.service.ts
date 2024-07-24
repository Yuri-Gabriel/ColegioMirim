/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { Device } from './entities/device.entity';
import { createDeviceDto } from './dto/createDevice.dto';
import { updateDeviceDto } from './dto/updateDevice.dto';

@Injectable()
export class AppService {
  getAllDevices(): Array<Device> {
    return [
      {
        id: 1,
        nome: 'Teste',
        dispositivo: 1,
        turma: 1,
        status: 1,
        defeito: 'TesteDefeito',
        data: new Date().toLocaleDateString(),
      },
    ];
  }
  registerDevice(device: createDeviceDto): object {
    return {
      device: device,
      message: 'Device registered',
      status: 201,
    };
  }
  updateDevice(device: updateDeviceDto): object {
    return {
      device: device,
      message: 'Device updated',
      status: 202,
    };
  }
  deleteDevice(id: number): object {
    return {
      id: id,
      message: "Device deleted",
      status: 202
    };
  }
}
