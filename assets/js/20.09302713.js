(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{424:function(s,n,a){"use strict";a.r(n);var t=a(44),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx配置ssl证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置ssl证书"}},[s._v("#")]),s._v(" nginx配置SSL证书")]),s._v(" "),a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("ul",[a("li",[s._v("随着微信小程序和appstore对ssl安全的需求，越来越多的网站和app需要支持SSL功能，需要开启https的方式来打开网站或传输数据。最直观的就是有了ssl证书后，在浏览器访问时不会有"),a("code",[s._v("不安全")]),s._v("的提示")])]),s._v(" "),a("h1",{attrs:{id:"nginx-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件"}},[s._v("#")]),s._v(" nginx 配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    # 我的api\n    server {\n        listen 80;\n        server_name api.gd97.xyz;\n        return 301 https://api.gd97.xyz$request_uri;\n    }\n\n    server {\n    # 这里要加上ssl不然，会出现无法访问的错误\n        listen 443 ssl;\n        server_name api.gd97.xyz;\n\n        ssl_certificate /etc/nginx/cert/4955144_api.gd97.xyz.pem;\n        ssl_certificate_key /etc/nginx/cert/4955144_api.gd97.xyz.key;\n\n        ssl_session_timeout 5m;\n        ssl_protocols SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2;\n        ssl_ciphers ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;\n        ssl_prefer_server_ciphers on;\n\n        error_page 497 "https://$host$uri?$args"; #这是跳转Http请求到Https\n\n        location /static {\n            alias /www/DjangoREST/static; # your Django project\'s static files - amend as required\n        }\n        location / {\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_redirect off;\n            proxy_buffering off;\n            proxy_pass http://DjangoREST;\n        }\n\n        error_page 404 /404.html;\n        location = /404.html {\n        }\n\n        error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n        }\n    }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h1",{attrs:{id:"nginx常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用命令"}},[s._v("#")]),s._v(" NGINX常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("nginx -s reload # 重新载入配置文件\nnginx -s reopen # 重启 Nginx\nnginx -s stop # 停止 Nginx\nnetstat -lnpt #查看开放了哪些端口\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h1",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.w3cschool.cn/nginxsysc/nginxsysc-ssl.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 配置SSL及Http跳转到Https"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/wdz306ling/article/details/79954561?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx部署https网站，并配置地址重写"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);