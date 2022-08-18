import React from "react"
import { Button, Card, Col, Row, Typography } from "antd"

// styles
import "styles/seller/seller.scss"

const { Text } = Typography

const Seller = () => {
    const products = [
        {
            id: 1,
            description: "Баскет L 26 Острых Крыльев",
            image: "	https://s82079.cdn.ngenix.net/295x0/8dku8dp4k068d5r162v4qontqpp3",
        },
        {
            id: 2,
            description: "Баскет L 26 Острых Крыльев",
            image: "	https://s82079.cdn.ngenix.net/295x0/8dku8dp4k068d5r162v4qontqpp3",
        },
        {
            id: 3,
            description: "Баскет L 26 Острых Крыльев",
            image: "	https://s82079.cdn.ngenix.net/295x0/8dku8dp4k068d5r162v4qontqpp3",
        },
        {
            id: 4,
            description: "Баскет L 26 Острых Крыльев",
            image: "	https://s82079.cdn.ngenix.net/295x0/8dku8dp4k068d5r162v4qontqpp3",
        },
        {
            id: 5,
            description: "Баскет L 26 Острых Крыльев",
            image: "	https://s82079.cdn.ngenix.net/295x0/8dku8dp4k068d5r162v4qontqpp3",
        },
    ]

    return (
        <div className="products-page">
            <Row>
                {products.map((item) => {
                    return (
                        <Col span={12} key={item.id}>
                            <Card
                                className="product-card"
                                bordered={item.id === 1 ? true : false}
                            >
                                <div className="product-card__image mb2">
                                    <img alt="product image" src={item.image} />
                                </div>
                                <div className="product-card__description mb2">
                                    <Text style={{ maxWidth: "20px" }}>
                                        {item.description}
                                    </Text>
                                </div>
                                <div className="product-card__action">
                                    <Button type="primary" danger ghost block>
                                        Добавить
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Seller
