import { createBrowserRouter } from "react-router-dom";
import { HelloComponent } from "../component/sub1/HelloComponent";
import { WelcomeComponent } from "../component/sub1/WelcomeComponent";
import { GreetingComponent } from "../component/sub1/GreetingComponent";

// 라우터 정의
const root = createBrowserRouter([
    {path: '/sub4/hello', element: <HelloComponent />},
    {path: '/sub4/welcome', element: <WelcomeComponent />},
    {path: '/sub4/greeting', element: <GreetingComponent />},
]);

export default root;