import { Switch, Route } from 'react-router-dom';
import Layout from './layout';
import Router from './router';

function App() {
  return (
    <Layout>
      <Switch>
        {Router.map((router, i) => {
          return (
            <Route
              key={i}
              exact={router.exact}
              path={router.path}
              component={router.component}
            />
          );
        })}
      </Switch>
    </Layout>
  );
}

export default App;
