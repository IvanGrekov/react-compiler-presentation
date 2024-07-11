# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Try React Compiler:
0. https://react.dev/learn/react-compiler
  0.1 Check existing project - npx react-compiler-healthcheck@latest
1. npm create vite@latest
2. npm install --save-exact react@rc react-dom@rc
3. npm install -D babel-plugin-react-compiler
4. npm install eslint-plugin-react-compiler
5. Check CounterCard
  5.1 Check how many renders without Compiler
  5.2 Check how many renders with Compiler
  5.3 Move `increaseCount` directly to JSX
6. Check UserCard
  6.1 issue with UserListItem / memo(UserListItem)
7. Check eslint error
8. Check CtrlButtons
  8.1 Check CtrlButtons without Compiler (issue with ref.counter)
  8.2 Check CtrlButtons with Compiler
9. Check LaughButton
  9.1 Try to disable eslint rule
  9.2 Check LaughButton without Compiler
  9.3 Check LaughButton without Compiler

### Links:
React Compiler - https://react.dev/learn/react-compiler
Article - https://blog.logrocket.com/exploring-react-compiler-detailed-introduction/
React Conf - https://youtu.be/T8TZQ6k4SLE?t=12020
YouTube - Jack Herrington - https://www.youtube.com/watch?v=PYHBHK37xlE&ab_channel=JackHerrington

