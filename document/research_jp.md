本稿は'./document/research_en.md'をDEEPLで訳した資料である

これは、アンドロイドのアプリを開発するための走り書きメモに過ぎません。

# 統合開発環境について
Visual Studio（とXamarin）よりもReact NativeやProgressive Web Apps、Android Studioの方が良いと感じています。理由は、Visual Studioには制約があるからです。React NativeやプログレッシブWebアプリは、読者がWeb開発に慣れていて、アプリがそれほど複雑でない場合に適している。そうでなければ、Android Studioの方が良い。

- 参考までに[WindowsでのAndroid開発の概要](https://learn.microsoft.com/ja-jp/windows/android/overview)]

## ネイティブアンドロイド
ネイティブアンドロイド開発とは、iOSではなくAndroidのみをターゲットにしたアプリのことです。IDEは以下の2つがあります。

- アンドロイドスタジオ
    - コードJava / Kotlin
- ビジュアルスタジオ（VS）

VSは商用利用には制限があるため、Android Studioの方がよいでしょう。

## クロスプラットフォーム
クロスプラットフォーム開発とは、AndroidとiOSの両方でアプリが動作することを意味します。コード全体は全く同じではないかもしれませんが、ほとんどは同じです。

- Xamarinは、VSのツールの1つです。
    - C#
- React Native
    - UIコードJavaScript
    - ロジックコードJavaScript
- プログレッシブWebアプリ(PWA)
    - UIコードHTML、CSS、JavaScript
    - ロジックコードJavaScript

# その他
その他、ゲーム開発用のC/C++やPythonなど、アンドロイドアプリを開発するためのオプションがあります。でも、Android Studioで十分な気がするので、特に調べていません。