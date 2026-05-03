# Score-It

> A mobile app to track scores during board game sessions — from setup to final rankings.

Built with Expo & React Native.

## Tech Stack

| Technology                                                                                                         | Role                               |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| [Expo](https://expo.dev) (managed workflow)                                                                        | Build & development toolchain      |
| [React Native](https://reactnative.dev)                                                                            | Cross-platform mobile UI           |
| [TypeScript](https://www.typescriptlang.org)                                                                       | Static typing                      |
| [React Navigation](https://reactnavigation.org)                                                                    | Stack & bottom tab navigation      |
| [React Hook Form](https://react-hook-form.com)                                                                     | Form state management              |
| [Zod](https://zod.dev)                                                                                             | Schema validation & type inference |
| [Jest](https://jestjs.io) + [Testing Library](https://testing-library.com/docs/react-native-testing-library/intro) | Unit testing                       |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 18
- [Expo Go](https://expo.dev/go) installed on your phone, or an iOS/Android simulator

### Installation

```bash
git clone https://github.com/Barret-Pierre/Score-It
cd score-it
npm install
```

### Run the app

```bash
npx expo start
```

Then scan the QR code with Expo Go, or press i for iOS simulator / a for Android.

## Project Structure

```bash
src/
├── context/
│ └── AppContext.tsx # Global state (Context API) + useAppContext hook
├── navigation/
│ ├── RootNavigator.tsx # Root stack navigator
│ └── TabNavigator.tsx # Bottom tab navigator
├── domain/ # Domain stack
│    ├── games/ # Game engine
│    └── models/
├── schemas/
│ └── example.schema.ts # Zod schemas & inferred types
├── screens/
│ ├── HomeScreen.tsx
│ └── SettingsScreen.tsx
├── hooks/
├── types/
│ └── navigation.types.ts # Route param types
└── utils/ # Shared utilities
```

## Running Tests

```bash
# Run unit tests
npx jest

# Type checking
npx tsc --noEmit
```

Tests are focused on business logic (Zod schemas, utils, hooks, game engine) and located in ./tests/.
