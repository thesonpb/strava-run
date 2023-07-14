import React from "react";
import { Button, Form, Input } from "antd";

function LoginPage() {
  const [form] = Form.useForm();
  return (
    <div className="h-screen flex items-center">
      <div className="mx-auto rounded-xl bg-gray p-8">
        <Form form={form}>
          <Form.Item>
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <Input.Password size="large" />
          </Form.Item>
          <Button type="primary" size="large" className="w-full">
            alo
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
