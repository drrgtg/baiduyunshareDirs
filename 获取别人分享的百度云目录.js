$(function(){
    // 此操作需在控制台进行，本地或非百度云盘域名执行会报跨域错误
    // 主目录名称存为数组
    var path = [];
    var totalStr = "";
    function dir(url,fuhao){
        fuhao += "——";
        $.ajax({
            // 百度网盘接口
            // 路径请点击分享链接的networking获取，只需更改dir即可
            url:"https://pan.baidu.com/share/list?uk=1627575672&shareid=1722169857&order=other&desc=1&showempty=0&web=1&page=1&num=100&dir= " + url + " &t=0.7747160624242104&channel=chunlei&web=1&app_id=250528&bdstoken=731f1cf2f5e4f5338032ccc9f83fad85&logid=NjBFRDEzMDIzRTUxOUVFMzg5NjdEMDcyMjFCMzNCQkQ6Rkc9MQ==&clienttype=0",
            dataType:"json",
            async:false,
            success:function(data){
                var list = data.list;
                // 循环列表
                for(var m = 0;m < list.length;m++){
                    z = {};
                    // 判断是否为文件夹，文件夹为1，反之为0
                    if(list[m].isdir == 0){
                        // 文件名
                        z.server_filename = list[m].server_filename;
                        // 文件路径
                        z.path = list[m].path;
                        // 文件创建时间
                        z.server_ctime = list[m].server_ctime;
                        // 文件大小
                        z.size = list[m].size/(1024*1024)
                        // 将当前文件信息追加至z
                        path.push(z);
                        // 输出信息
                        console.log(".");
                        totalStr += "|" + fuhao + z.server_filename + "  【文件大小：" + z.size.toFixed(2) + "MB】\r\n"
                    } else {
                        // 文件名
                        z.server_filename = list[m].server_filename;
                        // 文件路径
                        z.path = list[m].path;
                        // 文件创建时间
                        z.server_ctime = list[m].server_ctime;
                        // 将当前文件信息追加至z
                        path.push(z);
                        // 输出信息
                        // console.log("|" + fuhao + z.server_filename);
                        totalStr += "|" + fuhao + z.server_filename + "\r\n"
                        // 转义字符串，防止出现特殊字符出错
                        console.log("/");
                        dir(encodeURIComponent(z.path),fuhao);
                    }
                }
            }
        });
    }
    function fakeClick(obj) {
      var ev = document.createEvent("MouseEvents");
      ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      obj.dispatchEvent(ev);
    }
    function exportRaw(name, data) {
      var urlObject = window.URL || window.webkitURL || window;
      var export_blob = new Blob([data]);
      var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = name;
      fakeClick(save_link);
    }
    dir("/sharelink1627575672-167438281392281%2F2020课件","");
    console.log(totalStr)
    // console.log(path)
    exportRaw('exportDirList.txt',totalStr)       
})
