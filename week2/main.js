import { getNames, filterByAge, findByName } from "./utils.js";

let arr = [
  { name: "张三", age: 28 },
  { name: "李四", age: 25 },
  { name: "王五", age: 21 },
];
// 1. map：提取所有人的名字
let names = getNames(arr);
console.log("所有人的名字：", names);
// 输出：[ '张三', '李四', '王五' ]

// 2. filter：选出年龄大于 25 的人
let olderThan25 = filterByAge(arr, 25);
console.log("年龄大于25的人：", olderThan25);
// 输出：[ { name: '张三', age: 28 } ]

// 3. find：找到第一个叫"张三"的人
let zhangSan = findByName(arr, "张三");
console.log("第一个叫张三的人：", zhangSan);
// 输出：{ name: '张三', age: 28 }
