JSONMaker
=========

json 格式化以及测试数据生成器


JSONMaker 测试数据生成的规则说明
--------------------
>repeat

    {{repeat()}} 表示接下来的对象或字符串将循环次数
    如"{{repeat(6)}}"表示接下来的对象或字符串将循环 6次
    "{{repeat(1,8)}}" 表示接下来的对象或字符串将循环 至少1次 之多8此
    
>guid
    
    {{guid}} 将随机生成一个guid
    
>index

    {{index}} 将生成自增长序列
    
>name

    {{name}} 将随机生成一个姓名 .  姓名存放在c\js\datalist 中根据需求自行修改

>email

    {{email()}} 将随机生成一个email
    {{email}} 表示随机生成一个email
    {{email(lxx.com)}} 将随机生成域名为 lxx.com 的email 
    
>phone

    {{phone}} 将随机生成一个8位的电话号码
    
>mobilephone
    
    {{mobilephone}} 将随机生成一个电话号码
    {{mobilephone(1)}} 随机生成一个移动的电话号码
    {{mobilephone(2)}} 随机生成一个移动的联通号码
    {{mobilephone(3)}} 随机生成一个移动的电信号码
    
>date

    {{date(yyyy-MM-dd)}} 随机生成一个自定义格式化的日期

>numeric
    
    {{numeric(1,100.44)}} 随机产生一个自定义的区间数
    
    
    
JSONMaker 参考文献
--------------------
json 格式化机制 使用开源的 [http://jsonlint.com/](http://jsonlint.com/)
随机数据生成的一些标签标准 参考了[http://www.json-generator.com/](http://www.json-generator.com/)
    
