# Juice Shop Login Demo

This project is a simple login form inspired by OWASP Juice Shop.

It includes an email field and password field and demonstrates both
client-side and server-side validation.

## Validation Rules

The application checks that:

- Email is not empty
- Password is not empty
- Email contains an `@` symbol
- Password is at least 8 characters long

Client-side validation is performed with JavaScript in the browser.

Server-side validation is performed with Node.js and Express.

## How to Run

1. Clone or download the repository.

2. Open a terminal in the project folder.

3. Install dependencies:

```bash
npm install