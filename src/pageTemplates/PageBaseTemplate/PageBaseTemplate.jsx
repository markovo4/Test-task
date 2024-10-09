import React from "react";
import HeaderNoAuth from "../../components/header/HeaderNoAuth/index.js";
import Footer from "../../components/footer/index.js";
import PropTypes from "prop-types";

const PageBaseTemplate = ({children}) => {
    return (
        <React.Fragment>
            <header>
                <HeaderNoAuth/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </React.Fragment>
    )
}

PageBaseTemplate.propTypes = {
    children: PropTypes.object.isRequired
}

export default PageBaseTemplate;