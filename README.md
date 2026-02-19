# App Delivery Client

Frontend-клиент на **React Native (Expo)** для приложения доставки еды: экраны, навигация, работа с формами и состоянием. :contentReference[oaicite:0]{index=0}

---

## Стек

- **Expo** :contentReference[oaicite:1]{index=1}
- **React Native** :contentReference[oaicite:2]{index=2}
- **TypeScript** :contentReference[oaicite:3]{index=3}
- **React Navigation** (native / native-stack) :contentReference[oaicite:4]{index=4}
- **NativeWind + TailwindCSS** :contentReference[oaicite:5]{index=5}
- **react-hook-form** :contentReference[oaicite:6]{index=6}
- **Reanimated / Screens / Safe Area Context** :contentReference[oaicite:7]{index=7}

---

## Возможности (что обычно делает клиент)

- Навигация по экранам приложения (stack-навигация)
- Провайдер авторизации (AuthProvider)
- UI на NativeWind + Tailwind
- Формы через react-hook-form

> В `App.tsx` подключены `Navigation` и `AuthProvider`. :contentReference[oaicite:8]{index=8}

---

## Требования

- Node.js (LTS рекомендован)
- Expo CLI (или запуск через `npx expo`)
- Android Studio (эмулятор) / Xcode (iOS) — по необходимости

---

## Быстрый старт

### 1) Установка зависимостей
```bash
npm i
# или
yarn
