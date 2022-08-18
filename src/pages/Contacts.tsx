import React, { FC, useMemo } from "react"

// antd
import { Card, Col, Layout, Row, Typography } from "antd"

// components
import ContactTable from "components/contacts/ContactTable"
import AddContact from "components/contacts/AddContact"

// styles
import "styles/contacts/contact.scss"
import SearchContact from "components/contacts/SearchContact"

// hooks
import { useTypedSelector } from "hooks/useTypedSelector"
import { useAppDispatch } from "hooks/useAppDispatch"

const { Title } = Typography

const Profile: FC = () => {
    const { users, search } = useTypedSelector((state) => state.contacts)
    const { getContact } = useAppDispatch()

    const filteredUsers = () => {
        return users.filter((user) => {
            if (user.name.toLowerCase().includes(search.toLowerCase())) {
                return true
            }
            return false
        })
    }

    useMemo(() => {
        getContact()
    }, [])

    return (
        <Layout>
            <div className="contact mh100">
                <div className="contact__wrapper">
                    <Row>
                        <Col span={6}>
                            <Card className="left-bar">
                                <Title level={4} className="text-yellow mb4">
                                    Добавить пользователя
                                </Title>
                                <AddContact />
                            </Card>
                        </Col>
                        <Col span={18}>
                            <Card className="right-bar">
                                <div className="mb4">
                                    <SearchContact />
                                </div>
                                <ContactTable data={filteredUsers()} />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export default Profile
