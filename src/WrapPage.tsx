import { Slide, ToastContainer } from 'react-toastify'
import GlobalStyle from './GlobalStyle'
import BaseLayout from './components/BaseLayout'

const WrapPage: React.FC = ({ children }) => (
  <>
    <GlobalStyle></GlobalStyle>
    <BaseLayout>{children}</BaseLayout>
    <ToastContainer transition={Slide}></ToastContainer>
  </>
)

export default WrapPage
