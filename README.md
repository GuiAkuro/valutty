<h1 align="center">Welcome to Valutty 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/license/mit" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> A web app that allows users to track their income and expenses. Users can add, categorize, edit, and delete transactions, view a summary of their finances, and set monthly budgets for different categories like &#34;Food,&#34; &#34;Entertainment,&#34; and &#34;Bills.&#34;

## Install

```sh
npm install
docker compose up -d
```

## Usage

```sh
npm run dev
```

## Run tests

```sh
npm run test
```

## Documentation

http://locahost:{PORT}/documentation

## Project Architecture

### 1. Domain Layer (Business Rules)

- **Contents**: Contains entities, value objects, and business rules that represent the core business logic. These are pure classes and functions that describe "what" the business does, independent of "how" it’s done or "who" uses it.
- **Responsibilities**: Enforces and encapsulates the business rules, ensuring that the essential business logic remains consistent. This layer defines "what" happens in the business, independent of application use cases or infrastructure.
- **Dependencies**: Completely independent of other layers. The Domain layer has no dependencies on Application, Infrastructure, or Presentation.

### 2. Application Layer (Use Cases)

- **Contents**: Contains services, use case classes, and application-specific logic. These elements define the steps necessary to execute a use case or workflow, such as "Create User" or "Process Payment."
- **Responsibilities**: Orchestrates and executes use cases, coordinating actions across entities and resources. This layer controls how the business rules (from the Domain layer) interact to achieve specific application goals.
- **Dependencies**: Depends on the Domain layer for business logic. It should only have interface contracts (e.g., repositories) for any external dependencies (like data storage or APIs), keeping the layer independent of the Infrastructure layer.

### 3. Infrastructure Layer (Technical Implementation)

- **Contents**: Implements the actual infrastructure components, like database repositories, data mappers, external API clients, and other resources needed by the Application layer.
- **Responsibilities**: Provides concrete implementations of the interfaces required by the Application layer. For example, if the Application layer needs to retrieve a list of users, the Infrastructure layer would provide a repository that fetches data from a database.
- **Dependencies**: Implements interfaces or adapters defined in the Application layer, following dependency inversion. This layer can depend on Application interfaces but should avoid referencing specific Application or Domain logic.

### 4. Presentation Layer (Web API / REST Interface)

- **Contents**: Controllers, routing, serializers, and response handlers that create a RESTful API for the application. Each route or controller method represents an endpoint (e.g., POST /accounts or GET /transaction/{id}).
- **Responsibilities**: Exposes the Application layer’s use cases to external clients via HTTP. The API receives HTTP requests, translates them into application use cases, and returns HTTP responses with the appropriate status codes and data.
- **Dependencies**: Depends on the Application layer, as it calls application use cases and receives data structures or response objects for clients. It follows dependency inversion, ensuring the Web API only depends on the use case interfaces, keeping business rules and core logic shielded.

## Features

### User Registration

- [x] Allow account creation with name, email, and password.
- [x] Secure password storage (encryption).

### Authentication and Authorization

- [ ] Implement login with email and password.
- [ ] Session or JWT-based authorization.
- [ ] Route authentication to ensure only authenticated users access protected resources.

### Expense Tracking

- [ ] Allow users to create a new expense entry with:
  - [ ] Amount
  - [ ] Date
  - [ ] Description (optional)
- [ ] Each expense should be associated with the user who created it.

### Expense Categorization

- [ ] Allow users to select a category when registering an expense.
- [ ] Predefined categories (e.g., "Food," "Transport," "Entertainment").
- [ ] Allow user-customizable categories.

### Expense Viewing

- [ ] View expenses in a list.
- [ ] Filter and group expenses by date and category.

### Profile Management

- [ ] Allow profile information updates (name and email).

## Non-Functional Requirements

### Security

- [x] Secure password storage (e.g., bcrypt).
- [ ] Secure authentication using JWT tokens.
- [x] Data validation to prevent attacks like SQL Injection and XSS.

### Data Integrity

- [ ] Use database transactions to ensure data consistency.

### Maintenance and Scalability

- [x] Modular structure following best development practices to facilitate maintenance.
- [x] Clear documentation for code and APIs.

## Author

👤 **Guilherme Oliveira**

- Github: [@GuiAkuro](https://github.com/GuiAkuro)
- LinkedIn: [@guilherme-alves-de-oliveira](https://linkedin.com/in/guilherme-alves-de-oliveira)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
