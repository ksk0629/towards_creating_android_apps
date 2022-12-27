本稿は'./document/react_native_en.md'をDEEPLで訳した資料である

# はじめに
本ドキュメントはReact Nativeを学習するためのもので、リファレンスはおそらく[公式サイト](https://reactnative.dev/)になります。そのため、画像を含むコンテンツが公式サイトから参照される場合は、リファレンスの表示を省略します。

# React Nativeとは？
React Nativeは、ユーザーインターフェースを構築するためのJavaScriptライブラリであるReact[[React](https://reactjs.org/)]と、アプリプラットフォームのネイティブ機能を使って、AndroidやiOSアプリを構築するためのオープンソースフレームワークである。React Nativeは、Reactコンポーネントと同じAPI構造を採用しており、つまり、Reactを理解することは、React Nativeを理解することに繋がります。

# 開発環境
React Nativeを使ったアプリの開発には、EXPOを使う方法と、XCodeやAndroid Studioを使う方法の2つがあります。前者は、Node.jsとスマホやエミュレータがあればできますが、ネイティブ言語であるJavaやKotlin、SwiftやObjective-Cでアプリが書かれるわけではありません。つまり、あまりエレガントなものにはならないでしょう。後者は、逆に、アプリがネイティブ言語で書かれている、という特徴があります。しかし、IDEをインストールする必要があり、特にXCodeはMacでしか動かないので、そこが厄介なところです。その点は注意してください。React Nativeは、ネイティブ言語を使ってコードを書くことができますが、Appleの製品が全く必要ないわけではありません。アプリをWindows上でiPhoneだけで開発することもできるようです[[Windows機でiOSアプリの開発から実機インストールまで行ってみる【ReactNative】～環境構築編～](https://qiita.com/BanaoLihua/items/33f05d368f9bbd0bb741)].

# 基礎知識
## AndroidとiOSの開発
- ビュー: UIの基本的な構成要素で、画面上の小さな長方形の要素である
    - テキストや画像を表示したり、ユーザーの入力に応答したりするのに使用できる。
    - 他のビューを含むことができる。
    - Androidの開発では、KotlinまたはJavaで記述されます。
    - iOS開発では、SwiftまたはObjective-Cで記述される。

ビューのすべて](https://reactnative.dev/docs/assets/diagram_ios-android-views.svg)

## React
- コンポーネント(どちらもビューを提供)
    - 機能コンポーネント
    - クラスコンポーネント、これはコンポーネントだけが状態を持つことができる

## React Native
- ネイティブコンポーネント：AndroidとiOSのビューに対応
    - React Nativeによって実行時に作成される。
- コアコンポーネント：必要不可欠で、すぐに使えるNativeコンポーネントのセット。
    - APIドキュメント](https://reactnative.dev/docs/components-and-apis)に記載されている。
- 独自コンポーネント
    - ユーザー独自のネイティブコンポーネントで作成されます。
- Community-contributed components: 自作のNative Componentで構成されるエコシステム。
    - React Nativeディレクトリ](https://reactnative.directory/)に格納されています。

コンポーネント関係](https://reactnative.dev/docs/assets/diagram_react-native-components.svg)

## 技術の断片
### JSX
JSXは、JavaScriptの中で要素を次のように書くことができる構文である。<<Text>Hello, I am your cat!</Text>` のように、JavaScriptの中に要素を書くことができる構文です。Reactの公式サイトには、JSXに関するドキュメント[[JSX In Depth]https://reactjs.org/docs/jsx-in-depth.html]があります。JSXでは、例えば `<Text>Hello, I am your {cat_name}!<TexT>` (`cat_name` は変数) のように、任意のJavaScript式を使用することが可能です。なお、JSXはReactのライブラリに含まれています。

### カスタムコンポーネント
コンポーネントは入れ子にすることができ、再利用が可能です。例えば、`<Text>` と `<TextInput>` は `<View>` にネストすることができる。

``javascript
インポート React from 'react';
import { Text, TextInput, View } from 'react-native';

const Cat = () => {
  return (
    <View>
      <Text>こんにちは、私は...</Text>です。
      <TextInput
        style={{
          height: 40,
          borderColor: 'グレー',
          ボーダー幅: 1
        }}
        defaultValue="名前をつけてください!"
      />
    </View
  );
}

エクスポートデフォルトのCat;
```

### プロップス
Propsとはpropertiesの略で、引数のようなものです。React NativeのCore Componentsのほとんどは、propsを使ってカスタマイズすることができます。

``javascript
import React from 'react';
import { Text, View } from 'react-native';

const Cat = (props) => { {...
  return (
    <View>
      <Text>こんにちは、私は{props.name}です！</Text>。
    </View
  );
}

const Cafe = () => {
  return (
    <ビュー>
      <ネコの名前="マル" /> (Cat name="Maru")
      <猫名="ジェリーロラム" />
      <ネコの名前="スポット" />
    </View
  );


エクスポートデフォルトCafe;
```

### ステート
Stateはコンポーネントのデータストレージのようなものです。よくわかりませんが、保存された値はアプリの再スタート後に保存され続けるとは限りません[[Reactのstateはどこに保存されるか？](https://teratail.com/questions/343195)]。

javascript
import React, { Component } from "react";
import { Button, Text, View } from "react-native"; import { Button, Text, View } from "react-native";

クラス Cat extends Component {
  state = { isHungry: true };

  render() {
    return (
      <ビュー>
        <Text>
          私は{this.props.name}で、私は
          {this.state.isHungry ?" hungry" : " full "}です!
        </Text>
        <ボタン
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}とする。
          title={
            this.state.isHungry ?"ミルクを注いでください！" : "ありがとうございます！"
          }
        />
      </View
    );
  }


class Cafe extends Component {
  render() {
    return (
      <>
        <猫名="マンカストラップ" />
        <ネコの名前="スポット" />
      </>
    );
  }
}

エクスポートデフォルトCafe;
```
