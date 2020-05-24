#  BalletCharactersAPI
<img src="public/images/title.png" width=500 >

***

## navigation

1. [ABOUT](#ABOUT)
2. [INSTALLATION](#INSTALLATION)
3. [CREDITS](#CREDITS)
4. [CONTRIBUTING](#CONTRIBUTING)





## ABOUT
このAPIはバレエの物語に出てくるキャラクターのAPIです。
<br>結果が見えやすくする為にhtmlファイルを用意してそこから操作ができます。
<br>
**
<br>

## INSTALLATION
まず最初にこのリポジトリをクローンしてください。
<br>
`$ git clone https://github.com/ryoutaka/BalletCharactersAPI.git`
<br>
<br>
次にクローンしたプロジェクトのルートディレクトリまで移動してください。
<br>
`cd BalletCharactersAPI`
<br>
<br>
データベースを作ってください
<br>
`$ echo "CREATE DATABASE api;" | psql`
<br>
<br>
インストールしてください
<br>
`yarn`
<br>
<br>
migrateコマンドを実行してください
<br>
`yarn migrate`
<br>
<br>
seedコマンドを実行してください
<br>
`yarn seed`
<br>
<br>
使ってみましょう！
<br>
`yarn start`
<br><br>
## CREDITS
このプロジェクトは以下のパッケージを使って作成しました
<br>
<br>
<img src="public/images/postgres.png" width=200 >
<br>
<br>
<img src="public/images/knex.png" width=200 >
<br>
<br>
## CONTRIBUTING
初めて自作したAPI（二日間）なので粗がたくさんあります。Pull Requestお願いします！




