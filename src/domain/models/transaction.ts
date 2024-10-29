interface TransactionProps {
  id?: string;
  value: number;
  date: Date;
  type: "CREDIT" | "DEBT";
}

export class Transaction {
  constructor(private props: TransactionProps) {
    this.props.id = crypto.randomUUID();
  }

  get value() {
    return this.props.value;
  }

  get date() {
    return this.props.date;
  }

  get type() {
    return this.props.type;
  }
}
