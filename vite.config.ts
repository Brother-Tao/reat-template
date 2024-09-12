import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './config/.eslintrc-auto-import.json' //此文件为重新启动项目生成的文件
      },
      dts: './config/auto-imports.d.ts', //此文件配置保存后系统自动生成
      imports: ['react', 'react-router'] //此处可填写需要自动引入的库
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    host: 'localhost', // 指定监听的IP地址
    port: 3333, // 指定服务器端口
    open: true, // 开发服务器启动时，自动在浏览器打开
    strictPort: false, // 若端口已被占用，就尝试下一个可用端口
    cors: true // 允许跨域
  },
  build: {
    target: 'modules', // 浏览器兼容目标
    outDir: 'dist', // 打包输出路径
    assetsDir: 'assets', // 静态资源存放路径
    cssCodeSplit: true, // 允许 css 代码拆分
    sourcemap: false, // 不生成 sourceMap 文件
    minify: 'terser', // 缩小文件体积
    terserOptions: {
      compress: {
        drop_console: true, // 取消 console
        drop_debugger: true // 取消 debugger
      }
    }
  }
})
