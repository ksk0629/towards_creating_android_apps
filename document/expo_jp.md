本稿は'./document/expo_en.md'をDEEPLで訳した資料である

# はじめに

Android Studio や XCode を使わずに Android や iOS のアプリを開発できる Expo は、特に XCode が Mac でしか動作しないため、iOS アプリの開発には適しています。公式のIDEを使わずにアプリを開発できるということは、Expoを使って開発されたアプリはネイティブの言語で書かれていないことを意味します。デザイン的にも限界があるような気がしないでもない。また、その優位性から、ネイティブ言語で開発されたアプリにはパフォーマンスが及ばない。まあ、それでも「悪い」性能ではないでしょうけど。

Expo CLIは、コマンドラインインターフェイスの略で、プロジェクトにサービスを提供するために必要なものです。また、物理デバイスからアプリを呼び出すには、Expo goが必要です。

# ツール

- マシン上
  - Node.js LTS リリース - Node.js LTS リリースのみ (偶数番号)
  - Git
  - Watchman (macOSまたはLinuxユーザ向け)
  - Yarn
  - VSコードエディタ
    - VS Code Expoエクステンション
- デバイス上
  - エキスポ・ゴー

# チートシート

- プロジェクトの作成: `yarn create expo-app [プロジェクト名]`.
  - 新しいプロジェクトを作成したら、作成されたディレクトリに移動してください。
  - または `expo init [プロジェクト名]` とします。
- TypeScriptを用意する
  - をインストールする。yarn add typescript @types/react @types/react-native @types/react-test-renderer @types/jest` とする。
  - 設定ファイルを作成します。tsconfig.json` をタッチする。
  - jsをtscに変更する: `mv App.js App.tsx`
- アプリを起動する。yarn start`

# 参考

- https://docs.expo.dev/get-started/installation/
- https://www.bacancytechnology.com/blog/react-native-app-with-typescript
