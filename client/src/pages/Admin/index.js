import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";
import MoviesList from "./MoviesList";

function Admin() {
  return (
    <div>
      <PageTitle title="Admin" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Movies" key="1">
          <MoviesList />
          <p>admin</p>
        </Tabs.TabPane>

        <Tabs.TabPane tab="Theatres" key="2">
            {/* <TheatresList /> */}
            <p>admin</p>
        </Tabs.TabPane>
      </Tabs>
      
    </div>
  );
}

export default Admin;