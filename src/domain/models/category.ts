interface CategoryProps {
  id: string;
  name: number;
}

export class Category {
  constructor(private props: CategoryProps) {
    this.props.id = crypto.randomUUID();
  }

  get name() {
    return this.props.name;
  }
}
