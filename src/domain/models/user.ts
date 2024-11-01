interface UserProps {
  id?: string;
  email: string;
  password: string;
  forename: string;
  surname: string;
}

export class User {
  constructor(private props: UserProps) {
    this.props.id = crypto.randomUUID();
  }

  get id() {
    return this.props.id;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }

  get forename() {
    return this.props.forename;
  }

  get surname() {
    return this.props.surname;
  }
}
