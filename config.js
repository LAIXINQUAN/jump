/**
 * 公益网页跳转站 — 站点配置
 * 说明：
 *   - 修改「管理密码」：先用下方命令算出新密码的 SHA-256 哈希，替换 adminHash 即可。
 *     node -e "const c=require('crypto');console.log(c.createHash('sha256').update('你的新密码').digest('hex'))"
 *   - 注意：GitHub Pages 为纯静态站，管理密码以前端哈希校验，仅用于防误操作，
 *     无法抵御恶意者直接阅读源码，请勿用于高安全场景。
 */
window.SITE_CONFIG = {
  // GitHub 仓库信息（中转页与后台读写数据依赖）
  owner: 'LAIXINQUAN',        // GitHub 用户名
  repo: 'jump',               // 仓库名
  branch: 'main',             // 默认分支
  linksPath: 'links.json',    // 存放跳转链接数据的文件

  // 管理密码（SHA-256 十六进制哈希）。默认密码：admin123
  adminHash: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',

  // 中转页倒计时秒数
  jumpSeconds: 5
};
