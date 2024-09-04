# Getting Started - Nokkel React Native Test

## Step 1: Clone the repo

```bash
git clone https://github.com/nokkel-developer/nokkel-react-native-tech-test.git
```

## Step 2: Install the dependancies

```bash
npm install
```

## Step 3: Start Metro

```bash
npm run start
```

## Step 4: Start your Applciation

```bash
# iOS
npm run ios

# Android
npm run android
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

### Troubleshooting

#### Android

If you have issues with ANDROID_HOME when building & running on Android Emulator, you may need to run the following command, and then rebuild.

```bash
echo "sdk.dir = /Users/$(whoami)/Library/Android/sdk" > android/local.properties
```

#### IOS

If you are having issues with pod installation, you may need to run one of the following commands, and then rebuild.

Option 1:

```bash
npm run install:ios
```

Option 2:

```bash
cd ios

bundle install

bundle exec pod install
```
