// 定义一个包含人员信息的数组，每个元素是一个对象，有 name（姓名）和 age（年龄）两个属性
let arr = [
  { name: "张三", age: 28 },
  { name: "李四", age: 25 },
  { name: "王五", age: 21 },
];

// 1. map：提取所有人的名字
// map 会遍历数组中的每一个元素，对每个元素执行回调函数，
// 并把回调的返回值收集成一个新数组（不修改原数组）
let names = arr.map(function (person) {
  // person 是当前遍历到的对象，例如 { name: "张三", age: 28 }
  return person.name; // 只取出 name 属性，作为新数组的元素
});

console.log("所有人的名字：", names);
// 输出：[ '张三', '李四', '王五' ]

// 2. filter：选出年龄大于 25 的人
// filter 会遍历数组中的每一个元素，对每个元素执行回调函数，
// 只有回调返回 true 的元素才会被保留到新数组中（不修改原数组）
let olderThan25 = arr.filter(function (person) {
  // person 是当前遍历到的对象
  return person.age > 25; // 条件：年龄大于 25，满足则保留，否则过滤掉
});

console.log("年龄大于25的人：", olderThan25);
// 输出：[ { name: '张三', age: 28 }, { name: '王五', age: 26 } ]

// 3. find：找到第一个叫"张三"的人
// find 会遍历数组中的每一个元素，对每个元素执行回调函数，
// 一旦找到第一个回调返回 true 的元素，立即停止遍历并返回该元素
// 如果没有找到，则返回 undefined
let zhangSan = arr.find(function (person) {
  // person 是当前遍历到的对象
  return person.name === "张三"; // 条件：名字严格等于"张三"
});

console.log("第一个叫张三的人：", zhangSan);
// 输出：{ name: '张三', age: 28 }

