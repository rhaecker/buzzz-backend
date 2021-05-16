import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { Host } from './entities/host.entity';

@Injectable()
export class HostService {

  constructor(@InjectRepository(Host)
  private hostRepository: Repository<Host>) {}

  create(createHostDto: CreateHostDto) {
    
    return this.hostRepository.save(createHostDto);
  }

  findAll() {
    return this.hostRepository.find();
  }

  findOne(id: number) {
    return this.hostRepository.findOne(id);
  }

  update(id: number, updateHostDto: UpdateHostDto) {
    return this.hostRepository.update(id, updateHostDto);
  }

  remove(id: number) {
    return this.hostRepository.delete(id);
  }
}
