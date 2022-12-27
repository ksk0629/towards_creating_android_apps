本稿は'./document/react_native_en.md'をDEEPLで訳した資料である

# はじめに
本ドキュメントはReact Nativeを学ぶためのものであり、リファレンスはおそらく[公式サイト](https://reactnative.dev/)となります。そのため、画像を含むコンテンツが公式サイトからの引用である場合は、リファレンスの表示を省略します。

# 基本的な知識
## AndroidとiOSの開発
- ビュー：UI の基本構成要素で、画面上の小さな四角形の要素。
    - テキストや画像を表示したり、ユーザーの入力に応答するために使用できる。
    - 他のビューを含むことができる。
    - Androidの開発では、KotlinまたはJavaで記述されます。
    - iOS開発では、SwiftまたはObjective-Cで記述される。

ビューのすべて](https://reactnative.dev/docs/assets/diagram_ios-android-views.svg)

## React
- コンポーネント(どちらか一方がビューを提供する)
    - 機能コンポーネント
    - クラスコンポーネント、これはコンポーネントのみが状態を持つことができる

## リアクトネイティブ
-
- ネイティブコンポーネント：AndroidやiOSのビューに対応
    - React Nativeによって実行時に作成される。
- コアコンポーネント: すぐに使える必須のNativeコンポーネントのセット。
    - APIドキュメント](https://reactnative.dev/docs/components-and-apis)に記載されている。
- 独自コンポーネント
    - ユーザー独自のネイティブコンポーネントで作成されます。
- Community-contributed components: 自作のNative Componentで構成されるエコシステム。
    - React Nativeディレクトリ](https://reactnative.directory/)に格納されています。

コンポーネント関係](https://reactnative.dev/docs/assets/diagram_react-native-components.svg)


# React Nativeとは？
React Nativeは、ユーザーインターフェースを構築するためのJavaScriptのライブラリであるReact[[React](https://reactjs.org/)]と、アプリプラットフォームのネイティブ機能を利用して、AndroidやiOSアプリケーションを構築するためのオープンソースのフレームワークです。React Nativeは、Reactコンポーネントと同じAPI構造を使用しています。
