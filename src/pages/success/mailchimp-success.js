import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'

export default function Success(props) {
    // const state = props.location.state.successInfo
    console.log(props)
    return (
        <div>
            <Layout>
            <Seo title="Signup Success"/>
            <div className="container">
                <div className="section">
                <h1>
                    {/* Congratulations {state.name}! */}
                </h1>
                {/* <h5>You have successfully {state.action}</h5> */}
                helo
                </div>
            </div>
            </Layout>
        </div>
    )
}
