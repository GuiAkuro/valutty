interface AccountProps {
  id: string;
  ammount: number;
}

export class Account {
  constructor(private props: AccountProps) {
    this.props.id = crypto.randomUUID();
  }

  get ammount() {
    return this.props.ammount;
  }
}
