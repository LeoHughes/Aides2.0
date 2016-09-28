## Store Module 
仅可在浏览器环境使用，直接使用全局变量_下的方法

***

>***getCookie***
>根据name获取cookie值，若无则返回空

>***setCookie***
>设置cookie
* name  cookie名称
* value cookie值
* time  cookie过期时间,单位秒

>***clearCookie***
>根据name清除cookie

>***getStoreItem***
>根据name获取localStorage存储的值

>***setStoreItem***
>根据name设置localStorage本地存储[name相同，后面会覆盖前面的存储值]

>***setStoreObj***
>根据object设置localStorage本地存储

>***getStoreObj***
>将localStorage以Object返回

>***removeStoreItem***
>根据name删除localStorage存储的值,成功则返回true

>***clearStore***
>清空localStorage的所有数据