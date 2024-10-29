export interface SignInRequestDTO {
  email: string;
  password: string;
}

export interface SignInResponseDTO {
  accessToken: string;
}

export interface SignInUseCase {
  execute: (dto: SignInRequestDTO) => Promise<SignInResponseDTO>;
}
