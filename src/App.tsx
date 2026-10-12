import Home from './pages/Home'

// 단일 페이지이므로 라우터 없이 바로 렌더링 (빌드 파일을 file:// 로 바로 열 수 있도록)
export default function App() {
  return <Home />
}
