# welcome to phenomenal.
*Note: This is a prototype site. No real transactions involving real money are handled.*

## Prerequisites
Before you begin, you will need to have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation
### Step 1: Clone the repository 
Navigate to a directory and paste the following command:
```bash
git clone https://github.com/seancfong/phenomenal.git
```

### Step 2: Install dependencies 
Open a terminal and navigate to the root directory of the project.

Run the following command to install all required dependencies:
```bash
npm install
```

### Usage
Run the following command to start the development server:
```bash
npm run dev
```

Open a web browser and navigate to http://localhost:3000.

### Project Structure
The project is structured as follows:

- pages/: Contains all the Next.JS page routes.
- page/api: Contains API routes for integration with Stripe.
- components/: All the React Components used to render content.
- sanity_phenomenal/: Contains the sanity desk to create and edit site content from Sanity CMS.
