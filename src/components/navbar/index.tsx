import React, { FC } from "react"
import { useNavigate } from "react-router-dom"

// antd
import { Button, Col, Layout, Menu, Row, Space } from "antd"
import { RouteName } from "router"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import { useAppDispatch } from "hooks/useAppDispatch"

// styles
import "styles/header.scss"

const Navbar: FC = () => {
    const { logout } = useAppDispatch()
    const { isAuth, user } = useTypedSelector((state) => state.auth)
    const navigate = useNavigate()

    return (
        <div className="header">
            <Layout.Header>
                <Row>
                    <Col span={22}>
                        <div className="logo">
                            <span className="text-yellow">Logo</span>
                        </div>
                    </Col>
                    <Col span={2}>
                        {isAuth ? (
                            <Space>
                                <div className="text-yellow">
                                    {user.username}
                                </div>
                                <Menu theme="light" mode="horizontal">
                                    <Menu.Item key="1">
                                        <Button
                                            type="primary"
                                            onClick={() => logout()}
                                            className="btn"
                                            ghost
                                        >
                                            Выйти
                                        </Button>
                                    </Menu.Item>
                                </Menu>
                            </Space>
                        ) : (
                            <>
                                <Menu
                                    theme="light"
                                    mode="horizontal"
                                    selectable={false}
                                >
                                    <Menu.Item
                                        onClick={() =>
                                            navigate(RouteName.LOGIN)
                                        }
                                        key="1"
                                    >
                                        <Button
                                            type="primary"
                                            className="btn"
                                            onClick={() => logout()}
                                            ghost
                                        >
                                            Вход
                                        </Button>
                                    </Menu.Item>
                                </Menu>
                            </>
                        )}
                    </Col>
                </Row>
            </Layout.Header>
        </div>
    )
}

export default Navbar
