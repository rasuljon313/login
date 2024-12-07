// import { Button, Form, Input } from "antd";
// import toast from "react-hot-toast";
// const App = () => {
//   const [form] = Form.useForm();

//   const onFinish = (values) => {
//     console.log("Success:", values);
//     toast.success("Muvaffaqiyatli otdingiz");
//     form.resetFields();
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <Form form={form} name="basic" labelCol={{span: 8,}} wrapperCol={{ span: 16,}} style={{  maxWidth: 600, }} initialValues={{remember: true}}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off" className="form">
//       <Form.Item placeholder="username" label="Username" name="username" rules={[
//           {
//             required: true,
//             message: "Please input your username!",   
//           },
//           {
//             min: 5,
//             message: "Username must be at least 5 characters long!",
//           },
//         ]}>
//         <Input className="username" placeholder="Enter your Username" />
//       </Form.Item>
//       <Form.Item label="Password" name="password" rules={[
//           { 
//             required: true,
//             message: "Please input your password!",
//           },
//           {
//             min: 5,
//             message: "Username must be at least 5 characters long!",
//           }
//         ]}
//       >
//         <Input.Password className="password" placeholder="Enter your password" />
//       </Form.Item>
//       <Form.Item label={null}>
//         <Button className="btn" type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default App;


import { Button, Form, Input } from "antd";
import toast from "react-hot-toast";

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    toast.success("Muvaffaqiyatli otdingiz");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="form"
    >
      <Form.Item
        label="Tell number"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
          {
            pattern: /^\+998[1-9][0-9]{8}$/,
            message: "Phone number must be in the format +998XXXXXXXXX!",
          },
        ]}
      >
        <Input
          className="phone"
          placeholder="Enter your phone number"
          type="tel"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            min: 5,
            message: "Password must be at least 5 characters long!",
          },
        ]}
      >
        <Input.Password
          className="password"
          placeholder="Enter your password"
        />
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

