# baiduyunshareDirs
获取分享百度云路径目录
# 获取百度云分享路径在浏览器中打开并打开浏览器F12
## 点击目录进入子目录
### 找到network中的XHR选项中的list API 如下图所示

![image](https://user-images.githubusercontent.com/15123605/119925163-7945e700-bfa7-11eb-803f-1fc73cc197f8.png)
### copy 路径，替换js代码中的url:，然后找到路径中的dir=和&t=中间的一段并复制，如下图所示
![image](https://user-images.githubusercontent.com/15123605/119925423-025d1e00-bfa8-11eb-834b-bd32cfdb8d81.png)
### 将复制得到的字符串粘贴到dir("****","")方法中，如下图所示
![image](https://user-images.githubusercontent.com/15123605/119925531-39333400-bfa8-11eb-8bde-228b73c14deb.png)

### 然后将整段js代码复制到console，回车即可

