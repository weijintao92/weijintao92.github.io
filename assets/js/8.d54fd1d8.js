(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{413:function(s,n,a){"use strict";a.r(n);var t=a(44),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"mysql-navicat-无法登录的解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-navicat-无法登录的解决"}},[s._v("#")]),s._v(" MySql Navicat 无法登录的解决")]),s._v(" "),a("h3",{attrs:{id:"windows安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows安装mysql"}},[s._v("#")]),s._v(" Windows安装MySql")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 下载\nMySQL清华镜像下载地址：https://mirrors.tuna.tsinghua.edu.cn/mysql/downloads/MySQL-8.0/mysql-8.0.21-winx64.zip\n#切换盘符\nd:\n#进入`bin`目录\ncd D:\\mysql-8.0.21-winx64\\bin\n#初始化数据库：\nmysqld --initialize --console\n#将MySQL安装成windows服务\nmysqld install\n#启动mysql\nnet start mysql\n#登录\nmysql -u root -p\n#第一次登录需要修改密码（修改当前登录用户的密码）\nalter user user() identified by '123456';\n#选择mysql库\nuse mysql;\n# 修改root用户的host，以使root用户可以任意主机连接\nupdate user set host = '%' where user = 'root';\n#修改加密方式，以使navicat可以连接\nALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';\n#刷新以使设置生效\nFLUSH PRIVILEGES;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);