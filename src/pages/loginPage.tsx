import { Button, Col, Divider, Flex, Form, Input, Row, Typography } from "antd";
import { CiLock, CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
type FieldType = {
  username: string;
  password: string;
};
const LoginPage = () => {
  return (
    <Row>
      <Col span={12} className="bg-blue-100">
        col-12
      </Col>
      <Col span={12}>
        <Flex align="center" justify="center" className="h-screen" vertical>
          <Flex className="w-full max-w-[400px] p-4" vertical gap={48}>
            <Flex vertical gap={8} className="">
              <Typography.Title level={1}>Đăng nhập</Typography.Title>
              <Typography.Title level={5} type="secondary">
                Chào mừng bạn quay trở lại
              </Typography.Title>
            </Flex>
            <Flex className="w-full" vertical gap={8}>
              <Form
                name="basic"
                className="w-full"
                // onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input
                    prefix={<CiMail size={20} />}
                    placeholder="Nhập email"
                    size="large"
                  />
                </Form.Item>

                <Form.Item<FieldType>
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    prefix={<CiLock size={20} />}
                    placeholder="Nhập mật khẩu"
                    size="large"
                  />
                </Form.Item>

                <Form.Item label={null} style={{ marginBottom: 0 }}>
                  <Button
                    size="large"
                    className="w-full"
                    type="primary"
                    htmlType="submit"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
              <Divider className="w-full ">Hoặc</Divider>
              <Button
                icon={<FcGoogle size={20} />}
                size="large"
                className="w-full"
                type="default"
              >
                Đăng nhập với Google
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default LoginPage;
