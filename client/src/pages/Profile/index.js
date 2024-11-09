import React from "react";
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />
      
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          {/* <Bookings /> */}
          <p>profile</p>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theatre" key="2">
          {/* <TheatresList /> */}
          <p>profile</p>
        </Tabs.TabPane>
      </Tabs>
   
    </div>
  );
}

export default Profile;