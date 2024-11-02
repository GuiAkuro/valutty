interface AccountProps {
  id?: string;
  name: string;
  amount: number;
  owner: string;
}

export class Account {
  constructor(private props: AccountProps) {
    this.props.id = crypto.randomUUID();
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get amount() {
    return this.props.amount;
  }

  get owner() {
    return this.props.owner;
  }
}
