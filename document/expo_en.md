# Introduction
Expo allows us develop Android and iOS apps without Android Studio and XCode, which is good, especially for development iOS app since XCode runs on only Mac. The advantage, being able to develop apps without the official IDEs, implies the apps developed using expo are not written in the native languages. I am not sure it seems the apps have some limits in the sense of design. And also because of the advantage, the performance does not compete with ones developed using the native languages. Well, still the app would not have "BAD" performance though.

Expo CLI, whcih is short for command line interface, is needed for serving projects. Also expo go is needed for calling the app from your physical device.

# Tools
- On machine
    - Node.js LTS release - Only Node.js LTS releases (even-numbered)
    - Git
    - Watchman (for macOS or Linux users)
    - Yarn
    - VS Code Editor
        - VS Code Expo Extension
- On device
    - Expo go

# Cheatsheet
- create project: `yarn create expo-app [project name]`
    - After creating a new project, you should go into the created directory.
- prepare TypeScript
    - install them: `npm install typescript @types/react @types/react-native @types/react-test-renderer @types/jest`
    - create configuration file: `touch tsconfig.json`
    - Change js into tsc: `mv App.js App.tsx`
- start an app: `yarn start`

# Reference
- https://docs.expo.dev/get-started/installation/
- https://www.bacancytechnology.com/blog/react-native-app-with-typescript
