import { Typography, Descriptions, Space, Card } from "antd";
import React from "react";

const PageContent = () => {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        display: "flex",
        padding: "1rem",
        height: "100%",
      }}
    >
      {" "}
      <Typography.Title
        level={4}
        style={{
          margin: 0,
          letterSpacing: "0.7rem",
          wordSpacing: "1.1rem",
          //   color: "whitesmoke",
        }}
      >
        Page Content
      </Typography.Title>
      <Descriptions
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        title="User Info"
      >
        <Descriptions.Item label="Number of Users"></Descriptions.Item>
        <Descriptions.Item label="SSO Total Login">
          1810000000
        </Descriptions.Item>
        <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="Remark">empty</Descriptions.Item>
        <Descriptions.Item label="Address">
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <Card title="Card" size="small">
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  );
};

export default PageContent;
