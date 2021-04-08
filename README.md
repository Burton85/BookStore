# BookStore 
>這是一個使用vue 3 + tailwind css 開發的小型專案

## 1.  如何執行這個專案：

##### 方法一：直接開啟此　github page <a href="https://burton85.github.io/BookStore/">連結</a>
    
##### 方法二：下載我的git檔案並在本地運行
    ```
    $ git clone https://github.com/Burton85/BookStore.git
    ```
    ```
    $ cd bookstore
    ```
    ```
    $ npm install
    ```
    ```
    $ npm run server
    ```
    打開 http://localhost:8080 或其他端口

    
## 2.  專案的架構、邏輯說明：

    本專案使用 vue 3 開發搭配 vue-cli 腳手架並搭配 tailwind css 作為css 框架。
    為了專案的可維護性，使用 typescript 取代 javascript 給予變數強型別方便開發即將來維護時除錯。
    並且運用 vue 3 新增的 composition-api 將程式的業務邏輯與畫面的渲染邏輯分開，提高復用性也使代碼更易閱讀。
    路由方面使用 vue-router 並利用 Nest.vue 作為巢狀路由的根基，
    但礙於使用 github page 服務部屬無法將路由的 hash模式改為 history模式。

## 3.  使用到的第三方library：
    
    主要使用 tailwind css 進行開發，我之前曾經使用過 Bootstrap 及 Vuetify 等 css 框架，
    這次是我第一次使用 tailwind css 進行開發，整體感受挺流暢的，導入時沒有遇到太多問題，
    class name 雖然有些還不太熟悉但大致上都還是直觀易懂。
    唯獨在打包時遇到了一些困難。

## 4.  遇到的困難：

    因為是第一次使用 tailwind 搭配 typescript 進行開發，在開發模式都能夠正常運行，
    但打包時卻出現 tailwind css 部分失效的狀況，無法套用到 SFC 檔案中的 class name，
    後來在 tailwind.config.js 中找到問題，需要調整 purge，
    預設如下無法找到正確檔案
    ```
    purge: [
      '@/**/*.html',
      '@/**/*.vue',
    ],
    ```
    後更改為
    ```
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
    ```
    打包完即可順利運行!
    
