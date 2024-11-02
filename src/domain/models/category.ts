interface CategoryProps {
  id?: string;
  name: string;
  account: string;
}

export class Category {
  constructor(private props: CategoryProps) {
    if (props.id) {
      this.props.id = props.id;
    } else {
      this.props.id = crypto.randomUUID();
    }
  }

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get account() {
    return this.props.account;
  }
}
