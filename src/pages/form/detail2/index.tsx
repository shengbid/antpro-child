import React from 'react'
import { Descriptions, Card } from 'antd'
 
const Detail: React.FC = () => {
  return (
    <div>
      <Card>
        <h2>这是子应用详情页2</h2>
        <Descriptions title="用户信息">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}
 
export default Detail