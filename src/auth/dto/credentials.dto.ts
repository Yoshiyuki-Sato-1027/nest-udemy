import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

// dto オブジェクトを別ファイルに分けて依存を解消
// di dtoを読み込む

export class CredentialsDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
