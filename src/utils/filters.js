export function priceFormat(value) {
    if (value === undefined || value === null || isNaN(value)) {
      return value;
    }
    // 使用模板字符串来格式化价格
    return `￥${value.toFixed(2)}`;
}
