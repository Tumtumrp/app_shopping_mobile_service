import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ColorResponseDto } from './dto/color-response.dto';
import { CreateColorDto } from './dto/create-color.dto';
import { CreateNewColorResponseDto } from './dto/create-new-color-response.dto';
import { DeleteColorResponseDto } from './dto/delete-color-response.dto';
import { UpdateColorResponseDto } from './dto/update-color-response.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { Color } from './entities/color.entity';

@Injectable()
export class ColorService {
  constructor(@InjectModel(Color) private colorModel: typeof Color) {}

  private async findAll(): Promise<Color[]> {
    try {
      return await this.colorModel.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async createColor(request: CreateColorDto): Promise<Color> {
    try {
      return await this.colorModel.create({
        colorName: request.colorName,
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async updateByColorId(
    colorId: number,
    colorName: string,
  ): Promise<boolean> {
    try {
      const updated = await this.colorModel.update(
        { colorName },
        { where: { color_id: colorId } },
      );
      if (!updated) return false;

      return true;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async deleteByColorId(colorId: number): Promise<number> {
    try {
      return await this.colorModel.destroy({ where: { color_id: colorId } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async findAllColor(): Promise<ColorResponseDto[]> {
    try {
      const colors: Color[] = await this.findAll();

      return colors.map((color) => {
        return new ColorResponseDto({
          colorId: color.colorId,
          colorName: color.colorName,
        });
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async createNewColor(
    request: CreateColorDto,
  ): Promise<CreateNewColorResponseDto> {
    const color: Color = await this.createColor(request);
    if (!color) throw new InternalServerErrorException();

    return new CreateNewColorResponseDto({
      status: true,
      message: 'create new color successfully',
      color: request,
    });
  }

  public async updateColor(
    colorId: number,
    request: UpdateColorDto,
  ): Promise<UpdateColorResponseDto> {
    const color: boolean = await this.updateByColorId(
      colorId,
      request.colorName,
    );
    if (!color) throw new InternalServerErrorException();

    return new UpdateColorResponseDto({
      status: true,
      message: `updated color by ${colorId} successfully`,
      color: colorId,
      colorName: request.colorName,
    });
  }

  public async deleteColor(colorId: number): Promise<DeleteColorResponseDto> {
    const deleteColorId: number = await this.deleteByColorId(colorId);
    if (!deleteColorId) throw new InternalServerErrorException();

    return new DeleteColorResponseDto({
      status: true,
      message: `delete color by ${colorId} successfully`,
      color: deleteColorId,
    });
  }
}
