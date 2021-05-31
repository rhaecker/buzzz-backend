import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository} from 'typeorm';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { Host } from './entities/host.entity';

@Injectable()
export class HostService {

  constructor(@InjectRepository(Host)
  private hostRepository: MongoRepository<Host>) {}

  create(createHostDto: CreateHostDto) {
      return this.hostRepository.save(createHostDto);
  }

  findAll() {
    return this.hostRepository.find();
  }

  findOne(id: string) {
    return this.hostRepository.findOne(id);
  }

  update(id: string, updateHostDto: UpdateHostDto) {
    return this.hostRepository.update(id, updateHostDto);
  }

  remove(id: string) {
    return this.hostRepository.delete(id);
  }

  async checkIfEmailIsTaken(p_email: string): Promise<boolean>{
    const hostsWithEmail = await this.hostRepository.find({
      where: {
        email: {$eq: p_email}
      }
    })
    return hostsWithEmail.length > 0;
  }
}
