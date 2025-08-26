# 📱 SMS Sending Service (NestJS)

A simple SMS OTP (One-Time Password) sending and verification service built with **NestJS**.  
This service provides APIs to send OTPs and verify them.

### Run in development

```bash
npm run start:dev
```

### Build project

```bash
npm run build
```

### Run in production

```bash
npm run start:prod
```

---

## 🌐 API Endpoints

By default, the app runs on port **`3000`**.
You can change the port in **`main.ts`** if needed.

```ts
// main.ts
await app.listen(3000); // change 3000 to your desired port
```

### Endpoints

#### 1. Send OTP

```
POST {server_url}:{port}/sent-otp
```

#### 2. Verify OTP

```
POST {server_url}:{port}/verify-otp
```

---

## 🛠️ Installation & Usage

1. Clone the repository

```bash
git clone
cd to/that/project
```
