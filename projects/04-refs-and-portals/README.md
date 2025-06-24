# ⏱️ The Almost Final Countdown

> Stop the timer once you estimate that time is (almost) up.

A fun and minimal countdown game built with React to practice advanced concepts like `ref`, `forwardRef`, `useImperativeHandle`, and `createPortal`.

## 🧠 What I Learned

This mini project helped reinforce the following concepts:

- **Refs in React** – Accessing and controlling DOM nodes and component instances
- **`forwardRef`** – Passing refs to child components
- **`useImperativeHandle`** – Exposing custom methods to parent components via refs
- **`createPortal`** – Rendering UI outside the main component tree (used for the modal)

## 🕹️ How It Works

- A countdown starts automatically.
- Your goal is to **stop the timer** as close to **0.000 seconds** as possible.
- Once you stop it, a **modal appears** (via portal) showing your result.
- Try again to beat your accuracy!

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KakaSena/investment-calculator-react.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd projects/04-refs-and-portals
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open the app in your browser**:

   Visit [http://localhost:5173](http://localhost:5173) to view the application.

