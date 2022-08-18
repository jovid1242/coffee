import React, { FC } from "react"

// antd
import { Space, Table } from "antd"

// components
import EditContact from "./EditContact"
import RemoveContact from "./RemoveContact"

// models
import { IContact } from "models/contact"
import type { ColumnsType } from "antd/es/table"

interface DataType {
    key: string
    name: string
    address: string
}

interface ContactTableProps {
    data: IContact[]
}

const ContactTable: FC<ContactTableProps> = ({ data }) => {
    const columns: ColumnsType<DataType> = [
        {
            title: "Имя",
            dataIndex: "name",
            key: "name",
            render: (text) => <p className="text-yellow">{text}</p>,
        },
        {
            title: "Адресс",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Действия",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <EditContact user={record} />
                    <RemoveContact user={record} />
                </Space>
            ),
        },
    ]

    return (
        <>
            <Table columns={columns} pagination={false} dataSource={data} />
        </>
    )
}

export default ContactTable
