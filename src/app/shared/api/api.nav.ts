export const ApiNav = [{
  'id': '1001',
  'title': '桌面',
  'routerLink': '/dashboard',
  'icons': 'fa fa-desktop'
}, {
  'id': '1002',
  'title': '市场',
  'routerLink': '/market',
  'data': [{
    'id': '10020001',
    'title': '卡片市场',
    'routerLink': '/cardMarket'
  }, {
    'id': '10020002',
    'title': '应用市场',
    'routerLink': '/appMarket'
  }]
}, {
  'id': '1003',
  'title': '工作台',
  'routerLink': '/works'
}, {
  'id': '1004',
  'title': '租户',
  'routerLink': '/tenant',
  'data': [{
    'id': '10040001',
    'title': '基本信息',
    'routerLink': '/basic'
  }, {
    'id': '10040002',
    'title': '人员管理',
    'routerLink': '/person'
  }, {
    'id': '10040003',
    'title': '角色管理',
    'routerLink': '/role'
  }, {
    'id': '10040004',
    'title': '权限管理',
    'routerLink': '/duty'
  }, {
    'id': '10040005',
    'title': '卡片管理',
    'routerLink': '/cards'
  }, {
    'id': '10040006',
    'title': '应用管理',
    'routerLink': '/apps'
  }, {
    'id': '10040007',
    'title': '租户日志',
    'routerLink': '/log'
  }]
}, {
  'id': '1005',
  'title': '系统',
  'routerLink': '/system',
  'data': [{
    'id': '10050001',
    'title': '设置',
    'routerLink': '/config',
    'icons': 'fa fa-cog'
  }, {
    'id': '10050002',
    'title': '系统租户',
    'routerLink': '/tenants'
    }, {
      'id': '10050003',
      'title': '分类标签',
      'routerLink': '/labels'
    }, {
      'id': '10050006',
      'title': '数据统计',
      'routerLink': '/statistics'
    }, {
    'id': '10050009',
    'title': '系统日志',
    'routerLink': '/logs'
  }]
}, {
  'id': '1009',
  'title': '帮助',
  'routerLink': '/help',
  'data': [{
    'id': '10090001',
    'title': '欢迎使用',
    'routerLink': '/welcome',
    'icons': 'fa fa-window-restore'
  }, {
    'id': '10090002',
    'title': '关于我们',
    'routerLink': '/about'
  }, {
    'id': '1009003',
    'title': '使用文档',
    'routerLink': '/document',
    'icons': 'fa fa-info-circle'
  }]
}];
