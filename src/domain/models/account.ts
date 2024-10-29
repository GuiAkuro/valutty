interface AccountProps {
  id?: string;
  name: string;
  ammount: number;
}

export class Account {
  constructor(private props: AccountProps) {
    this.props.id = crypto.randomUUID();
  }

  get name() {
    return this.props.name;
  }

  get ammount() {
    return this.props.ammount;
  }
}
