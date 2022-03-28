import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PublisherList } from "./publisher/PublisherList";
import { PublisherCreate } from "./publisher/PublisherCreate";
import { PublisherEdit } from "./publisher/PublisherEdit";
import { PublisherShow } from "./publisher/PublisherShow";
import { BidderList } from "./bidder/BidderList";
import { BidderCreate } from "./bidder/BidderCreate";
import { BidderEdit } from "./bidder/BidderEdit";
import { BidderShow } from "./bidder/BidderShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Publisher"
          list={PublisherList}
          edit={PublisherEdit}
          create={PublisherCreate}
          show={PublisherShow}
        />
        <Resource
          name="Bidder"
          list={BidderList}
          edit={BidderEdit}
          create={BidderCreate}
          show={BidderShow}
        />
      </Admin>
    </div>
  );
};

export default App;
