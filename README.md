# baiduyunshareDirs
## 获取分享百度云路径目录树并保存导出在本地txt文件
### 1.获取百度云分享路径在浏览器中打开并打开浏览器的开发者模式
### 2.点击目录进入子目录
### 3.找到network中的XHR选项中的list API 如下图所示

![image](https://user-images.githubusercontent.com/15123605/119925163-7945e700-bfa7-11eb-803f-1fc73cc197f8.png)
### 4.copy 路径，替换js代码中的url:，然后找到路径中的dir=和&t=中间的一段并复制，如下图所示
![image](https://user-images.githubusercontent.com/15123605/119925423-025d1e00-bfa8-11eb-834b-bd32cfdb8d81.png)
### 5.将复制得到的字符串粘贴到dir("****","")方法中，如下图所示
![image](https://user-images.githubusercontent.com/15123605/119925531-39333400-bfa8-11eb-8bde-228b73c14deb.png)

### 6.然后将整段js代码复制到console，回车后等待文件下载即可

#### PS: 目录过多网页可能会卡顿，别关闭网页，请静静等待

