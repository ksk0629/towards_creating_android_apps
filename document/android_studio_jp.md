本稿は'./document/android_studio_en.md'をDEEPLで訳した資料である

# アンドロイドスタジオでアプリを開発する
このドキュメントは、Android Studioのインストールを含む使用方法について説明します。このドキュメントでは、Android Studioのインストールから使い方を説明します。

なお、Android Studio のバージョンは 2021.3.1 で、実行ファイル名は `android-studio-2021.3.1.17-windows.exe` となっています。他のバージョンでも問題ないかどうかはわかりません。設定に問題がある場合は、[過去の公式リリース](https://developer.android.com/studio/releases/past-releases)で正しいバージョンをダウンロードしてください。

# インストール
Android Studioのインストール方法については、多くのサイトで説明されています。この説明で不十分な場合は、ご自身でご確認ください。

1.1. [公式サイト](https://developer.android.com/studio/)からAndroid Studioをダウンロードします。
2.実行ファイルを実行する。
3.3.Next、Install、Finishボタンを何度もクリックすればOKです。

# プロジェクトの設定について
アプリ上で新規プロジェクトを作成する際に、以下のような設定をする必要があります。

- どのテンプレートを使うか
- プロジェクト名
- パッケージ名
- 保存場所
- 言語(KotlinまたはJava)
- 最小限のSDK

テンプレートは、何をするかによって選ぶ必要があります。プロジェクト名と保存場所は自由に決めてください。パッケージ名は端末上でもGoogle Play Storeでもユニークでなければなりません。つまり、このパッケージ名はGoogle Play Storeで永遠に使われ、***公開後は永遠に変更できません*** [[Change package name after publishing](https://stackoverflow.com/questions/33996010/change-package-name-after-publishing)] ということです。パッケージ名の決定には注意が必要です。言語は今のところKotlinかJavaのどちらかです。プロジェクトメンバーに適した方を選択する必要がある。Minimum SDKは、サポートするAndroidの最低バージョンを意味します。高いバージョンはコーディングが楽だが、新しい機種にしか対応しない。