import { Button, Form, Input } from "antd";

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form form={form} name="basic" labelCol={{span: 8,}} wrapperCol={{ span: 16,}} style={{  maxWidth: 600, }} initialValues={{remember: true,}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off" className="form">
      <Form.Item placeholder="username" name="username" rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}>
        <Input className="username" placeholder="Enter your Username" />
      </Form.Item>
      <Form.Item
        name="password" 
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password className="password" placeholder="Enter your password" />
      </Form.Item>
      <Form.Item label={null}>
        <Button className="btn" type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;

