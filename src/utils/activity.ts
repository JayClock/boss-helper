/** 活跃度过滤阈值：最近活跃时间距今达到该值视为不活跃 */
export const activityFilterExpire = 3 * 24 * 60 * 60 * 1000

const day = 24 * 60 * 60 * 1000

/** 是否在活跃度过滤阈值内（时间戳缺失视为不活跃） */
export function isRecentlyActive(timestamp?: number, now = Date.now()): boolean {
  if (!timestamp) return false
  return now - timestamp < activityFilterExpire
}

/** 按活跃时间戳生成展示文案，超过阈值的档位与活跃度过滤结果保持一致 */
export function formatActiveTime(timestamp: number, now = Date.now()): string {
  const diff = now - timestamp

  if (diff < day) return '今日活跃'
  if (diff < 2 * day) return '昨日活跃'
  if (diff < activityFilterExpire) return '3日内活跃'
  if (diff < 7 * day) return '本周活跃'
  if (diff < 30 * day) return '本月活跃'
  return '较久未活跃'
}
