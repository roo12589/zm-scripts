<font color="red"> 我是红色字体 </font>

```js
业力参考
// 把数据放入数组
var array = [data1,data2,data3,data4,data5,data6]
// 遍历循环数组 
// 声明全局yl变量
var yl
for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    let contains = tp.includes(array[i])
    //console.log(contains)
    if (contains){
        yl = array[i]
    }
}
// console.log(yl);
// 正则表达式
var re =  /[0-9]+/gm
// 初始值  成长值
//let num_t1_1 = re.exec(t1_1)[0]
//let num_t1_2 = re.exec(t1_2)[0]

switch (yl){
    case data1:
        console.log(data1);
        if (re.exec(t1_2)[0] >= 88){
           alert("发现极品业力啦！！！")
        }
        else {
         a = yl
        }
        break;
    case data2:
        console.log(data2);
if (re.exec(t2_1_2)[0] >= 158)
{
    alert("发现极品业力啦！！!")
}
else {
    a = yl
}
        break;
    case data3:
if (re.exec(t2_2_2)[0] >= 138)
{
    alert("发现极品业力啦！！!")
}
else {
    a = yl
}
        console.log(data3);
        break;
    case data4:
         console.log(data4);
if (re.exec(t2_1_2)[0] >= 1111)
{
    alert("发现极品业力啦！！!")
}
else {
    a = yl
}
        break;
    case data5:
        console.log(data5);
if (re.exec(t1_2)[0] >= 238){
    alert("发现极品业力啦！！!")
}
else {
    a = yl
}
        break;
    case data6:
        console.log(data6);
if (re.exec(t1_2)[0] >= 2000){
    alert("发现极品业力啦！！!")
}
else {
    a = yl
}
        break;
}
```