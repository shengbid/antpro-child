import React from 'react'
import { Descriptions, Card, Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import style from './index.less'
 
const Detail: React.FC = () => {
  return (
    <div>
      <Card>
        <h2>这是子应用详情页</h2>
        <Descriptions title="用户信息">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <Button type="primary">
          提交
        </Button>
        <div className={style.back}>
        <GithubOutlined />自定义样式
        </div>
      </Card>
    </div>
  )
}
 
export default Detail