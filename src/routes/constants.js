import { Home, Severe, AlertStream } from "@screens";

const ROUTES = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/severe",
    component: Severe
  },
  {
    path: "/debug",
    component: AlertStream
  }
];

export {
  ROUTES
}