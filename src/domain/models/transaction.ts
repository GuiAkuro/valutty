interface TransactionProps {
  id?: string;
  value: number;
  description: string;
  date: Date;
  type: "CREDIT" | "DEBT";
  account: string;
  category: string;
}

export class Transaction {
  constructor(private props: TransactionProps) {
    if (props.id) {
      this.props.id = props.id;
    } else {
      this.props.id = crypto.randomUUID();
    }
  }

  get id() {
    return this.props.id;
  }

  get value() {
    return this.props.value;
  }

  get description() {
    return this.props.description;
  }

  get date() {
    return this.props.date;
  }

  get type() {
    return this.props.type;
  }

  get account() {
    return this.props.account;
  }

  get category() {
    return this.props.category;
  }
}
