import { HashService } from "@/application/services/hash.service";
import { User } from "@/domain/models/user";
import {
  SignUpRequestDTO,
  SignUpUseCase,
} from "@/domain/usecases/auth/sign-up.usecase";
import { UsersRepository } from "@/infrastrucutre/repositories/users.repository";

export class SignUp implements SignUpUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private hashService: HashService
  ) {}

  public async execute(dto: SignUpRequestDTO): Promise<void> {
    const alreadyExists = await this.usersRepository.findByEmail(dto.email);

    if (alreadyExists) {
      throw Error("user already exists");
    }

    const hashedPassword = await this.hashService.hash(dto.password);

    const newUser = new User({
      email: dto.email,
      password: hashedPassword,
      forename: dto.forename,
      surname: dto.surname,
    });

    this.usersRepository.create(newUser);
  }
}
