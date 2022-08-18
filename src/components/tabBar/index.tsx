import React, { useState } from "react"

// antd
import { Button, Typography } from "antd"

// styles
import "styles/tabbar/tabbar.scss"

const { Text } = Typography

const Tabbar = () => {
    const [count, setCoun] = useState(1)

    const plusCount = () => {
        setCoun(count + 1)
    }

    const minusCount = () => {
        setCoun(count - 1)
    }

    return (
        <div className="tab-bar">
            <div className="action">
                <div className="btn-count">
                    <Button type="primary" onClick={minusCount} shape="circle">
                        <Text className="text-white" strong>
                            -
                        </Text>
                    </Button>
                    <div className="product-count text-white">{count}</div>
                    <Button type="primary" onClick={plusCount} shape="circle">
                        <Text className="text-white" strong>
                            +
                        </Text>
                    </Button>
                </div>
                <Button type="primary" size="large" danger>
                    Готово
                </Button>
            </div>
        </div>
    )
}

export default Tabbar
