# Lumi AI 🚀

<!-- ![AI Tools Image](./doc/Lumi-ai.png) -->

## Why DeepSeek? 🤔

At **Lumi**, we are driven by a passion for revolutionizing the intersection of decentralized technologies and artificial intelligence. **DeepSeek** empowers users with innovative and accessible tools that enhance the Web3 ecosystem. Here’s why DeepSeek stands out:

- **Advanced Natural Language Processing** 🤖: DeepSeek’s AI models provide state-of-the-art reasoning and generative capabilities, enabling intuitive interactions and intelligent responses.
- **Customizability** 🛠️: Our AI can adapt to the unique needs of Web3 users, from analyzing on-chain data to optimizing smart contract interactions.
- **Scalability and Reliability** ⚡: Designed to handle the complex demands of decentralized applications, DeepSeek ensures speed, reliability, and performance as our user base grows.
- **Developer-Centric** 💻: By simplifying complex concepts and empowering developers with actionable insights, DeepSeek fosters innovation and expertise in the Web3 space.

DeepSeek isn’t just a tool—it’s a strategic partner for Web3 innovation, offering the flexibility to experiment, iterate, and deliver value-driven experiences.

## Features ✨

- **High-Speed Streaming Output** ⚡: Supports seamless, real-time interactions.
- **Multi-Turn Conversations** 🗣️: Engage in dynamic, context-aware conversations.
- **Web-Connected Searches** 🌐: Tap into the internet for up-to-date insights and information.
- **Silent Deep Reasoning** 🤫: Perform in-depth analysis without intrusive output.
- **Effortless Deployment** 🚀: Zero-configuration setup with multi-token support.

DeepSeek is fully compatible with the ChatGPT API interface, ensuring ease of integration into your existing systems.

## Table of Contents 📚

- [Disclaimer](#disclaimer)
- [Demo Showcase](#demo-showcase)
- [Getting Started](#getting-started)
- [Multi-Account Integration](#multi-account-integration)
- [Deployment Options](#deployment-options)
  - [Docker Deployment](#docker-deployment)
  - [Docker-Compose Deployment](#docker-compose-deployment)
  - [Render Deployment](#render-deployment)
  - [Vercel Deployment](#vercel-deployment)
  - [Native Deployment](#native-deployment)
- [Recommended Clients](#recommended-clients)
- [API Endpoints](#api-endpoints)
  - [Chat Completion](#chat-completion)
  - [Token Status Check](#token-status-check)
- [Best Practices](#best-practices)
  - [Nginx Optimization](#nginx-optimization)
  - [Token Usage Notes](#token-usage-notes)
- [Star History](#star-history)

## Disclaimer ⚠️

- **Unstable APIs**: Reverse-engineered APIs are inherently unstable. For consistent performance, consider using the official DeepSeek API.
- **Research Use Only**: This project is for educational and research purposes only. No commercial use is allowed.
- **Risk Responsibility**: Usage is at your own risk. Misuse of the API could lead to service bans or other issues.

## Setup Instructions 🛠️

### Preparation 📝

Ensure your system is capable of connecting to the DeepSeek platform.

### Retrieve Your `userToken` 🔑

1. Start a conversation on the platform.
2. Open the Developer Console (F12).
3. Navigate to **Application > LocalStorage** and find the `userToken`.
4. Use the retrieved token as your `Authorization: Bearer TOKEN`.

## Demo Showcase 🎥

Explore the powerful capabilities of DeepSeek through live demos! Here are a few examples of what DeepSeek can do in action:

- **Real-time Conversations**: Watch how DeepSeek handles complex, multi-turn conversations with ease.
- **On-chain Data Analysis**: See how DeepSeek processes Web3 data to generate insightful reports.

---

## Multi-Account Integration 🔄

DeepSeek supports multi-account integration, allowing you to connect multiple wallets or Web3 accounts. Here’s how you can manage them:

1. **Step 1**: Go to the "Account" section in your DeepSeek dashboard.
2. **Step 2**: Click on "Add Account" and select the platform (Ethereum, Polygon, etc.).
3. **Step 3**: Follow the authentication steps to integrate each account.
4. **Step 4**: Use your accounts in parallel for optimized performance.

---

## Deployment Options 🚀

DeepSeek offers multiple deployment options to suit your needs.

### Docker Deployment 🐳

To deploy DeepSeek using Docker, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/deepseek/deepseek.git`
2. Navigate to the directory:  
   `cd deepseek`
3. Build the Docker image:  
   `docker build -t deepseek .`
4. Run the container:  
   `docker run -d -p 8080:8080 deepseek`

---

### Docker-Compose Deployment 🐋

For a multi-container deployment using Docker Compose, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/deepseek/deepseek.git`
2. Navigate to the directory:  
   `cd deepseek`
3. Build and start services using Docker Compose:  
   `docker-compose up --build`
4. Open your browser and go to `http://localhost:8080` to see DeepSeek in action.

---

### Render Deployment 🎨

Render makes it easy to deploy DeepSeek in a cloud environment.

1. Go to [Render.com](https://render.com) and create an account.
2. Connect your GitHub repository.
3. Select "Web Service" as the type and choose your repository.
4. Set the environment variables and deploy your application.

---

### Vercel Deployment 🌐

Deploying DeepSeek on Vercel is quick and straightforward.

1. Go to [Vercel.com](https://vercel.com) and sign up.
2. Connect your GitHub repository to Vercel.
3. Set up build settings, ensuring that the correct environment variables are added.
4. Deploy the app and view it at your Vercel URL.

---

### Native Deployment 💻

To deploy DeepSeek on your local machine:

1. Clone the repository:  
   `git clone https://github.com/deepseek/deepseek.git`
2. Navigate to the directory:  
   `cd deepseek`
3. Install dependencies:  
   `npm install`
4. Run the application:  
   `npm start`

---

## Recommended Clients 🧑‍💻

Here are some recommended clients for working with DeepSeek's API:

- **Postman**: Ideal for testing and making API requests.
- **Insomnia**: A great alternative to Postman for REST API requests.
- **Curl**: Command-line tool for making HTTP requests.

---

## API Endpoints 🖥️

### Chat Completion 💬

The `chat-completion` API allows you to interact with DeepSeek's AI in real-time.

- **Endpoint**: `/api/chat`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "message": "Hello, Lumi AI!",
    "userToken": "your-user-token-here"
  }
  ```
