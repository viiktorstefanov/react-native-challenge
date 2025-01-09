# React Native Challenge

This is a React Native project built with Expo CLI.

## Requirements

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (Optional but recommended)
- [Android Studio](https://developer.android.com/studio) 
- [Xcode](https://developer.apple.com/xcode/) (for iOS)


## Setup

To get started with the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/viiktorstefanov/react-native-challenge.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-native-challenge
    ```

3. Install dependencies:

      ```bash
      npm install
      ```

## Running the Project

To run the app, use Expo CLI:

1. **Start the development server**:
    ```bash
    npx expo start
    ```

    If you have problems with opening the application with your phone in Expo Go , try run the project with:

    ```bash
    npm run tunnel
    ```

2. **Open the app on a device or simulator**:
   - Scan the QR code with the Expo Go app on your mobile device (available on iOS and Android).
   - Alternatively, you can use a simulator like Virtual Device Manager from [Android Studio](https://developer.android.com/studio).

### Build Instructions

Build app with EAS Build.
To create a production build, you can use the following commands:

1. **For Android**:
    To create an APK or AAB for Android:

     ```bash
     eas login
     ```

    To configure an Android for EAS Build, run the following command:

     ```bash
     eas build:configure
     ```

    ```bash
    eas build --platform android
    ```

     After the build completes, you will be able to download the APK or AAB to install on a device or upload to the Play Store.