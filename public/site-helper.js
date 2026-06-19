// public/site-helper.js

(function() {
  'use strict';

  // 配置数据
  const config = {
    siteUrl: 'https://cn-official-9y.com',
    keyword: '九游',
    bannerText: '欢迎访问官方站点',
    badgeColor: '#ff6b6b'
  };

  // 创建页面提示卡片
  function createTipCard() {
    const card = document.createElement('div');
    card.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      max-width: 300px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      padding: 16px;
      font-family: Arial, sans-serif;
      z-index: 9999;
      font-size: 14px;
      line-height: 1.5;
      color: #333;
    `;

    const title = document.createElement('h4');
    title.textContent = config.bannerText;
    title.style.margin = '0 0 8px 0';
    title.style.color = '#2c3e50';
    card.appendChild(title);

    const link = document.createElement('a');
    link.href = config.siteUrl;
    link.textContent = '点击进入 ' + config.keyword;
    link.style.color = '#3498db';
    link.style.textDecoration = 'none';
    link.style.fontWeight = 'bold';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    card.appendChild(link);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: #999;
      padding: 0 4px;
    `;
    closeBtn.addEventListener('click', function() {
      card.remove();
    });
    card.appendChild(closeBtn);

    document.body.appendChild(card);
  }

  // 创建关键词徽章
  function createBadge(text, color) {
    const badge = document.createElement('span');
    badge.textContent = text;
    badge.style.cssText = `
      display: inline-block;
      background: ${color};
      color: #fff;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: bold;
      margin: 4px;
      letter-spacing: 0.5px;
    `;
    return badge;
  }

  // 插入关键词徽章到页面指定位置
  function insertBadges() {
    const keywords = [config.keyword, '官方', '推荐', '安全'];
    const container = document.createElement('div');
    container.id = 'badge-container';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 9999;
      display: flex;
      flex-wrap: wrap;
      max-width: 200px;
    `;

    keywords.forEach(function(kw) {
      const badge = createBadge(kw, config.badgeColor);
      container.appendChild(badge);
    });

    document.body.appendChild(container);
  }

  // 显示访问说明
  function showAccessHint() {
    const hint = document.createElement('div');
    hint.id = 'access-hint';
    hint.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      background: #f0f8ff;
      border: 1px solid #b0d4f1;
      border-radius: 6px;
      padding: 10px 14px;
      font-size: 12px;
      color: #2c3e50;
      max-width: 260px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      z-index: 9998;
      line-height: 1.6;
    `;
    hint.innerHTML = `
      <strong>访问提示</strong><br>
      本页面为演示用途，所有数据均为示例。<br>
      如需访问真实服务，请使用官方渠道：<br>
      <a href="${config.siteUrl}" target="_blank" rel="noopener noreferrer" style="color:#2980b9;">${config.siteUrl}</a>
    `;
    document.body.appendChild(hint);

    // 5秒后自动隐藏
    setTimeout(function() {
      const el = document.getElementById('access-hint');
      if (el) {
        el.style.transition = 'opacity 0.5s';
        el.style.opacity = '0';
        setTimeout(function() {
          if (el) el.remove();
        }, 500);
      }
    }, 5000);
  }

  // 初始化
  function init() {
    createTipCard();
    insertBadges();
    showAccessHint();
  }

  // 确保 DOM 加载完毕
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();