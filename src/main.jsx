import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Trademark from './routes/Trademark/Trademark.jsx'
import Misc from './routes/Misc/Misc.jsx'
import Copyright from './routes/Copyright/Copyright.jsx'
import TrademarkRenewal from './routes/TrademarkRenewal/TrademarkRenewal.jsx'
import TrademarkCancellation from './routes/TrademarkCancellation/TrademarkCancellation.jsx'
import Design from './routes/Design/Design.jsx'
import DesignExaminationReply from './routes/DesignExaminationReply/DesignExaminationReply.jsx'
import DesignRenewal from './routes/DesignRenewal/DesignRenewal.jsx'
import DesignHearing from './routes/DesignHearing/DesignHearing.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/trademark', element: <Trademark />},
  {path: '/trademark-application', element: <Trademark />},
  {path: '/reply-to-trademark-examination', element: <Trademark />},
  {path: '/show-cause-hearing', element: <Trademark />},
  {path: '/misc', element: <Misc />},
  {path: '/copyright', element: <Copyright />},
  {path: '/copyright-registration', element: <Copyright />},
  {path: '/copyright-assignment', element: <Copyright />},
  {path: '/trademark-renewal', element: <TrademarkRenewal />},
  {path: '/post-registration-services', element: <TrademarkRenewal />},
  {path: '/trademark-assignment', element: <TrademarkRenewal />},
  {path: '/trademark-cancellation', element: <TrademarkCancellation />},
  {path: '/trademark-opposition', element: <TrademarkCancellation />},
  {path: '/counter-statement', element: <TrademarkCancellation />},
  {path: '/design', element: <Design />},
  {path: '/design-registration', element: <Design />},
  {path: '/design-examination-reply', element: <DesignExaminationReply />},
  {path: '/design-renewal', element: <DesignRenewal />},
  {path: '/design-hearing', element: <DesignHearing />},
  {path: '*', element: <NotFound />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
