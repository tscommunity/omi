webpackJsonp([5],{36:function(n,c){n.exports="## Icon \n\nIcon using svg.\n\n## Usage\n\n```html\n<m-icon \n  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'>\n</m-icon>\n\n```\n\nIt can also support multiple paths:\n\n```html\n<m-icon \n paths=\"[{ \n    color: '#F98080', \n    path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'\n  }, \n  { \n    color: '#F95050', \n    path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'\n  }]\">\n</m-icon>\n```\n\n## Use in omi\n\nJSX:\n\n```jsx\n<m-icon \n  path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z' />\n```\n\nJSX:\n\n```jsx\n<m-icon paths={[{\n  color: '#F98080',\n  path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'\n}, {\n  color: '#F95050',\n  path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'\n}]} />\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| paths  | json array |--  |   |\n| path  | string| -- ||\n| scale | number   |   2 | |\n| color | string| black ||\n| rotate | bool| false ||\n\n* [\u2192 You can use antd's SVG path directly](https://ant.design/components/icon/)\n* [\u2192 You can find the path in the github of andt icons](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons/svg)\n\n"}});
//# sourceMappingURL=5.9786c628.chunk.js.map