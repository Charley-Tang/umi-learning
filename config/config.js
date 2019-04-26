import { resolve } from "path";

export default {
  // disableCSSModules: true,//禁用CSS Modules
  plugins: [
    [
      "umi-plugin-react",
      {
        antd: true,
        dva: true
      }
    ]
  ],
  routes: [
    {
      path: "/",
      component: "../layout",
      routes: [
        {
          path: "/",
          component: "./index"
        },
        {
          path: "/todoList",
          component: "./TodoList"
        }
      ]
    }
  ],
  // 配置别名
  alias: {
    "@": resolve(__dirname, "./src")
  }
  // 配置代理
  //   proxy: {
  //     "/api/v1.0.0": {
  //       target: "http://127.0.0.1:5050",
  //       changeOrigin: true
  //     }
  //   }
};
