import { Card, Form, Input, Button } from 'antd';
const FormItem = Form.Item;
function Login(props) {
    const { getFieldDecorator } = props.form;
    function handleSubmit() {
        alert('submit')
    }
    return (
        <div className="login">
            <div className="login-con">
                <Card title="欢迎登陆">
                    <div className="form-con">
                        <Form onSubmit={handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '默认用户名admin!' }],
                                })(
                                    <Input placeholder="默认用户名admin!" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '默认密码admin!' }],
                                })(
                                    <Input type="password" placeholder="默认密码admin!" />
                                )}
                            </FormItem>
                            <FormItem>
                                {/*<a className="login-form-forgot" href="">忘记密码</a>*/}
                                <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
                            </FormItem>
                        </Form>

                        <p className="login-tip">react网站模板平台</p>
                    </div>
                </Card>,
            </div>
        </div >
    )

}

export default Login
