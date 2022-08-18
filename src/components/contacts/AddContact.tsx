import React, { useState } from "react"

// antd
import { Button, Form, Input } from "antd"

// hooks
import { useAppDispatch } from "hooks/useAppDispatch"

// utils
import { rules } from "utils/rules"

interface InputValue {
    name: string
    address: string
}

const AddContact = () => {
    const [confirmLoading, setConfirmLoading] = useState(false)
    const { addContactAsync } = useAppDispatch()

    const submitForm = (values: InputValue) => {
        setConfirmLoading(true)
        setTimeout(() => {
            addContactAsync({
                key: new Date().getSeconds() + "",
                name: values.name,
                address: values.address,
            })
            setConfirmLoading(false)
        }, 1000)
    }

    return (
        <Form name="basic" onFinish={submitForm} autoComplete="off">
            <Form.Item
                name="name"
                rules={[rules.required("Пожалуйста, заполните поля имя")]}
            >
                <Input placeholder="Имя" />
            </Form.Item>

            <Form.Item
                name="address"
                rules={[rules.required("Пожалуйста, заполните поля адресс")]}
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
                    Добавить
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddContact
