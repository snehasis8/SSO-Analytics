import React from "react";
import "./AppLayout.css";
import { Breadcrumb, ConfigProvider, Layout, Typography, theme } from "antd";
// import Navbar from "../Component/Navbar/Navbar";
import PageContent from "../PageContent/PageContent";
const { Header, Sider, Content, Footer } = Layout;

const AppLayout = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,

      token: {
        // colorPrimary: "#0E58D6",
        // colorBgHeader: "white",
        colorPrimary: "eef1f140",
        // colorPrimaryText: "blue",
        // fontFamily: "roboto",
        // colorBorderBg: "green",
        // colorBorder: "red",
        // // colorBgBase: "#0D1117",
        // colorText: "lightgrey",
        // colorPrimaryBg: "green",
      },

      components: {
        Layout: {
          colorBgHeader: "#e84232",
          //   colorText: "yellow",
          colorBorder: "red",
          colorBorderBg: "yellow",
        },
        Card: {
          colorBorder: "red",
          colorBorderBg: "yellow",
          colorBgBase: "yellow",
          colorPrimary: "red",
          colorBgHeader: "orange",
        },
      },
    }}
  >
    <Layout className="container">
      <Header
        style={{
          justifyContent: "flex-start",
          //backgroundColor: "#0E58D6",
          alignItems: "center",
        }}
      >
        <div className="brand">
          <Typography.Title
            level={4}
            style={{
              margin: 0,
              letterSpacing: "0.7rem",
              wordSpacing: "1.1rem",
              //   color: "whitesmoke",
            }}
          >
            SSO Analytics
          </Typography.Title>
        </div>
      </Header>
      {/* <Navbar /> */}
      <Layout>
        <PageContent />
      </Layout>
      <Layout>
        <Footer>For internal use only</Footer>
      </Layout>
    </Layout>
  </ConfigProvider>
);

export default AppLayout;
