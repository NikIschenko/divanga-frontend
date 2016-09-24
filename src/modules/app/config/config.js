import { hashHistory, browserHistory } from 'react-router';
import Page404 from '../components/pages/Page404';
import IndexPage from '../containers/pages/Index';

export default {

  /**
   * @var string {apiHost} basic API host
   */
  apiHost: 'https://la1fxggyfj.execute-api.us-east-1.amazonaws.com/prod/',

  /**
   * @var boolean {storage}
   * @default false
   * Set as true, if you want that your app save redux actions
   */
  storage: true,

  /**
   * @var string|boolean {indexRoute}
   * @default "/"
   * You can set default route
   */
  indexRoute: "/",
  indexComponent: IndexPage,

  /**
   * @var string|boolean {indexRedirect}
   * @default false
   */
  indexRedirect: false,

  /**
   * @var string {transition}
   * @default "page"
   * Animation class for transition effect, when route change
   */
  transition: "fade-in",

  /**
   * @var string|array of string {routePermission}
   * @default "*"
   * List of allowed roles, that can view pages by default
   */
  routePermission: "*",
  userField: 'current',

  /**
   * @var hashHistory|browserHistory {historyType}
   * History type
   */
  historyType: browserHistory,

  /**
   * @var function of React component {page404}
   * @default null
   * Component that was showing when route not found
   */
  page404: Page404,

  /**
   * @var array of React component {globalComponents}
   * List of react components that was added into global template
   */
  globalComponents: [],
};
