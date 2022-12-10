# DEVELOPING APPS WITH ANDROID STUDIO
This document is about how to use Android Studio including the installation step. I want to give readers detailed guidance however I do not use pictures in this document since I do not want to spend much time writing up this document.

Note that, the version of Android Studio is 2021.3.1 and the execution file name is `android-studio-2021.3.1.17-windows.exe`. in this document. I am not sure whether it would be fine with other versions or not. Please download the right version in [the official past releases](https://developer.android.com/studio/releases/past-releases) if you find any problems whilst setting up.

# INSTLLATION
You can find thousands of websites explaining how to install Android Studio. Please check it by yourself if this explanation is not enough.

1. Download Android Studio from [the official website](https://developer.android.com/studio/).
2. Run the execution file.
3. Just click Next, Install and Finish buttons many times.

# ON PROJECT CONFIGURATION
We have to configure the following things when we create a new project on the app.

- Which template we will use
- Project name
- Package name
- Save location
- Language (Kotlin or Java)
- Minimum SDK

A template should be chosen depending on what we will do. The project name and save location are absolutely up to you. The package name must be unique on a device and also in the Google Play Store, which means this package name will be used forever in the Google Play Store and ***we can never change it forever after publishing it*** [[Change package name after publishing](https://stackoverflow.com/questions/33996010/change-package-name-after-publishing)]. Be careful to decide on the package name. The language is either Kotlin or Java for now. We should select which one is suitable for the project members. Minimum SDK implies the lowest version of Android we will support. The higher version would be easy to code but it supports only newer phones.