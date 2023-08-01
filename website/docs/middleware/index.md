---
id: middleware
title: 中间件
url: https://www.yuque.com/mlgrgm/lrf0ra/ipewf3
---

每个框架都有中间件系统，它可以帮助我们扩展应用程序，在Nodejs领域应该就是所谓的洋葱模型了，这张图大家肯定非常熟悉：
![image.png](assets/ipewf3/1649589111612-87d9a4d0-1599-4720-a56d-b6b32acbd3f5.png)
其实我们没有必要去刻意解读这种中间件系统为什么叫做洋葱模型，其实我们完全可以称之为它是同异步模型，多个同步/异步方法构成了应用程序，所以我们一般都会称之为Pipeline（流水线）