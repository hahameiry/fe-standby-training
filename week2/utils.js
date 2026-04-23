// 工具函数模块：数组处理函数


// 1. map：提取所有人的名字
// map 会遍历数组中的每一个元素，对每个元素执行回调函数，
// 并把回调的返回值收集成一个新数组（不修改原数组）
export function getNames(arr) {
  return arr.map(function (person) {
    // person 是当前遍历到的对象，例如 { name: "张三", age: 28 }
    return person.name; // 只取出 name 属性，作为新数组的元素
  });
}

// 2. filter：选出年龄大于指定值的人
// filter 会遍历数组中的每一个元素，对每个元素执行回调函数，
// 只有回调返回 true 的元素才会被保留到新数组中（不修改原数组）
export function filterByAge(arr, minAge) {
  return arr.filter(function (person) {
    // person 是当前遍历到的对象
    return person.age > minAge; // 条件：年龄大于指定值，满足则保留，否则过滤掉
  });
}

// 3. find：找到第一个匹配名字的人
// find 会遍历数组中的每一个元素，对每个元素执行回调函数，
// 一旦找到第一个回调返回 true 的元素，立即停止遍历并返回该元素
// 如果没有找到，则返回 undefined
// ─────────────────────────────────────────────
export function findByName(arr, name) {
  return arr.find(function (person) {
    // person 是当前遍历到的对象
    return person.name === name; // 条件：名字严格等于指定名字
  });
}
