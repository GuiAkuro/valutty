export interface RequestPasswordResetResponseDTO {
  code: string;
}

export interface RequestPasswordResetAccountUseCase {
  execute: (email: string) => Promise<RequestPasswordResetResponseDTO>;
}
