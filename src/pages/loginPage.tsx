import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Image,
  Input,
  Row,
  Typography,
} from "antd";
import { CiLock, CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../assets/image/login.png";
import loginImageMobile from "../assets/image/login_mobile.png";
import { useBreakPoint } from "../hooks/useBreakePoint";
import { useAuth } from "../hooks/useAuth.hook";
type FieldType = {
  username: string;
  password: string;
};
const LoginPage = () => {
  const { isMobile } = useBreakPoint();
  const { loginMutation } = useAuth();
  const onFinish = (values: FieldType) => {
    loginMutation.mutate({
      email: values.username,
      password: values.password,
    });
  };
  const formContent = (
    <Flex className="w-full" vertical gap={8}>
      <Form
        name="basic"
        className="w-full"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<CiMail size={20} />}
            placeholder="Nhập email"
            size="large"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
      <Typography.Text type="secondary">
        Bạn chưa có tài khoản?{" "}
        <Typography.Link href="/register">Đăng ký</Typography.Link>
      </Typography.Text>
    </Flex>
  );
  return isMobile ? (
    <div className="flex h-dvh flex-col overflow-hidden bg-white">
      <div className="h-[38dvh] w-full shrink-0 overflow-hidden">
        <img
          src={loginImageMobile}
          alt="Login"
          className="block h-full w-full object-cover object-[50%_72%]"
        />
      </div>
      <div className="relative -mt-6 flex-1 overflow-y-auto rounded-t-3xl bg-white p-6 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
        <Typography.Title level={3} className="mb-1!">
          Đăng nhập
        </Typography.Title>
        <Typography.Text type="secondary" className="block mb-6">
          Chào mừng bạn quay trở lại
        </Typography.Text>
        {formContent}
      </div>
    </div>
  ) : (
    <Row>
      <Col span={16}>
        <div className="h-screen p-5">
          <Image
            preview={false}
            src={loginImage}
            alt="Login"
            className="w-full h-screen object-cover rounded-xl"
          />
        </div>
      </Col>
      <Col span={8}>
        <Flex align="center" justify="center" className="h-screen" vertical>
          <Flex className="w-3/4  p-4" vertical gap={48}>
            <Flex vertical gap={8} className="">
              <Typography.Title level={1}>Đăng nhập</Typography.Title>
              <Typography.Title level={5} type="secondary">
                Chào mừng bạn quay trở lại
              </Typography.Title>
            </Flex>
            {formContent}
          </Flex>
        </Flex>
      </Col>
    </Row>
  );
};

export default LoginPage;
