import App from './app';

const app = new App();

const PORT = process.env.PORT || 3001;

app.start(PORT);