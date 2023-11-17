import React, { useState } from 'react';
import {Input, Button, message, Form} from 'antd';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const ButtonClick = () => {
    // message.success("Hello " + inputValue);
    alert(inputValue);
  };

  return (
    <div>
      <Form 
        labelCol={{span: 8}} 
        wrapperCol={{span: 16}} 
        style={{maxWidth: 800}}>
          <Form.Item
    >
      <h1>What is your name</h1>
      
      </Form.Item>
          <Form.Item
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input
        placeholder="Enter your name"
        value={inputValue}
        onChange={InputChange}
      />
      </Form.Item>
      
      <Button type="primary" htmlType="submit" onClick={ButtonClick}>
      Submit
      </Button>
      </Form>
      {/* </Row> */}
    </div>
  );
};

export default MyComponent;
