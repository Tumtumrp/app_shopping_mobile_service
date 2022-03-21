import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CapacitiesResponseDto } from './dto/capacities-response.dto';
import { CreateCapacityDto } from './dto/create-capacity.dto';
import { CreateNewCapacityResponseDto } from './dto/create-new-capacity-response.dto';
import { DeleteCapacityResponseDto } from './dto/delete-capacity-response.dto';
import { UpdateCapacityResponseDto } from './dto/update-capacity-response.dto';
import { UpdateCapacityDto } from './dto/update-capacity.dto';
import { Capacity } from './entities/capacity.entity';

@Injectable()
export class CapacityService {
  constructor(@InjectModel(Capacity) private capacityModel: typeof Capacity) {}

  private async findAll(): Promise<Capacity[]> {
    try {
      return await this.capacityModel.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async createCapacity(capacityName: string): Promise<Capacity> {
    try {
      return await this.capacityModel.create({ capacityName });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async updateByCapacityId(
    capacityId: number,
    capacityName: string,
  ): Promise<boolean> {
    try {
      const updated = await this.capacityModel.update(
        { capacityName },
        { where: { capacity_id: capacityId } },
      );
      if (!updated) return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async deleteByCapacityId(capacityId: number): Promise<number> {
    try {
      return await this.capacityModel.destroy({
        where: { capacity_id: capacityId },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findAllCapacity(): Promise<CapacitiesResponseDto[]> {
    const capacities: Capacity[] = await this.findAll();

    return capacities.map((capacity) => {
      return new CapacitiesResponseDto({
        capacityId: capacity.capacityId,
        capacityName: capacity.capacityName,
      });
    });
  }

  public async createNewCapacity(
    request: CreateCapacityDto,
  ): Promise<CreateNewCapacityResponseDto> {
    const capacity: Capacity = await this.createCapacity(request.capacityName);
    if (!capacity) throw new InternalServerErrorException();

    return new CreateNewCapacityResponseDto({
      status: true,
      message: 'create new capacity successfully',
      capacity: request,
    });
  }

  public async updateCapacity(
    capacityId: number,
    request: UpdateCapacityDto,
  ): Promise<UpdateCapacityResponseDto> {
    const capacity: boolean = await this.updateByCapacityId(
      capacityId,
      request.capacityName,
    );
    if (!capacity) throw new InternalServerErrorException();

    return new UpdateCapacityResponseDto({
      status: capacity,
      message: `update capacity by ${capacityId} successfully`,
      capacity: capacityId,
      capacityName: request.capacityName,
    });
  }

  public async deleteCapacity(
    capacityId: number,
  ): Promise<DeleteCapacityResponseDto> {
    const deleteCapacityId: number = await this.deleteByCapacityId(capacityId);
    if (!deleteCapacityId) throw new InternalServerErrorException();

    return new DeleteCapacityResponseDto({
      status: true,
      message: `delete capacity by ${deleteCapacityId} successfully`,
      capacity: deleteCapacityId,
    });
  }
}
