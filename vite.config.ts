import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'
import AutoImport from 'unplugin-auto-import/vite'
import { antdResolver } from '@bit-ocean/auto-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react-router-dom', 'react'],
      resolvers: [antdResolver()],
      dts: './config/auto-imports.d.ts', //此文件配置保存后系统自动生成
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ],
      eslintrc: {
        // 已存在文件设置默认 false，需要更新时再打开，防止每次更新都重新生成
        enabled: true,
        // 生成文件地址和名称
        filepath: './config/.eslintrc-auto-import.json', //此文件为重新启动项目生成的文件
        globalsPropValue: true
      }
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式（这里的配置与6.2步骤中的引入svg组件的name配置项写法有关）
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    host: '0.0.0.0', // 指定监听的IP地址
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
