---
title: "Windows注册服务"
date: "2019-09-07"
permalink: "2019-09-07-windows-register-service"
---

## 切记

**杀毒软件关掉!!!(尤其是 360 杀毒)**

**杀毒软件关掉!!!(尤其是 360 杀毒)**

**杀毒软件关掉!!!(尤其是 360 杀毒)**

## 安装服务

1. 使用 sc 命令

   ```
   sc [servername] create Servicename [Optionname= Optionvalues]
   ```

   > demo

   ```
   sc create svnservice binpath= "\"D:\Servers\Subversion\bin\svnserve.exe\" --service -r E:\SVN\repository" displayname= "SVNService" depend= Tcpip start= auto
   ```

2. 使用程序安装

   下载一下两个程序 <a href="https://download.csdn.net/download/qq_37892223/11691878">下载地址</a>

   ```
   安装　instsrv ServiceName C:\Windows\System32\srvany.exe
   卸载　instsrv ServiceName remove
   ```
