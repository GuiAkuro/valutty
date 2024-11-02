import { HttpError } from "@/application/errors/http-error";
import { StatusCode } from "@/application/errors/status-code";
import { HashService } from "@/application/services/hash.service";
import { JwtService } from "@/application/services/jwt.service";
import {
  SignInRequestDTO,
  SignInResponseDTO,
  SignInUseCase,
} from "@/domain/usecases/auth/sign-in.usecase";
import { UsersRepository } from "@/infrastrucutre/repositories/users.repository";

export class SignIn implements SignInUseCase {
  constructor(
    private hashService: HashService,
    private jwtService: JwtService,
    private usersRepository: UsersRepository
  ) {}

  public async execute(dto: SignInRequestDTO): Promise<SignInResponseDTO> {
    const user = await this.usersRepository.findByEmail(dto.email);

    if (!user) {
      throw new HttpError(StatusCode.UNAUTHORIZED, "you are not authorized.");
    }

    const isValidPassword = await this.hashService.compare(
      dto.password,
      user.password
    );

    if (!isValidPassword) {
      throw new HttpError(StatusCode.UNAUTHORIZED, "you are not authorized.");
    }

    console.log("id do usuario se autenticando", user.id);

    const accessToken = this.jwtService.sign({
      id: user.id,
      email: user.email,
      forename: user.forename,
      surname: user.surname,
    });

    return {
      accessToken: accessToken,
    };
  }
}
