import { ToastContainer } from 'react-toastify/unstyled';

import { cn } from '@/utils/cn-util';

import 'react-toastify/ReactToastify.css';
import '@/scss/toast-provider.scss';

const ToastProvider = () => (
  <ToastContainer
    className={cn('toast')}
    newestOnTop
    pauseOnHover
  />
);

export default ToastProvider;
