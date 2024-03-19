# learn-fastify
## Fastify Project - Readme

**<badge shield="v1.0.0" style="plastic"></badge>**  **<badge shield="Node.js (>=14.x)" style="plastic"></badge>**  **<badge shield="MIT License" style="plastic"></badge>**

**Project Overview**

This project demonstrates a simple Fastify implementation for building a Node.js server. The server provides two GET routes:

- `/`: Returns a static "Hello World" response.
- `/:name`: Returns a dynamic "Hello" response with the provided name parameter.

Running the project is a breeze with just `npm run dev`.

**Key Features**

- Leverages Fastify for efficient routing and request handling.
- Employs response schemas for robust data validation.
- Supports dynamic parameters within routes for flexible data access.

**Getting Started**

1. Clone this project to your local directory.
2. Install dependencies using `npm install`.
3. Start the server with `npm run dev`.
4. Access the server at `http://localhost:3002`.

**Available Routes**

- **GET /:** Returns the "Hello World" message.
- **GET /:name:** Returns a greeting message personalized with the provided `name` parameter (e.g., `http://localhost:3002/John` returns "Hello John").

**Example Usage**

1. Open your web browser and navigate to `http://localhost:3002`. You should see "Hello World".
2. Try a dynamic greeting by visiting `http://localhost:3002/YourName`. The response will display "Hello YourName".

**Contributing**

Feel free to explore and enhance this project by adding new features and functionalities.

**Dependencies**

- Fastify
- Node.js (version 14.x or higher)

**License**

This project is distributed under the MIT License. See the `LICENSE` file for details.
