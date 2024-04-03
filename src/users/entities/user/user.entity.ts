import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export enum Title {
  Mr = 'Mr.',
  Mrs = 'Mrs.',
  LGBTQ = 'LGBTQ',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ type: 'enum', enum: Title })
  @IsEnum(Title)
  title: string;
  
  @Column({ length: 150 })
  @Unique(['email'])
  @IsEmail()
  @MaxLength(150)
  email: string;

  @Column({ length: 60 })
  @IsString()
  @MaxLength(60)
  @IsNotEmpty()
  fullName: string;

  @Column()
  // @MinLength(8)
  @MaxLength(16)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column('text')
  @IsString()
  @IsOptional()
  address: string;

  @Column({ length: 6 })
  @IsString()
  @MaxLength(6)
  @IsNotEmpty()
  pincode: string;

  @Column({ length: 10 })
  @IsString()
  @Unique(['mobile'])
  @MaxLength(10)
  @IsNotEmpty()
  mobile: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
  
  
  
}
