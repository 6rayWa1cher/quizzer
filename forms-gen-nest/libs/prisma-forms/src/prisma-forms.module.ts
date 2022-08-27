import { Module } from '@nestjs/common';
import { PrismaFormsService } from './prisma-forms.service';

@Module( {
  providers: [PrismaFormsService],
  exports: [PrismaFormsService],
} )
export class PrismaFormsModule { }
