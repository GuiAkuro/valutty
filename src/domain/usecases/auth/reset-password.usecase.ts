export interface ResetPasswordRequestDTO {
  code: string;
  password: string;
}

export interface ResetPasswordAccountUseCase {
  execute: (dto: ResetPasswordRequestDTO) => Promise<void>;
}
