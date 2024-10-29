export interface SignUpRequestDTO {
  email: string;
  password: string;
  forename: string;
  surname: string;
}

export interface SignUpUseCase {
  execute: (dto: SignUpRequestDTO) => Promise<void>;
}
