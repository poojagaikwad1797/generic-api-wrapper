# Generic API Wrapper

The Generic API Wrapper is a versatile and lightweight utility library for making HTTP requests to various APIs in your JavaScript and TypeScript projects. This wrapper is designed to simplify the process of interacting with different APIs by providing a common interface for handling requests.

## Key Features

- **Flexibility:** Easily configure and customize the wrapper for different APIs by specifying the base URL, headers, and other options.
- **HTTP Methods:** Support for various HTTP methods, including GET, POST, PUT, DELETE, etc.
- **Error Handling:** Built-in error handling for graceful management of API request failures.
- **Asynchronous Operations:** Leverage asynchronous capabilities for non-blocking API requests in both JavaScript and TypeScript.
- **TypeScript Support:** Enjoy the benefits of TypeScript with strong typing for API responses and request parameters.

## Installation

Install the necessary dependencies:

```bash
npm install axios
```

## Usage

```bash
import ApiWrapper from 'generic-api-wrapper';

const api = new ApiWrapper({ baseURL: 'https://api.example.com' });

async function fetchData() {
  try {
    const responseData = await api.request('GET', '/endpoint');
    console.log('API Response:', responseData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchData();
```

## Contributing

Contributions are welcome! If you find a bug or have a feature suggestion, please open an issue or submit a pull request.
