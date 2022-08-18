import React, { FC, useState } from "react"

// antd
import { Button, Form, Input } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"
import { useTypedSelector } from "hooks/useTypedSelector"

// models
import { IContact } from "models/contact"

// utils
import { rules } from "utils/rules"

// components
import ModalAction from "components/modal"

// icons
import { EditOutlined } from "@ant-design/icons"

interface InputValue {
    name: string
    address: string
}

interface EditContactProps {
    user: IContact
}

const EditContact: FC<EditContactProps> = ({ user }) => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const { users } = useTypedSelector((state) => state.contacts)
    const { editContactAsync } = useAppDispatch()

    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    const submitForm = (values: InputValue) => {
        setConfirmLoading(true)
        setTimeout(() => {
            editContactAsync({
                key: user.key,
                name: values.name,
                address: values.address,
            })
            setVisible(false)
            setConfirmLoading(false)
        }, 2000)
    }

    return (
        <>
            <Button type="primary" onClick={() => showModal()} ghost>
                <EditOutlined />
            </Button>
            <ModalAction
                title="Редактирование адреса пользователя"
                visible={visible}
                handleCancel={handleCancel}
                confirmLoading={confirmLoading}
                footer={null}
            >
                <Form
                    name="basic"
                    onFinish={submitForm}
                    initialValues={users.find((el) => el === user)}
                    autoComplete="off"
                >
                    <Form.Item
                        name="name"
                        rules={[
                            rules.required("Пожалуйста, заполните поля имя"),
                        ]}
                    >
                        <Input placeholder="Имя" />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        rules={[
                            rules.required("Пожалуйста, заполните поля адресс"),
                        ]}
                    >
                        <Input placeholder="Адресс" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn"
                            loading={confirmLoading}
                            ghost
                        >
                            Изменить
                        </Button>
                    </Form.Item>
                </Form>
            </ModalAction>
        </>
    )
}

export default EditContact
